(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1844],{6364:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linux-programming/tasks/threads/thread-pool",function(){return a(3990)}])},3990:function(e,n,a){"use strict";a.r(n),a.d(n,{useTOC:function(){return o}});var t=a(1527),i=a(5141),l=a(1790),s=a(9947),r=a(7582);function o(e){return[{value:"Requirements",id:"requirements",depth:3},{value:"Expected result",id:"expected-result",depth:3}]}n.default=(0,i.c)(function(e){let{toc:n=o(e)}=e,a={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{children:"TH-2: The thread pool implementation"}),"\n",(0,t.jsx)(a.h3,{id:n[0].id,children:n[0].value}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Create a C++ library (shared object) that implements a simple thread pool"}),"\n",(0,t.jsx)(a.li,{children:"Thread pool should be implemented as a class called “parallel_scheduler”"}),"\n",(0,t.jsxs)(a.li,{children:["Thread pool takes a ",(0,t.jsx)(a.strong,{children:"capacity"})," argument in the constructor as a maximum number of threads in the pool."]}),"\n",(0,t.jsxs)(a.li,{children:["Thread pool defines a method ",(0,t.jsx)(a.strong,{children:"run"})," that takes as an input two arguments ",(0,t.jsx)(a.strong,{children:"function"})," and the ",(0,t.jsx)(a.strong,{children:"argument"}),"."]}),"\n",(0,t.jsx)(a.li,{children:"All the functions given to the “run” method are enqueued and the thread pool should execute them as soon as any of its threads gets time."}),"\n",(0,t.jsx)(a.li,{children:"Next, another executable application is implemented to demonstrate the usage of the thread pool library."}),"\n",(0,t.jsx)(a.li,{children:"The demonstration application should enqueue various functions for the execution (more than the capacity)."}),"\n",(0,t.jsx)(a.li,{children:"The module “parallel_scheduler” should be compiled as a shared library (parallel_scheduler.so) and should be linked with the demo application."}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:n[1].id,children:n[1].value}),"\n",(0,t.jsx)(a.p,{children:"The resulting application should be able to build and execute from command line as follows:"}),"\n",(0,t.jsx)(a.pre,{icon:r.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,t.jsxs)(a.code,{children:[(0,t.jsx)(a.span,{children:(0,t.jsx)(a.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"make"})}),"\n",(0,t.jsx)(a.span,{children:(0,t.jsx)(a.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"./demo-application"})})]})}),"\n",(0,t.jsxs)(a.p,{children:["The final solution should contain a ",(0,t.jsx)(a.strong,{children:"Makefile"})," for the multi-stage build. The Makefile should also contain targets ",(0,t.jsx)(a.strong,{children:"all"})," and ",(0,t.jsx)(a.strong,{children:"clean"}),". It’s recommended to have compiler and compiler flags to be declared as a Makefile variables. Alternatively, ",(0,t.jsx)(a.strong,{children:"cmake"})," could also be used instead of make."]})]})},"/linux-programming/tasks/threads/thread-pool",{filePath:"pages/linux-programming/tasks/threads/thread-pool.mdx",timestamp:1712608579e3,pageMap:l.v,frontMatter:{description:"Build a C++ thread pool library, 'parallel_scheduler', with customizable capacity. Enqueue functions for efficient execution and demonstrate usage in a demo application. Compile as a shared library for easy integration."},title:"TH-2: The thread pool implementation"},"undefined"==typeof RemoteContent?o:RemoteContent.useTOC)}},function(e){e.O(0,[8702,2888,9774,179],function(){return e(e.s=6364)}),_N_E=e.O()}]);