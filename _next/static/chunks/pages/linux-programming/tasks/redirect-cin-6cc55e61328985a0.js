(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[735],{2698:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linux-programming/tasks/redirect-cin",function(){return t(8458)}])},8458:function(e,i,t){"use strict";t.r(i),t.d(i,{useTOC:function(){return d}});var r=t(1527),n=t(9310),s=t(2613),a=t(9222),l=t(2847);function d(e){return[{value:"Description",id:"description",depth:3},{value:"Requirements",id:"requirements",depth:3},{value:"Expected result",id:"expected-result",depth:3}]}i.default=(0,n.c)(function(e){let{toc:i=d(e)}=e,t={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"FS-4: Redirect standard input"}),"\n",(0,r.jsx)(t.h3,{id:i[0].id,children:i[0].value}),"\n",(0,r.jsx)(t.p,{children:"By default, program gets standard input waiting for the keyboard input. Your task is to make any program to read input from the file instead of waiting for the keyboard input without changing usages of std::cin or scanf."}),"\n",(0,r.jsx)(t.h3,{id:i[1].id,children:i[1].value}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Write a C++ program named “redirect-cin” that accepts a path to a file as a command-line argument."}),"\n",(0,r.jsxs)(t.li,{children:["Implement the function ",(0,r.jsx)(t.code,{children:"initialize(int argc, char** argv)"})," to start reading from the given file with a proper error handling."]}),"\n",(0,r.jsxs)(t.li,{children:["Implement a simple logic for ",(0,r.jsx)(t.code,{children:"main()"})," function to read string from the standard input (std::cin) and print the reversed string to the cosnsole (std::out)."]}),"\n",(0,r.jsx)(t.li,{children:"If there is an error with given file, the program should terminate with the proper error code."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The program’s main source file should look like:"}),"\n",(0,r.jsx)(t.pre,{icon:l.$P,tabIndex:"0","data-language":"cpp","data-word-wrap":"",children:(0,r.jsxs)(t.code,{children:[(0,r.jsxs)(t.span,{children:[(0,r.jsx)(t.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"void"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" initialize"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"int"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" argc"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"char**"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" argv"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"{"})}),"\n",(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"  // put your implementation here "})}),"\n",(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"  // ............................"})}),"\n",(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,r.jsx)(t.span,{children:" "}),"\n",(0,r.jsxs)(t.span,{children:[(0,r.jsx)(t.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"int"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" main"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"int"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" argc"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"char**"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" argv"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"{"})}),"\n",(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"  // initialize the program based on the requirements"})}),"\n",(0,r.jsxs)(t.span,{children:[(0,r.jsx)(t.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  initialize"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(argc, argv);"})]}),"\n",(0,r.jsx)(t.span,{children:" "}),"\n",(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"  // read the string "})}),"\n",(0,r.jsxs)(t.span,{children:[(0,r.jsx)(t.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  std"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"::string input;"})]}),"\n",(0,r.jsxs)(t.span,{children:[(0,r.jsx)(t.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  std"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"::cin "}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">>"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" input;"})]}),"\n",(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  "})}),"\n",(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"  // logic to get the reversed string"})}),"\n",(0,r.jsxs)(t.span,{children:[(0,r.jsx)(t.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  std"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"::string reversed;"})]}),"\n",(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  "})}),"\n",(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"  // put your reversing logic here"})}),"\n",(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"  // ............................."})}),"\n",(0,r.jsx)(t.span,{children:" "}),"\n",(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"  // print to the console"})}),"\n",(0,r.jsxs)(t.span,{children:[(0,r.jsx)(t.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  std"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"::cout "}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<<"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" s;"})]}),"\n",(0,r.jsx)(t.span,{children:" "}),"\n",(0,r.jsxs)(t.span,{children:[(0,r.jsx)(t.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  return"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"})]}),"\n",(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,r.jsxs)(t.p,{children:["Hint: you can use one of ",(0,r.jsx)(t.code,{children:"dup()"})," functions."]}),"\n",(0,r.jsx)(t.h3,{id:i[2].id,children:i[2].value}),"\n",(0,r.jsx)(t.p,{children:"The resulting application should be able to build and execute from command line as follows:"}),"\n",(0,r.jsx)(t.pre,{icon:l.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,r.jsxs)(t.code,{children:[(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"make"})}),"\n",(0,r.jsxs)(t.span,{children:[(0,r.jsx)(t.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"./redirect-cin"}),(0,r.jsx)(t.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" input-file"})]})]})}),"\n",(0,r.jsx)(t.p,{children:"And, assuming input file contains the text “123456789”, the program should output the following:"}),"\n",(0,r.jsx)(t.pre,{icon:l.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,r.jsx)(t.code,{children:(0,r.jsx)(t.span,{children:(0,r.jsx)(t.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"987654321"})})})}),"\n",(0,r.jsxs)(t.p,{children:["The final solution should contain a ",(0,r.jsx)(t.strong,{children:"Makefile"})," for the multi-stage build. The Makefile should also contain targets ",(0,r.jsx)(t.strong,{children:"all"})," and ",(0,r.jsx)(t.strong,{children:"clean"}),". It’s recommended to have compiler and compiler flags to be declared as a Makefile variables. Alternatively, ",(0,r.jsx)(t.strong,{children:"cmake"})," could also be used instead of make."]})]})},"/linux-programming/tasks/redirect-cin",{filePath:"pages/linux-programming/tasks/redirect-cin.mdx",timestamp:1709404096e3,pageMap:s.v,frontMatter:{},title:"FS-4: Redirect standard input"},"undefined"==typeof RemoteContent?d:RemoteContent.useTOC)},84:function(e,i){"use strict";i.Z={compilation:"Compilation and build process"}},8619:function(e,i){"use strict";i.Z={makefile:"Using Makefile","open-file":"Opening a file","read-file":"Reading a file","copy-file":"Copy a file","redirect-output":"Redirect the output","make-hole":"Creating holes","detect-holes":"Detect holes","create-process":"Create a process","create-thread":"Create a thread"}},7175:function(e,i){"use strict";i.Z={"environment-setup":{title:"ENV-1: Setup GNU/Linux Environment",handle:{group:"Environment"}},"complex-number":{title:"ENV-2: Complex numbers and sorting",handle:{group:"Environment"}},"read-file":{title:"FS-1: Read from the file",handle:{group:"File Systems"}},"copy-file":{title:"FS-2: Copy a file",handle:{group:"File Systems"}},"secure-file-deletion":{title:"FS-3: Secure file deletion",handle:{group:"File Systems"}},"redirect-cin":{title:"FS-4: Redirect standard input",handle:{group:"File Systems"}},"manual-append":{title:"FS-5: Manual append",handle:{group:"File Systems"}},"copy-with-holes":{title:"FS-10: Copy a file with holes",handle:{group:"File Systems"}},"do-command":{title:"PS-1: Do command",handle:{group:"Processes"}},"interactive-shell":{title:"PS-2: Interactive shell",handle:{group:"Processes"}},"array-sum":{title:"TH-1: Array Summary",handle:{group:"Threads"}},"thread-pool":{title:"TH-2: Thread Pool",handle:{group:"Threads"}},"signal-echo":{title:"IPC-1: Signal Echo",handle:{group:"IPC"}},"prime-calculator":{title:"IPC-2: Prime Calculator",handle:{group:"IPC"}},"shared-array":{title:"IPC-3: Shared Array",handle:{group:"IPC"}}}},2383:function(e,i){"use strict";i.Z={"hardware-and-software":"Hardware and Software"}},9222:function(e,i,t){"use strict";t.d(i,{a:function(){return d}});var r=t(877),n=t(3128),s=t.n(n),a=t(959);let l={img:e=>(0,a.createElement)("object"==typeof e.src?s():"img",e)},d=e=>(0,r.a)({...l,...e})},9310:function(e,i,t){"use strict";t.d(i,{c:function(){return o}});var r=t(1527),n=t(6030),s=t(7508);let a=(0,t(959).createContext)({}),l=a.Provider;a.displayName="SSG";var d=t(9222);function o(e,i,t,r){let s=globalThis[n.ud];return s.route=i,s.pageMap=t.pageMap,s.context[i]={Content:e,pageOpts:t,useTOC:r},h}function h({__nextra_pageMap:e=[],__nextra_dynamic_opts:i,...t}){let a=globalThis[n.ud],{Layout:d,themeConfig:o}=a,{route:h,locale:c}=(0,s.t)(),u=a.context[h];if(!u)throw Error(`No content found for the "${h}" route. Please report it as a bug.`);let{pageOpts:m,useTOC:g,Content:k}=u;for(let{route:i,children:t}of e){let e=i.split("/").slice(c?2:1);(function e(i,[t,...r]){for(let n of i)if("children"in n&&t===n.name)return r.length?e(n.children,r):n})(m.pageMap,e).children=t}if(i){let{title:e,frontMatter:t}=i;m={...m,title:e,frontMatter:t}}return(0,r.jsx)(d,{themeConfig:o,pageOpts:m,pageProps:t,children:(0,r.jsx)(l,{value:t,children:(0,r.jsx)(p,{useTOC:g,children:(0,r.jsx)(k,{...t})})})})}function p({children:e,useTOC:i}){let{wrapper:t}=(0,d.a)();return(0,r.jsx)(c,{useTOC:i,wrapper:t,children:e})}function c({children:e,useTOC:i,wrapper:t,...n}){let s=i(n);return t?(0,r.jsx)(t,{toc:s,children:e}):e}},2613:function(e,i,t){"use strict";t.d(i,{v:function(){return l}});var r=t(84),n=t(8619),s=t(7175),a=t(2383);let l=[{data:{index:{title:"Home",type:"page",display:"hidden",theme:{layout:"raw"}},"linux-programming":{title:"Linux Programming",type:"page"},"operating-systems":{title:"Operating Systems",type:"page",display:"hidden"}}},{name:"index",route:"/",frontMatter:{title:"Index",description:"Description"}},{name:"linux-programming",route:"/linux-programming",children:[{data:{index:"Getting Started",topics:"Topics",samples:"Samples",guides:"Guides",tasks:"Tasks"}},{name:"guides",route:"/linux-programming/guides",children:[{data:r.Z},{name:"compilation",route:"/linux-programming/guides/compilation",frontMatter:{sidebarTitle:"Compilation"}}]},{name:"guides",route:"/linux-programming/guides",frontMatter:{sidebarTitle:"Guides"}},{name:"index",route:"/linux-programming",frontMatter:{sidebarTitle:"Index"}},{name:"samples",route:"/linux-programming/samples",children:[{data:n.Z},{name:"copy-file",route:"/linux-programming/samples/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"create-process",route:"/linux-programming/samples/create-process",frontMatter:{sidebarTitle:"Create Process"}},{name:"create-thread",route:"/linux-programming/samples/create-thread",frontMatter:{sidebarTitle:"Create Thread"}},{name:"detect-holes",route:"/linux-programming/samples/detect-holes",frontMatter:{sidebarTitle:"Detect Holes"}},{name:"make-hole",route:"/linux-programming/samples/make-hole",frontMatter:{sidebarTitle:"Make Hole"}},{name:"makefile",route:"/linux-programming/samples/makefile",frontMatter:{sidebarTitle:"Makefile"}},{name:"open-file",route:"/linux-programming/samples/open-file",frontMatter:{sidebarTitle:"Open File"}},{name:"read-file",route:"/linux-programming/samples/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-output",route:"/linux-programming/samples/redirect-output",frontMatter:{sidebarTitle:"Redirect Output"}}]},{name:"samples",route:"/linux-programming/samples",frontMatter:{sidebarTitle:"Samples"}},{name:"tasks",route:"/linux-programming/tasks",children:[{data:s.Z},{name:"array-sum",route:"/linux-programming/tasks/array-sum",frontMatter:{sidebarTitle:"Array Sum"}},{name:"complex-number",route:"/linux-programming/tasks/complex-number",frontMatter:{sidebarTitle:"Complex Number"}},{name:"copy-file",route:"/linux-programming/tasks/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"copy-with-holes",route:"/linux-programming/tasks/copy-with-holes",frontMatter:{sidebarTitle:"Copy with Holes"}},{name:"do-command",route:"/linux-programming/tasks/do-command",frontMatter:{sidebarTitle:"Do Command"}},{name:"environment-setup",route:"/linux-programming/tasks/environment-setup",frontMatter:{sidebarTitle:"Environment Setup"}},{name:"interactive-shell",route:"/linux-programming/tasks/interactive-shell",frontMatter:{sidebarTitle:"Interactive Shell"}},{name:"manual-append",route:"/linux-programming/tasks/manual-append",frontMatter:{sidebarTitle:"Manual Append"}},{name:"prime-calculator",route:"/linux-programming/tasks/prime-calculator",frontMatter:{sidebarTitle:"Prime Calculator"}},{name:"read-file",route:"/linux-programming/tasks/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-cin",route:"/linux-programming/tasks/redirect-cin",frontMatter:{sidebarTitle:"Redirect Cin"}},{name:"secure-file-deletion",route:"/linux-programming/tasks/secure-file-deletion",frontMatter:{sidebarTitle:"Secure File Deletion"}},{name:"shared-array",route:"/linux-programming/tasks/shared-array",frontMatter:{sidebarTitle:"Shared Array"}},{name:"signal-echo",route:"/linux-programming/tasks/signal-echo",frontMatter:{sidebarTitle:"Signal Echo"}},{name:"thread-pool",route:"/linux-programming/tasks/thread-pool",frontMatter:{sidebarTitle:"Thread Pool"}}]},{name:"tasks",route:"/linux-programming/tasks",frontMatter:{sidebarTitle:"Tasks"}},{name:"topics",route:"/linux-programming/topics",children:[{data:a.Z},{name:"hardware-and-software",route:"/linux-programming/topics/hardware-and-software",frontMatter:{sidebarTitle:"Hardware and Software"}}]},{name:"topics",route:"/linux-programming/topics",frontMatter:{sidebarTitle:"Topics"}}]},{name:"operating-systems",route:"/operating-systems",children:[{data:{"*":{display:"visible"},index:"Getting Started",topics:"Topics"}},{name:"index",route:"/operating-systems",frontMatter:{sidebarTitle:"Index"}},{name:"topics",route:"/operating-systems/topics",children:[{data:{introduction:"Introduction"}},{name:"introduction",route:"/operating-systems/topics/introduction",frontMatter:{sidebarTitle:"Introduction"}}]},{name:"topics",route:"/operating-systems/topics",frontMatter:{sidebarTitle:"Topics"}}]}]}},function(e){e.O(0,[888,774,179],function(){return e(e.s=2698)}),_N_E=e.O()}]);