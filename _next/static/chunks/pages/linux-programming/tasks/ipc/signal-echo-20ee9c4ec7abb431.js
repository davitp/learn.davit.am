(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1987],{8570:function(i,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linux-programming/tasks/ipc/signal-echo",function(){return e(2345)}])},2345:function(i,s,e){"use strict";e.r(s),e.d(s,{useTOC:function(){return t}});var n=e(2676),l=e(9293),h=e(1570),r=e(5286),a=e(9109);function t(i){return[{value:"Requirements",id:"requirements",depth:3},{value:"Expected result",id:"expected-result",depth:3}]}s.default=(0,l.c)(function(i){let{toc:s=t(i)}=i,e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"IPC-1: Signal echo"}),"\n",(0,n.jsx)(e.h3,{id:s[0].id,children:s[0].value}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Write a C++ program that prints its PID and registers a signal handler for ",(0,n.jsx)(e.strong,{children:"SIGUSR1"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:["The handler of the signal ",(0,n.jsx)(e.strong,{children:"SIGUSR1"})," is suppose to react by printing the following information:","\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"The PID of the sender process,"}),"\n",(0,n.jsx)(e.li,{children:"The UID and the user name of the sender,"}),"\n",(0,n.jsx)(e.li,{children:"The current values of the EIP, EAX, EBX registers."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.li,{children:"Program should enter an infinite loop and perform a sleeping delay on each iteration (example: sleep for 10 seconds)."}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:s[1].id,children:s[1].value}),"\n",(0,n.jsx)(e.p,{children:"The resulting application should be able to build and execute from command line as follows:"}),"\n",(0,n.jsx)(e.pre,{icon:a.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"make"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"./signal-echo"})})]})}),"\n",(0,n.jsxs)(e.p,{children:["Then, once any other process sends ",(0,n.jsx)(e.strong,{children:"SIGUSR1"})," signal to our process, it should print the following information:"]}),"\n",(0,n.jsx)(e.pre,{icon:a.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Received"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" a"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" SIGUSR1"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" signal"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" from"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" process"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" [PID] executed by [UID] ([username])."})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"State"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" of"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" the"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" context:"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" EIP"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" ="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" [value "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"of"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" EIP],"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" EAX"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" ="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" [value "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"of"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" EAX],"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" EBX"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" ="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" [value "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"of"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" EBX]."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]})]})}),"\n",(0,n.jsxs)(e.p,{children:["The final solution should contain a ",(0,n.jsx)(e.strong,{children:"Makefile"})," for the multi-stage build. The Makefile should also contain targets ",(0,n.jsx)(e.strong,{children:"all"})," and ",(0,n.jsx)(e.strong,{children:"clean"}),". It’s recommended to have compiler and compiler flags to be declared as a Makefile variables. Alternatively, ",(0,n.jsx)(e.strong,{children:"cmake"})," could also be used instead of make."]})]})},"/linux-programming/tasks/ipc/signal-echo",{filePath:"pages/linux-programming/tasks/ipc/signal-echo.mdx",timestamp:1712608548e3,pageMap:h.v,frontMatter:{description:"Enhance your C++ programming skills on Linux by creating a program that prints its PID and sets up a signal handler for SIGUSR1. Explore handling custom signals effectively, printing sender process details, and accessing register values. Perfect for understanding signal handling and process communication in C++ on Linux."},title:"IPC-1: Signal echo"},"undefined"==typeof RemoteContent?t:RemoteContent.useTOC)}},function(i){i.O(0,[4661,2888,9774,179],function(){return i(i.s=8570)}),_N_E=i.O()}]);