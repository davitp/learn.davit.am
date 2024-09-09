(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5965],{8364:function(i,s,h){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linux-programming/samples/create-thread",function(){return h(7440)}])},7440:function(i,s,h){"use strict";h.r(s),h.d(s,{useTOC:function(){return t}});var n=h(2676),e=h(902),l=h(3103),r=h(5717),a=h(3815);function t(i){return[]}s.default=(0,e.c)(function(i){let s={code:"code",h1:"h1",p:"p",pre:"pre",span:"span",strong:"strong",...(0,r.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"Creating a thread"}),"\n",(0,n.jsxs)(s.p,{children:["The sample demonstrates how to create a thread using ",(0,n.jsx)(s.strong,{children:"pthread_create()"})," function and wait for its completion."]}),"\n",(0,n.jsx)(s.pre,{tabIndex:"0","data-language":"c","data-word-wrap":"",children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <pthread.h>"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <iostream>"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <sys/types.h>"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// the function that is going to run in a separate thread"})}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// as per the requirement of the library, it should accept a single argument"})}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// of type void* and return void* from the function"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"void*"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" threadFunction"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"void*"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" arg"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"	"})}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // we will make the thread to work infinitely "})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    while"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"true"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // always print + symbol"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        std::cout "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "+"'}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // nothing to return"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    return"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" NULL"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"int"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" main"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(){"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // printing a message from the main thread"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    std::cout "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Hello from main thread... "'}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <<"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" std::endl;"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // the variable will hold the thread identifier we are going to create"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    pthread_t"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" tid;"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // create thread to run threadFunction routine, the identifier of the thread"})}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // will be stored in the variable tid that is passed by reference in this example"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    int"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" threadCreated "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" pthread_create"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"&"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"tid, "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"NULL"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", threadFunction, "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"NULL"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"); "})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // check if created successfully"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    if"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(threadCreated "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"!="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        std::cerr "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Could not create new thread"'}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <<"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" std::endl;"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"        return"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" threadCreated;"})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // after thread is created, we will infinitely print - symbol from the main thread"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    while"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"true"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        std::cout "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "-"'}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // we will never reach here as there is an infinite loop, however, in general we "})}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // should wait for the thread's completion."})}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // return value of thread"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    void*"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" retval;"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // join the thread and get its return value"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    int"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" joinResult "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" pthread_join"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(tid, "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"&"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"retval);"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    return"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,n.jsx)(s.p,{children:"The file can be compiled and executed as follows:"}),"\n",(0,n.jsx)(s.pre,{icon:a.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"g++"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" thread.cpp"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -pthread"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -o"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" thread"})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"./thread"})})]})}),"\n",(0,n.jsx)(s.p,{children:"The program is supposed to print + and - signs without any particular order as follows:"}),"\n",(0,n.jsx)(s.pre,{icon:a.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Hello"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" from"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" the"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" main"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" thread..."})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-++-++-+---+-+-+-+++---+-+-+-++-+-+-++-+---+-+--+---+--+-++-+-+--+-++-+-+-+-+-++-+-+-+-+-+-++-+-+---+-+-+-+-+-+-+-+-+---+-+-+-+--+--+-+-++-+-+--+-+-+--+-+-+---+---+--+-+-+-++-++-+--+-+-+-+-+-+--+--+-++-++-++-+---+-+-+---+-+-+--+-+-+-++-+-+-+++-+-+-++-++-+-+++-++-+-++-+-+++-+++++++-+-+-------------------------------------------------------------------------------------------------------+-+-+--+-+-+++-+-++++-+-+-+-+-+-+-++++-+++++-++++-+-+-+-+-+--++-+-+---------------------------------------------------------------------------------------------------------------------+--+-+-+-+----+-+-+-+----+--+-++-++-+++-+-+-+--+-+++-++-+-+++-++-+--++-+++-++-+--+-+-+-++-+-++-+-+-+--+-++-+-+-+-----+-+-+-+-+---+--+-++-++-+---+-+-++-+--+-++-+++-+-+--+-+-+-++-+-+-+-+-+-+-+-+-++-+--+-++-+-+-+-+-+-++-+-+-+-+-+-+-+--------------------------------------------------+-++-+-+-+-+-++++-+-+-+-+-+-+--+-+++-+--+-+++-+++-+++++-++++-++++-+++++-+-+-+-+-+-++-+++-++++-+-+-++-+-+-+++-+-+-+-++++-++++-+-+-+-+-+-+--+--+-++-+++-+--+-+++-+-+-+---+-+-+-+-+++-+++-+-+-+-+-+++-++++-+-+-+----+-+-+-+-+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-+-+-+-+-++++-+-+----+-+-+++-+-+-+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---+--+-+-+-+-+--+-+-+++-++++-+++-+-+-+-+-+-++-+-+++-++++-++++-++++-+-+-+-++-+-+-++++-++-+-+-+-++-++++-+---+-+-+-+-+-+-+-++++-++++-+-++-+-+-+-+-+-+++-+-+-+--+-+++++-+++-++++-++-+-+--+-++-+++-+----+-+-+-+-+-+-+-+-+-+++++-+-+-+-+-+-+-+-++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"})})]})})]})},"/linux-programming/samples/create-thread",{filePath:"pages/linux-programming/samples/create-thread.mdx",timestamp:1712608548e3,pageMap:l.v,frontMatter:{description:"The sample demonstrates how to create a thread using pthread_create() function and wait for its completion."},title:"Creating a thread"},"undefined"==typeof RemoteContent?t:RemoteContent.useTOC)}},function(i){i.O(0,[4669,2888,9774,179],function(){return i(i.s=8364)}),_N_E=i.O()}]);