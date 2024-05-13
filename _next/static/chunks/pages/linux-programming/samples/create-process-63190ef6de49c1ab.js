(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3853],{2872:function(i,s,h){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linux-programming/samples/create-process",function(){return h(5492)}])},5492:function(i,s,h){"use strict";h.r(s),h.d(s,{useTOC:function(){return a}});var l=h(2676),n=h(9293),e=h(1570),r=h(5286),k=h(9109);function a(i){return[]}s.default=(0,n.c)(function(i){let s={code:"code",h1:"h1",p:"p",pre:"pre",span:"span",strong:"strong",...(0,r.a)(),...i.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"Creating a process"}),"\n",(0,l.jsxs)(s.p,{children:["The sample demonstrates how to create a process using ",(0,l.jsx)(s.strong,{children:"fork()"})," function."]}),"\n",(0,l.jsx)(s.pre,{tabIndex:"0","data-language":"c","data-word-wrap":"",children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <sys/types.h>"})]}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <unistd.h>"})]}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <iostream>"})]}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <cerrno>"})]}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <sys/wait.h>"})]}),"\n",(0,l.jsx)(s.span,{children:" "}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"int"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" main"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(){"})]}),"\n",(0,l.jsx)(s.span,{children:" "}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // starting a parent process"})}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    std::cout "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Parent process started... "'}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" std::endl;"})]}),"\n",(0,l.jsx)(s.span,{children:" "}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // create a child process by cloning the current one "})}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    pid_t"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" child "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" fork"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"();"})]}),"\n",(0,l.jsx)(s.span,{children:" "}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // make sure we did not fail while creating a process"})}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    if"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(child "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=="}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" -"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"        return"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" errno;"})]}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,l.jsx)(s.span,{children:" "}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // if the return value of the fork() is 0, then we are now running in the child process"})}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // if the return value of the fork() is positive, then we are running inside the parent process"})}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    if"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(child "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=="}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // this will be printed ONLY from the child process"})}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        std::cout "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Child process says hello. PID: "'}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" getpid"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"() "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" std::endl;"})]}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    else"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" if"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(child "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // this will be printed ONLY from the parent process"})}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        std::cout "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "This will only be executed in the parent process. PID: "'}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" getpid"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"() "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" std::endl;"})]}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,l.jsx)(s.span,{children:" "}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // this message will be printed twice: from both parent and child processes"})}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    std::cout "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "General hello from "'}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" getpid"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"() "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" std::endl;"})]}),"\n",(0,l.jsx)(s.span,{children:" "}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // wait for the child only in the parent"})}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    if"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(child "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        "})}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // a variable to keep the exit code of the child process once it finishes"})}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"        int"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" childStatus "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" -"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(s.span,{children:" "}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // wait for the completion of the child process"})}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"        pid_t"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" waitingChildPid "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" waitpid"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(child, "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"&"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"childStatus, "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"0"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,l.jsx)(s.span,{children:" "}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:'        // child process completes its execution with a "childStatus" exit code'})}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        std::cout "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Child process is over, we can complete parent as well. Child process exit code "'}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" childStatus "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" std::endl;"})]}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,l.jsx)(s.span,{children:" "}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // process completion message from both processes"})}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    std::cout "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Completing process "'}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" getpid"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"() "}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" std::endl;"})]}),"\n",(0,l.jsx)(s.span,{children:" "}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    return"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,l.jsx)(s.p,{children:"The file can be compiled and executed as follows:"}),"\n",(0,l.jsx)(s.pre,{icon:k.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"g++"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" fork.cpp"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -o"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" fork"})]}),"\n",(0,l.jsx)(s.span,{children:(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"./fork"})})]})}),"\n",(0,l.jsx)(s.p,{children:"The program is supposed to start a process and clone itself printing appropriate messages as follows:"}),"\n",(0,l.jsx)(s.pre,{icon:k.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Parent"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" process"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" started..."})]}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"This"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" will"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" only"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" be"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" executed"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" in"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" parent"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" process."}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" PID:"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 328"})]}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"General"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" hello"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" from"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 328"})]}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Child"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" process"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" says"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" hello."}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" PID:"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 329"})]}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"General"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" hello"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" from"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 329"})]}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Completing"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" process"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 329"})]}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Child"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" process"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" is"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" over,"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" we"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" can"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" complete"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" parent"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" as"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" well."}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Child"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" process"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" exit"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" code"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"})]}),"\n",(0,l.jsxs)(s.span,{children:[(0,l.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Completing"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" process"}),(0,l.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 328"})]})]})})]})},"/linux-programming/samples/create-process",{filePath:"pages/linux-programming/samples/create-process.mdx",timestamp:1712608548e3,pageMap:e.v,frontMatter:{description:"The sample demonstrates how to create a process using fork() function."},title:"Creating a process"},"undefined"==typeof RemoteContent?a:RemoteContent.useTOC)}},function(i){i.O(0,[4661,2888,9774,179],function(){return i(i.s=2872)}),_N_E=i.O()}]);