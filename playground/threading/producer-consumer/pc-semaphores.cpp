#include <iostream>
#include <pthread.h>
#include <string.h>
#include <semaphore.h>
#include <cerrno>
#include <unistd.h>
#include <vector>

int BUFFER_SIZE = 500;
int PRODUCERS = 10;
int CONSUMERS = 10;

// the worker context for producers and consumers
struct worker_context_t {

    // the limit of the buffer
    int buffer_size;

    // the bounded buffer
    std::vector<char>* buffer;

    // the lock to synchronize access to the buffer
    pthread_mutex_t* lock;

    // the semaphore to hold available slots
    sem_t* available_counter;

    // the semaphore to indicate number of occupied slots
    sem_t* occupied_counter;
};


void* producer(void* arg){

    // the worker context
    worker_context_t* ctx = (worker_context_t*) arg;

    while(true){

        // wait to have at least one slot to produce
        sem_wait(ctx->available_counter);

        // ensure exclusive access to the buffer
        pthread_mutex_lock(ctx->lock);

        // add new element to the buffer (produce)
        ctx->buffer->push_back('x');
        usleep(2000);

        printf("\rP: Elements in the buffer: %d/%d        ", (int) ctx->buffer->size(), ctx->buffer_size);

        // unlock the buffer
        pthread_mutex_unlock(ctx->lock);
        
        // increment the number of occupied slots
        sem_post(ctx->occupied_counter);
    }

    return NULL;
}

void* consumer(void* arg){

    // the worker context
    worker_context_t* ctx = (worker_context_t*) arg;

    while(true){

        // wait to have at least one full slot to consume
        sem_wait(ctx->occupied_counter);

        // ensure exclusive access to the buffer
        pthread_mutex_lock(ctx->lock);

        // remove last element to the buffer (consume)
        ctx->buffer->pop_back();
        usleep(1000);
        
        printf("\rC: Elements in the buffer: %d/%d        ", (int) ctx->buffer->size(), ctx->buffer_size);

        // unlock the buffer
        pthread_mutex_unlock(ctx->lock);
        
        // increment the number of available slots when removing element
        sem_post(ctx->available_counter);
    }

    return NULL;
}

int main(int argc, char** argv){

    // allocate the vector
    std::vector<char>* buffer = new std::vector<char>();

    // initialize locks
    pthread_mutex_t* lock = new pthread_mutex_t;
    pthread_mutex_init(lock, NULL);

    // initialize available slots counter semaphore (there are N available slots at the beginning)
    sem_t* available_counter = new sem_t;
    sem_init(available_counter, 0, BUFFER_SIZE);

    // initialize occupied slots counter semaphore (there are 0 occupied slots at the beginning)
    sem_t* occupied_counter = new sem_t;
    sem_init(occupied_counter, 0, 0);

    // initialize the common worker context
    worker_context_t* context = new worker_context_t;
    context->buffer = buffer;
    context->buffer_size = BUFFER_SIZE;
    context->lock = lock;
    context->available_counter = available_counter;
    context->occupied_counter = occupied_counter;

    // initialize worker threads
    pthread_t* producers = new pthread_t[PRODUCERS];
    pthread_t* consumers = new pthread_t[CONSUMERS];

    // create producer threads
    for(int i = 0; i < PRODUCERS; ++i){
        pthread_create(&producers[i], NULL, producer, (void*) context);
    }

    // create consumer threads
    for(int i = 0; i < CONSUMERS; ++i){
        pthread_create(&consumers[i], NULL, consumer, (void*) context);
    }


    // wait for all producers 
    for(int i = 0; i < PRODUCERS; ++i){
        pthread_join(producers[i], NULL);
    }

    // wait for all consumers
    for(int i = 0; i < CONSUMERS; ++i){
        pthread_join(consumers[i], NULL);
    }

    delete context;

    delete [] producers;
    delete [] consumers;

    sem_destroy(occupied_counter);
    delete occupied_counter;

    sem_destroy(available_counter);
    delete available_counter;

    pthread_mutex_destroy(lock);
    delete lock;

    delete buffer;

    return 0;
}