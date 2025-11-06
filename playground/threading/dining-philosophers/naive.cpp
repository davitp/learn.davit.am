#include <iostream>
#include <pthread.h>
#include <string.h>
#include <semaphore.h>
#include <cstdlib> 
#include <cerrno>
#include <unistd.h>

// declare 5 philosophers by default
const int DEFAULT_N_PHILOSOPHERS = 5;

/**
 * A structure to define philosopher's context
 */
struct philosopher_context_t
{
    // the index of current philosopher
    int index;

    // the number of philosophers
    int count;

    // semaphores to synchronize access to forks
    sem_t* forks;
};


// the philosophers function implementation
void* philosopher(void* arg){

    // get the context from argument
    philosopher_context_t* ctx = (philosopher_context_t*) arg;

    // infinitely doing the same thing
    while(true){

        // start thinking
        printf("P%d is thinking...\n", ctx->index);

        // pick left and then right fork
        int first = ctx->index;
        int second = (ctx->index + 1) % ctx->count;

        // wait for the left fork
        sem_wait(&ctx->forks[first]);
        sem_wait(&ctx->forks[second]);

        // start eating
        printf("P%d is eating...\n", ctx->index);
        
        // put down the forks
        sem_post(&ctx->forks[first]);
        sem_post(&ctx->forks[second]);
    }

    return NULL;
}

int main(int argc, char** argv){

    // the number of philosophers
    int count = DEFAULT_N_PHILOSOPHERS;

    // if argument is given
    if(argc > 1){
        // use argument as a number of philosophers
        count = std::atoi(argv[1]);
    }

    // create sempahores for forks
    sem_t* forks = new sem_t[count];

    // initialize semaphores
    for(int i = 0; i < count; ++i){
        
        // initialize semaphors to 1 (fork is available)
        int result = sem_init(&forks[i], 0, 1);

        // error while initializing
        if(result < 0){
            std::cerr << strerror(errno) << std::endl;
            exit(errno);
        }
    }

    // create context objects for philosophers
    philosopher_context_t* contexts = new philosopher_context_t[count];
    
    // create threads
    pthread_t* threads = new pthread_t[count];

    // initialize threads
    for(int i = 0; i < count; ++i){

        contexts[i].index = i; 
        contexts[i].count = count;
        contexts[i].forks = forks;

        // create a new thread for philosopher
        int threadCreated = pthread_create(&threads[i], NULL, philosopher, (void*) &contexts[i]);

        // could not create a thread
        if(threadCreated != 0){
            std::cerr << strerror(threadCreated) << std::endl;
            exit(threadCreated);
        }
    }

    // join threads
    for(int i = 0; i < count; ++i){
        int joined = pthread_join(threads[i], NULL);
    }

    // delete threads
    delete [] threads;

    // delete contexts
    delete [] contexts;

    // destroy semaphores
    for(int i = 0; i < count; ++i){
        sem_destroy(&forks[i]);
    }

    // delete seamphores
    delete [] forks;

    return 0;
}