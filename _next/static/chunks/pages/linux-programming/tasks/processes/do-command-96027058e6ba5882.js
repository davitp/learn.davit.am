(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1290],{9408:function(i,s,h){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linux-programming/tasks/processes/do-command",function(){return h(894)}])},894:function(i,s,h){"use strict";h.r(s),h.d(s,{useTOC:function(){return t}});var e=h(2676),n=h(902),l=h(3103),r=h(5717),a=h(3815);function t(i){return[{value:"Description",id:"description",depth:3},{value:"Requirements",id:"requirements",depth:3},{value:"Expected result",id:"expected-result",depth:3}]}s.default=(0,n.c)(function(i){let{toc:s=t(i)}=i,h={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...i.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(h.h1,{children:"PS-1: Do command"}),"\n",(0,e.jsx)(h.h3,{id:s[0].id,children:s[0].value}),"\n",(0,e.jsx)(h.p,{children:"Your task is to implement a C++ program that accepts a command name and command arguments with command-line arguments and executes it in a new process."}),"\n",(0,e.jsx)(h.h3,{id:s[1].id,children:s[1].value}),"\n",(0,e.jsxs)(h.ul,{children:["\n",(0,e.jsx)(h.li,{children:"Write a C++ program called “do-command” that takes N arguments as an input."}),"\n",(0,e.jsx)(h.li,{children:"Assume that first argument is command name and others are arguments for the given command."}),"\n",(0,e.jsx)(h.li,{children:"A program should contain a special function do_command(char** argv), where argv is null-terminated vector of arguments."}),"\n",(0,e.jsx)(h.li,{children:"The function “do_command” should create a new process, execute the given command with the given arguments and wait for its completion."}),"\n",(0,e.jsx)(h.li,{children:"After program execution is done, do_function should print exit status of the command and the duration of the command execution."}),"\n",(0,e.jsx)(h.li,{children:"The “main” function of the program is responsible for building proper argument vector and using do_command function to execute the command."}),"\n"]}),"\n",(0,e.jsx)(h.h3,{id:s[2].id,children:s[2].value}),"\n",(0,e.jsx)(h.p,{children:"The resulting application should be able to build and execute from command line as follows:"}),"\n",(0,e.jsx)(h.pre,{icon:a.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,e.jsxs)(h.code,{children:[(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"make"})}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"./do-command"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" ls"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -al"})]})]})}),"\n",(0,e.jsx)(h.p,{children:"The command is expected to print program output to the console and a line as follows:"}),"\n",(0,e.jsx)(h.pre,{icon:a.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,e.jsxs)(h.code,{children:[(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"drwxr-xr-x"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"   8"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"    256"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Oct"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 21"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 15:45"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" ."})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"drwxr-xr-x"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"   3"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"     96"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Oct"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 16"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 16:45"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" .."})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"drwxr-xr-x"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  15"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"    480"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Nov"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  9"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 23:53"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" .git"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"-rw-r--r--"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"   1"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"    591"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Oct"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 16"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 16:45"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" .gitignore"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"-rw-r--r--@"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  1"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  11357"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Oct"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 21"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 15:45"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" LICENSE"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"-rw-r--r--"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"   1"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"     18"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Oct"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 16"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 16:45"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" README.md"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"drwxr-xr-x"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  17"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"    544"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Oct"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 21"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 15:45"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" docs"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"drwxr-xr-x"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"  16"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"  user"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"    512"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Oct"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 16"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 16:45"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" samples"})]}),"\n",(0,e.jsx)(h.span,{children:" "}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Command"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" completed"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" with"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" X"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" exit"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" code"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" and"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" took"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Y"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" seconds."})]})]})}),"\n",(0,e.jsxs)(h.p,{children:["The final solution should contain a ",(0,e.jsx)(h.strong,{children:"Makefile"})," for the multi-stage build. The Makefile should also contain targets ",(0,e.jsx)(h.strong,{children:"all"})," and ",(0,e.jsx)(h.strong,{children:"clean"}),". It’s recommended to have compiler and compiler flags to be declared as a Makefile variables. Alternatively, ",(0,e.jsx)(h.strong,{children:"cmake"})," could also be used instead of make."]})]})},"/linux-programming/tasks/processes/do-command",{filePath:"pages/linux-programming/tasks/processes/do-command.mdx",timestamp:1712608548e3,pageMap:l.v,frontMatter:{description:"Your task is to implement a C++ program that accepts a command name and command arguments with command-line arguments and executes it in a new process."},title:"PS-1: Do command"},"undefined"==typeof RemoteContent?t:RemoteContent.useTOC)}},function(i){i.O(0,[4669,2888,9774,179],function(){return i(i.s=9408)}),_N_E=i.O()}]);