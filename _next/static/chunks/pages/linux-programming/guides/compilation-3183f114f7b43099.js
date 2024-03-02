(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{312:function(i,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linux-programming/guides/compilation",function(){return e(7531)}])},7531:function(i,s,e){"use strict";e.r(s),e.d(s,{useTOC:function(){return h}});var n=e(1527),t=e(9310),r=e(2613),a=e(9222),l=e(2847);function h(i){return[{value:"Single file compilation",id:"single-file-compilation",depth:3},{value:"Pre-processing a C++ source file",id:"pre-processing-a-c-source-file",depth:3},{value:"Translation of the source",id:"translation-of-the-source",depth:3},{value:"Assembling the compiled file",id:"assembling-the-compiled-file",depth:3},{value:"Linking object files",id:"linking-object-files",depth:3}]}s.default=(0,t.c)(function(i){let{toc:s=h(i)}=i,e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",span:"span",strong:"strong",...(0,a.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"Compilation and build process"}),"\n",(0,n.jsx)(e.p,{children:"The set of samples showcases different aspects of the compilation process in the Linux environment using various tools such as gcc, make, cmake, etc."}),"\n",(0,n.jsx)(e.h3,{id:s[0].id,children:s[0].value}),"\n",(0,n.jsxs)(e.p,{children:["Consider ",(0,n.jsx)(e.strong,{children:"main.cpp"})," as a source file containing the whole logic of the application:"]}),"\n",(0,n.jsx)(e.pre,{icon:l.$P,tabIndex:"0","data-language":"cpp","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <iostream>"})]}),"\n",(0,n.jsx)(e.span,{children:" "}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"int"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" main"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"() {"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    std"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"::cout "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "Hello, world!"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <<"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" std"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"::endl;"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    return"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,n.jsx)(e.p,{children:"To compile the source code into an executable file execute the following line in the source directory:"}),"\n",(0,n.jsx)(e.pre,{icon:l.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsx)(e.code,{children:(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"g++"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" main.cpp -o app"})]})})}),"\n",(0,n.jsxs)(e.p,{children:["where parameter ",(0,n.jsx)(e.strong,{children:"-o app"})," defines the name of the output file (a.out by default)."]}),"\n",(0,n.jsxs)(e.p,{children:["If the command completes successfully, the source directory will contain a file called ",(0,n.jsx)(e.strong,{children:"app"})," that is ready to execute as follows:"]}),"\n",(0,n.jsx)(e.pre,{icon:l.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsx)(e.code,{children:(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"./app"})})})}),"\n",(0,n.jsx)(e.h3,{id:s[1].id,children:s[1].value}),"\n",(0,n.jsxs)(e.p,{children:["You may want to stop the compiler after the pre-processing phase when all the directives such as include, define, etc. are resolved.\nIn that case you will need to run the pass the ",(0,n.jsx)(e.strong,{children:"-E"})," flag to the compiler as follows:"]}),"\n",(0,n.jsx)(e.pre,{icon:l.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsx)(e.code,{children:(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"g++"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" main.cpp -E"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" >"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" preprocessed-main.cpp"})]})})}),"\n",(0,n.jsx)(e.p,{children:"The result of the command prints the result on a console by default, hence we redirected the content to be written to file “preprocessed-main.cpp” by using redirection operator (>) of shell."}),"\n",(0,n.jsx)(e.h3,{id:s[2].id,children:s[2].value}),"\n",(0,n.jsxs)(e.p,{children:["You may also want to stop the compiler after the translation phase to get the low-level code in assembler language. For that you need to pass ",(0,n.jsx)(e.strong,{children:"-S"})," flag to the compiler. It will generate a new file with .s extension by default:"]}),"\n",(0,n.jsx)(e.pre,{icon:l.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsx)(e.code,{children:(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"g++"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" main.cpp -S"})]})})}),"\n",(0,n.jsx)(e.p,{children:"After the command is completed successfully you will get a main.s file containing your source in assembler language. The file will contain something like this:"}),"\n",(0,n.jsx)(e.pre,{icon:l.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# ... some other things"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"main:"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:".LFB1522:"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    .cfi_startproc"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    endbr64"})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    pushq"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"   %rbp"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    .cfi_def_cfa_offset"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 16"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    .cfi_offset"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 6"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:", "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"-16"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    movq"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"    %rsp, %rbp"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    .cfi_def_cfa_register"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 6"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    leaq"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"    .LC0"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"%rip"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:", %rsi"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    leaq"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"    _ZSt4cout"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"%rip"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:", %rdi"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    call"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"    _ZStlsISt11char_traitsIcEERSt13basic_ostreamIcT_ES5_PKc@PLT"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    movq"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"    %rax, %rdx"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    movq"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"    _ZSt4endlIcSt11char_traitsIcEERSt13basic_ostreamIT_T0_ES6_@GOTPCREL"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"%rip"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:", %rax"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    movq"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"    %rax, %rsi"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    movq"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"    %rdx, %rdi"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    call"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"    _ZNSolsEPFRSoS_E@PLT"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    movl"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"    $0"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:", %eax"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    popq"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"    %rbp"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    .cfi_def_cfa"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 7"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:", "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"8"})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    ret"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    .cfi_endproc"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# ... some other things"})})]})}),"\n",(0,n.jsx)(e.h3,{id:s[3].id,children:s[3].value}),"\n",(0,n.jsxs)(e.p,{children:["Most commonly, you will need to compile your source file to a binary object file containing your source code in a binary format, but not ready to execute. Object files are generated by passing ",(0,n.jsx)(e.strong,{children:"-c"})," to the compiler. By default a file with “.o” extension will be generated:"]}),"\n",(0,n.jsx)(e.pre,{icon:l.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsx)(e.code,{children:(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"g++"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" main.cpp -c "})]})})}),"\n",(0,n.jsxs)(e.p,{children:["After this command, a file named ",(0,n.jsx)(e.strong,{children:"main.o"})," will be generated."]}),"\n",(0,n.jsx)(e.h3,{id:s[4].id,children:s[4].value}),"\n",(0,n.jsx)(e.p,{children:"In most of the cases, you will have many source files compiled into object files separately and after all object files are ready you will link those together and add necessary libraries. For example, if you have files main.o, module1.o and module2.o you will need to link those together into an executable file (or a library):"}),"\n",(0,n.jsx)(e.pre,{icon:l.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsx)(e.code,{children:(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"g++"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" main.o module1.o module2.o"})]})})}),"\n",(0,n.jsx)(e.p,{children:"After this command, a file named “a.out” will be generated and will be ready to run."}),"\n",(0,n.jsx)(e.p,{children:"Also, you may want to see the libraries your executable is linked to using the following command:"}),"\n",(0,n.jsx)(e.pre,{icon:l.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsx)(e.code,{children:(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"ldd"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" a.out"})]})})}),"\n",(0,n.jsx)(e.p,{children:"In this basic example, your executable will be linked with the standard libraries as follows:"}),"\n",(0,n.jsx)(e.pre,{icon:l.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"linux-vdso.so.1"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" (0x00007ffc695fb000)"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"libstdc++.so.6"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" /lib/x86_64-linux-gnu/libstdc++.so.6 "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"0x00007f55b5264000"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"libc.so.6"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" /lib/x86_64-linux-gnu/libc.so.6 "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"0x00007f55b5072000"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"libm.so.6"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" /lib/x86_64-linux-gnu/libm.so.6 "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"0x00007f55b4f23000"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"/lib64/ld-linux-x86-64.so.2"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" (0x00007f55b5456000)"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"libgcc_s.so.1"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" /lib/x86_64-linux-gnu/libgcc_s.so.1 "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"0x00007f55b4f08000"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]})]})})]})},"/linux-programming/guides/compilation",{filePath:"pages/linux-programming/guides/compilation.mdx",timestamp:1709399623e3,pageMap:r.v,frontMatter:{},title:"Compilation and build process"},"undefined"==typeof RemoteContent?h:RemoteContent.useTOC)},84:function(i,s){"use strict";s.Z={compilation:"Compilation and build process"}},7175:function(i,s){"use strict";s.Z={"environment-setup":{title:"ENV-1: Setup GNU/Linux Environment",handle:{group:"Environment"}},"complex-number":{title:"ENV-2: Complex numbers and sorting",handle:{group:"Environment"}},"read-file":{title:"FS-1: Read from the file",handle:{group:"File Systems"}},"copy-file":{title:"FS-2: Copy a file",handle:{group:"File Systems"}},"secure-file-deletion":{title:"FS-3: Secure file deletion",handle:{group:"File Systems"}},"redirect-cin":{title:"FS-4: Redirect standard input",handle:{group:"File Systems"}},"manual-append":{title:"FS-5: Manual append",handle:{group:"File Systems"}},"copy-with-holes":{title:"FS-10: Copy a file with holes",handle:{group:"File Systems"}},"do-command":{title:"PS-1: Do command",handle:{group:"Processes"}},"interactive-shell":{title:"PS-2: Interactive shell",handle:{group:"Processes"}},"array-sum":{title:"TH-1: Array Summary",handle:{group:"Threads"}},"thread-pool":{title:"TH-2: Thread Pool",handle:{group:"Threads"}},"signal-echo":{title:"IPC-1: Signal Echo",handle:{group:"IPC"}},"prime-calculator":{title:"IPC-2: Prime Calculator",handle:{group:"IPC"}},"shared-array":{title:"IPC-3: Shared Array",handle:{group:"IPC"}}}},2383:function(i,s){"use strict";s.Z={"hardware-and-software":"Hardware and Software"}},9222:function(i,s,e){"use strict";e.d(s,{a:function(){return h}});var n=e(877),t=e(3128),r=e.n(t),a=e(959);let l={img:i=>(0,a.createElement)("object"==typeof i.src?r():"img",i)},h=i=>(0,n.a)({...l,...i})},9310:function(i,s,e){"use strict";e.d(s,{c:function(){return d}});var n=e(1527),t=e(6030),r=e(7508);let a=(0,e(959).createContext)({}),l=a.Provider;a.displayName="SSG";var h=e(9222);function d(i,s,e,n){let r=globalThis[t.ud];return r.route=s,r.pageMap=e.pageMap,r.context[s]={Content:i,pageOpts:e,useTOC:n},o}function o({__nextra_pageMap:i=[],__nextra_dynamic_opts:s,...e}){let a=globalThis[t.ud],{Layout:h,themeConfig:d}=a,{route:o,locale:p}=(0,r.t)(),k=a.context[o];if(!k)throw Error(`No content found for the "${o}" route. Please report it as a bug.`);let{pageOpts:x,useTOC:g,Content:u}=k;for(let{route:s,children:e}of i){let i=s.split("/").slice(p?2:1);(function i(s,[e,...n]){for(let t of s)if("children"in t&&e===t.name)return n.length?i(t.children,n):t})(x.pageMap,i).children=e}if(s){let{title:i,frontMatter:e}=s;x={...x,title:i,frontMatter:e}}return(0,n.jsx)(h,{themeConfig:d,pageOpts:x,pageProps:e,children:(0,n.jsx)(l,{value:e,children:(0,n.jsx)(c,{useTOC:g,children:(0,n.jsx)(u,{...e})})})})}function c({children:i,useTOC:s}){let{wrapper:e}=(0,h.a)();return(0,n.jsx)(p,{useTOC:s,wrapper:e,children:i})}function p({children:i,useTOC:s,wrapper:e,...t}){let r=s(t);return e?(0,n.jsx)(e,{toc:r,children:i}):i}},2613:function(i,s,e){"use strict";e.d(s,{v:function(){return a}});var n=e(84),t=e(7175),r=e(2383);let a=[{data:{index:{title:"Home",type:"page",display:"hidden",theme:{layout:"raw"}},"linux-programming":{title:"Linux Programming",type:"page"},"operating-systems":{title:"Operating Systems",type:"page",display:"hidden"}}},{name:"index",route:"/",frontMatter:{title:"Index",description:"Description"}},{name:"linux-programming",route:"/linux-programming",children:[{data:{index:"Getting Started",topics:"Topics",guides:"Guides",tasks:"Tasks"}},{name:"guides",route:"/linux-programming/guides",children:[{data:n.Z},{name:"compilation",route:"/linux-programming/guides/compilation",frontMatter:{sidebarTitle:"Compilation"}}]},{name:"guides",route:"/linux-programming/guides",frontMatter:{sidebarTitle:"Guides"}},{name:"index",route:"/linux-programming",frontMatter:{sidebarTitle:"Index"}},{name:"tasks",route:"/linux-programming/tasks",children:[{data:t.Z},{name:"array-sum",route:"/linux-programming/tasks/array-sum",frontMatter:{sidebarTitle:"Array Sum"}},{name:"complex-number",route:"/linux-programming/tasks/complex-number",frontMatter:{sidebarTitle:"Complex Number"}},{name:"copy-file",route:"/linux-programming/tasks/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"copy-with-holes",route:"/linux-programming/tasks/copy-with-holes",frontMatter:{sidebarTitle:"Copy with Holes"}},{name:"do-command",route:"/linux-programming/tasks/do-command",frontMatter:{sidebarTitle:"Do Command"}},{name:"environment-setup",route:"/linux-programming/tasks/environment-setup",frontMatter:{sidebarTitle:"Environment Setup"}},{name:"interactive-shell",route:"/linux-programming/tasks/interactive-shell",frontMatter:{sidebarTitle:"Interactive Shell"}},{name:"manual-append",route:"/linux-programming/tasks/manual-append",frontMatter:{sidebarTitle:"Manual Append"}},{name:"prime-calculator",route:"/linux-programming/tasks/prime-calculator",frontMatter:{sidebarTitle:"Prime Calculator"}},{name:"read-file",route:"/linux-programming/tasks/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-cin",route:"/linux-programming/tasks/redirect-cin",frontMatter:{sidebarTitle:"Redirect Cin"}},{name:"secure-file-deletion",route:"/linux-programming/tasks/secure-file-deletion",frontMatter:{sidebarTitle:"Secure File Deletion"}},{name:"shared-array",route:"/linux-programming/tasks/shared-array",frontMatter:{sidebarTitle:"Shared Array"}},{name:"signal-echo",route:"/linux-programming/tasks/signal-echo",frontMatter:{sidebarTitle:"Signal Echo"}},{name:"thread-pool",route:"/linux-programming/tasks/thread-pool",frontMatter:{sidebarTitle:"Thread Pool"}}]},{name:"tasks",route:"/linux-programming/tasks",frontMatter:{sidebarTitle:"Tasks"}},{name:"topics",route:"/linux-programming/topics",children:[{data:r.Z},{name:"hardware-and-software",route:"/linux-programming/topics/hardware-and-software",frontMatter:{sidebarTitle:"Hardware and Software"}}]},{name:"topics",route:"/linux-programming/topics",frontMatter:{sidebarTitle:"Topics"}}]},{name:"operating-systems",route:"/operating-systems",children:[{data:{"*":{display:"visible"},index:"Getting Started",topics:"Topics"}},{name:"index",route:"/operating-systems",frontMatter:{sidebarTitle:"Index"}},{name:"topics",route:"/operating-systems/topics",children:[{data:{introduction:"Introduction"}},{name:"introduction",route:"/operating-systems/topics/introduction",frontMatter:{sidebarTitle:"Introduction"}}]},{name:"topics",route:"/operating-systems/topics",frontMatter:{sidebarTitle:"Topics"}}]}]}},function(i){i.O(0,[888,774,179],function(){return i(i.s=312)}),_N_E=i.O()}]);