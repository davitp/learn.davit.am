#include <iostream>
#include <pthread.h>
#include <string.h>
#include <cstdlib> 
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

    // the condition variable for "not full"
    pthread_cond_t* not_full;

    // the condition variable for "not empty"
    pthread_cond_t* not_empty;
};


void* producer(void* arg){

    // the worker context
    worker_context_t* ctx = (worker_context_t*) arg;

    while(true){

        // ensure exclusive access to the buffer
        pthread_mutex_lock(ctx->lock);

        // wait until buffer has space to produce
        while((int) ctx->buffer->size() >= ctx->buffer_size){
            pthread_cond_wait(ctx->not_full, ctx->lock);
        }

        // add new element to the buffer (produce)
        ctx->buffer->push_back('x');
        usleep(2000);

        printf("\rP: Elements in the buffer: %d/%d        ", (int) ctx->buffer->size(), ctx->buffer_size);

        // signal that buffer is not empty now
        pthread_cond_signal(ctx->not_empty);

        // unlock the buffer
        pthread_mutex_unlock(ctx->lock);
    }

    return NULL;
}

void* consumer(void* arg){

    // the worker context
    worker_context_t* ctx = (worker_context_t*) arg;

    while(true){

        // ensure exclusive access to the buffer
        pthread_mutex_lock(ctx->lock);

        // wait until buffer has at least one element
        while(ctx->buffer->empty()){
            pthread_cond_wait(ctx->not_empty, ctx->lock);
        }

        // remove last element from the buffer (consume)
        ctx->buffer->pop_back();
        usleep(1000);
        
        printf("\rC: Elements in the buffer: %d/%d        ", (int) ctx->buffer->size(), ctx->buffer_size);

        // signal that buffer is not full now
        pthread_cond_signal(ctx->not_full);

        // unlock the buffer
        pthread_mutex_unlock(ctx->lock);
    }

    return NULL;
}

int main(int argc, char** argv){

    // allocate the vector
    std::vector<char>* buffer = new std::vector<char>();

    // initialize locks
    pthread_mutex_t* lock = new pthread_mutex_t;
    pthread_mutex_init(lock, NULL);

    // initialize condition variables
    pthread_cond_t* not_full = new pthread_cond_t;
    pthread_cond_init(not_full, NULL);
    
    pthread_cond_t* not_empty = new pthread_cond_t;
    pthread_cond_init(not_empty, NULL);

    // initialize the common worker context
    worker_context_t* context = new worker_context_t;
    context->buffer = buffer;
    context->buffer_size = BUFFER_SIZE;
    context->lock = lock;
    context->not_full = not_full;
    context->not_empty = not_empty;

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

    pthread_cond_destroy(not_full);
    delete not_full;
    
    pthread_cond_destroy(not_empty);
    delete not_empty;

    pthread_mutex_destroy(lock);
    delete lock;

    delete buffer;

    return 0;
}
