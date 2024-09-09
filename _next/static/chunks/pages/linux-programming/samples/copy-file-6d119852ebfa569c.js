(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5354],{3e3:function(i,s,h){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linux-programming/samples/copy-file",function(){return h(6024)}])},6024:function(i,s,h){"use strict";h.r(s),h.d(s,{useTOC:function(){return k}});var n=h(2676),l=h(902),e=h(3103),r=h(5717),a=h(3815);function k(i){return[]}s.default=(0,l.c)(function(i){let s={code:"code",h1:"h1",p:"p",pre:"pre",span:"span",strong:"strong",...(0,r.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"Copy the given file"}),"\n",(0,n.jsxs)(s.p,{children:["This sample demonstrates how to implement a basic copy program using ",(0,n.jsx)(s.strong,{children:"read"})," and ",(0,n.jsx)(s.strong,{children:"write"})," functions."]}),"\n",(0,n.jsx)(s.pre,{tabIndex:"0","data-language":"c","data-word-wrap":"",children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <stdio.h>"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <fcntl.h>"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <sys/types.h>"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <unistd.h>"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <errno.h>"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <stdlib.h>"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <string.h>"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#define"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" BUFFER_SIZE"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 16"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"/**"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" * "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"@brief"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" main The program entry point"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" * "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"@param"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" argc"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" The number of arguments"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" * "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"@param"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" argv"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" The command line arguments"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" * "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"@return"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" Returns exit code"})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" */"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"int"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" main"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"int"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" argc"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"char*"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" argv"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"[]"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // we expect the user to provide at least 2 arguments: source and destination files"})}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // handling, if less arguments are passed"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    if"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(argc "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 3"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"        printf"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Please provide source and destination files'}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"\\n"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"'}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"        exit"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // use 1st argument as a source file path"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    const"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" char*"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" source "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" argv"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"["}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"];"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // open file for reading only, as we are not going to modify it"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    int"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" sourceFd "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" open"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(source, O_RDONLY);"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // make sure that the source file could be successfully opened in the read-only mode"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    if"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(sourceFd "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" -"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"        printf"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Something went wrong while opening the source file. Error '}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"%s\\n"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"'}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"strerror"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(errno));"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"        exit"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(errno);"})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // use 2nd argument as a destination file path"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    const"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" char*"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" destination "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" argv"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"["}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"2"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"];"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // open file for writing only, create if not exist (O_CREAT) and truncate (O_TRUNC) once opened"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    int"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" destinationFd "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" open"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(destination, O_WRONLY "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"|"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" O_CREAT "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"|"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" O_TRUNC, S_IRUSR "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"|"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" S_IWUSR "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"|"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" S_IRGRP);"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // make sure we could open/create a destination file in write-only mode"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    if"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(destinationFd "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" -"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"        printf"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Something went wrong while opening the destination file. Error '}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"%s\\n"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"'}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"strerror"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(errno));"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"        exit"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(errno);"})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // allocate a buffer for storing and writing the next read chunk of the data"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    char*"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" buffer "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" malloc"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(BUFFER_SIZE);"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // count overall bytes copied"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    long"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" overallBytes "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // number of bytes in the last read"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    long"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" readBytes "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // repeat until we want to stop"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    while"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" =="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 1"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // reading BUFFER_SIZE bytes from the file into the buffer"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        readBytes "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" read"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(sourceFd, buffer, BUFFER_SIZE);"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // make sure the read operation completed with success "})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"        if"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(readBytes "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" -"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"            printf"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Something went wrong while reading the file. Error '}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"%s\\n"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"'}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"strerror"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(errno));"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"            exit"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(errno);"})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        }"})}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // stop reading if no more bytes to read"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"        if"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(readBytes "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"            break"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        }"})}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // increase number of overall bytes"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        overallBytes "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"+="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" readBytes;"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // writing the last read chunk (readBytes bytes) from the buffer to the destination file"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"        long"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" writeBytes "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" write"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(destinationFd, buffer, ("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"size_t"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")readBytes);"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // check if error happened during writing"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"        if"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(writeBytes "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=="}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" -"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"){"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"            printf"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Something went wrong while writing to destination file. Error '}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"%s\\n"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"'}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"strerror"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(errno));"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"            exit"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(errno);"})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        }"})}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // close files as no longer needed"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    close"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(sourceFd);"})]}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    close"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(destinationFd);"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // release memory"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    free"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(buffer);"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // report success"})}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    printf"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Completed copying file. Overall bytes copied: '}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"%ld\\n"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"'}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", overallBytes);"})]}),"\n",(0,n.jsx)(s.span,{children:" "}),"\n",(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    return"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(s.span,{children:(0,n.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,n.jsx)(s.p,{children:"The file can be compiled with the following command:"}),"\n",(0,n.jsx)(s.pre,{icon:a.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsx)(s.code,{children:(0,n.jsxs)(s.span,{children:[(0,n.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"gcc"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" copy.c"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -o"}),(0,n.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" copy"})]})})}),"\n",(0,n.jsxs)(s.p,{children:["Running the resulting application ",(0,n.jsx)(s.strong,{children:"./copy source-file.txt new-file.txt"})," duplicate source-file.txt with name new-file.txt."]})]})},"/linux-programming/samples/copy-file",{filePath:"pages/linux-programming/samples/copy-file.mdx",timestamp:1712608548e3,pageMap:e.v,frontMatter:{description:"This sample demonstrates how to implement a basic copy program using read and **write functions."},title:"Copy the given file"},"undefined"==typeof RemoteContent?k:RemoteContent.useTOC)}},function(i){i.O(0,[4669,2888,9774,179],function(){return i(i.s=3e3)}),_N_E=i.O()}]);