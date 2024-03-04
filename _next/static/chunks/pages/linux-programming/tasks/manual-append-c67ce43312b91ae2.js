(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3767],{2545:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linux-programming/tasks/manual-append",function(){return r(7565)}])},7565:function(e,t,r){"use strict";r.r(t),r.d(t,{useTOC:function(){return s}});var i=r(1527),n=r(9310),a=r(2613),o=r(9222),l=r(2847);function s(e){return[{value:"Description",id:"description",depth:3},{value:"Requirements",id:"requirements",depth:3},{value:"Expected result",id:"expected-result",depth:3}]}t.default=(0,n.c)(function(e){let{toc:t=s(e)}=e,r={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{children:"FS-5: Manaul append"}),"\n",(0,i.jsx)(r.h3,{id:t[0].id,children:t[0].value}),"\n",(0,i.jsx)(r.p,{children:"Your task is to write a program on C/C++ that writes two lines in the files “first line” and “second line”.\nWriting should happen into two different file descriptors but write into the same file."}),"\n",(0,i.jsx)(r.h3,{id:t[1].id,children:t[1].value}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Write a C/C++ program that gets the filepath with the first argument and opens it."}),"\n",(0,i.jsxs)(r.li,{children:["File ",(0,i.jsx)(r.strong,{children:"should not"})," be opened with the O_APPEND file."]}),"\n",(0,i.jsx)(r.li,{children:"You are not allowed to use seek/lseek to move the cursor to the end."}),"\n",(0,i.jsx)(r.li,{children:"The program writes two lines: “first line” and “second line”. Each line is written in a different descriptor."}),"\n",(0,i.jsx)(r.li,{children:"After write, the file should contain both lines in the same file."}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Hint: you may use dup/dup2."}),"\n",(0,i.jsx)(r.h3,{id:t[2].id,children:t[2].value}),"\n",(0,i.jsx)(r.p,{children:"The resulting application should be able to build and execute from command line as follows:"}),"\n",(0,i.jsx)(r.pre,{icon:l.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,i.jsxs)(r.code,{children:[(0,i.jsx)(r.span,{children:(0,i.jsx)(r.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"make"})}),"\n",(0,i.jsxs)(r.span,{children:[(0,i.jsx)(r.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"./manual-append"}),(0,i.jsx)(r.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" result.txt"})]})]})}),"\n",(0,i.jsx)(r.p,{children:"The output file should contain the following text:"}),"\n",(0,i.jsx)(r.pre,{"data-word-wrap":"",children:(0,i.jsx)(r.code,{children:"first line\nsecond line\n"})}),"\n",(0,i.jsxs)(r.p,{children:["The final solution should contain a ",(0,i.jsx)(r.strong,{children:"Makefile"})," for the multi-stage build. The Makefile should also contain targets ",(0,i.jsx)(r.strong,{children:"all"})," and ",(0,i.jsx)(r.strong,{children:"clean"}),". It’s recommended to have compiler and compiler flags to be declared as a Makefile variables. Alternatively, ",(0,i.jsx)(r.strong,{children:"cmake"})," could also be used instead of make."]})]})},"/linux-programming/tasks/manual-append",{filePath:"pages/linux-programming/tasks/manual-append.mdx",timestamp:170958528e4,pageMap:a.v,frontMatter:{},title:"FS-5: Manaul append"},"undefined"==typeof RemoteContent?s:RemoteContent.useTOC)},84:function(e,t){"use strict";t.Z={compilation:"Compilation and build process"}},8619:function(e,t){"use strict";t.Z={makefile:"Using Makefile","open-file":"Opening a file","read-file":"Reading a file","copy-file":"Copy a file","redirect-output":"Redirect the output","make-hole":"Creating holes","detect-holes":"Detect holes","create-process":"Create a process","create-thread":"Create a thread"}},7175:function(e,t){"use strict";t.Z={"environment-setup":{title:"ENV-1: Setup GNU/Linux Environment",handle:{group:"Environment"}},"complex-number":{title:"ENV-2: Complex numbers and sorting",handle:{group:"Environment"}},"read-file":{title:"FS-1: Read from the file",handle:{group:"File Systems"}},"copy-file":{title:"FS-2: Copy a file",handle:{group:"File Systems"}},"secure-file-deletion":{title:"FS-3: Secure file deletion",handle:{group:"File Systems"}},"redirect-cin":{title:"FS-4: Redirect standard input",handle:{group:"File Systems"}},"manual-append":{title:"FS-5: Manual append",handle:{group:"File Systems"}},"copy-with-holes":{title:"FS-10: Copy a file with holes",handle:{group:"File Systems"}},"do-command":{title:"PS-1: Do command",handle:{group:"Processes"}},"interactive-shell":{title:"PS-2: Interactive shell",handle:{group:"Processes"}},"array-sum":{title:"TH-1: Array Summary",handle:{group:"Threads"}},"thread-pool":{title:"TH-2: Thread Pool",handle:{group:"Threads"}},"signal-echo":{title:"IPC-1: Signal Echo",handle:{group:"IPC"}},"prime-calculator":{title:"IPC-2: Prime Calculator",handle:{group:"IPC"}},"shared-array":{title:"IPC-3: Shared Array",handle:{group:"IPC"}}}},2383:function(e,t){"use strict";t.Z={"hardware-and-software":"Hardware and Software","system-calls":"System Calls"}},9222:function(e,t,r){"use strict";r.d(t,{a:function(){return s}});var i=r(877),n=r(3128),a=r.n(n),o=r(959);let l={img:e=>(0,o.createElement)("object"==typeof e.src?a():"img",e)},s=e=>(0,i.a)({...l,...e})},9310:function(e,t,r){"use strict";r.d(t,{c:function(){return d}});var i=r(1527),n=r(6030),a=r(7508);let o=(0,r(959).createContext)({}),l=o.Provider;o.displayName="SSG";var s=r(9222);function d(e,t,r,i){let a=globalThis[n.ud];return a.route=t,a.pageMap=r.pageMap,a.context[t]={Content:e,pageOpts:r,useTOC:i},u}function u({__nextra_pageMap:e=[],__nextra_dynamic_opts:t,...r}){let o=globalThis[n.ud],{Layout:s,themeConfig:d}=o,{route:u,locale:p}=(0,a.t)(),c=o.context[u];if(!c)throw Error(`No content found for the "${u}" route. Please report it as a bug.`);let{pageOpts:h,useTOC:g,Content:f}=c;for(let{route:t,children:r}of e){let e=t.split("/").slice(p?2:1);(function e(t,[r,...i]){for(let n of t)if("children"in n&&r===n.name)return i.length?e(n.children,i):n})(h.pageMap,e).children=r}if(t){let{title:e,frontMatter:r}=t;h={...h,title:e,frontMatter:r}}return(0,i.jsx)(s,{themeConfig:d,pageOpts:h,pageProps:r,children:(0,i.jsx)(l,{value:r,children:(0,i.jsx)(m,{useTOC:g,children:(0,i.jsx)(f,{...r})})})})}function m({children:e,useTOC:t}){let{wrapper:r}=(0,s.a)();return(0,i.jsx)(p,{useTOC:t,wrapper:r,children:e})}function p({children:e,useTOC:t,wrapper:r,...n}){let a=t(n);return r?(0,i.jsx)(r,{toc:a,children:e}):e}},2613:function(e,t,r){"use strict";r.d(t,{v:function(){return l}});var i=r(84),n=r(8619),a=r(7175),o=r(2383);let l=[{data:{index:{title:"Home",type:"page",display:"hidden",theme:{layout:"raw"}},"linux-programming":{title:"Linux Programming",type:"page"},"operating-systems":{title:"Operating Systems",type:"page",display:"hidden"}}},{name:"index",route:"/",frontMatter:{title:"Index",description:"Description"}},{name:"linux-programming",route:"/linux-programming",children:[{data:{index:"Getting Started",topics:"Topics",samples:"Samples",guides:"Guides",tasks:"Tasks"}},{name:"guides",route:"/linux-programming/guides",children:[{data:i.Z},{name:"compilation",route:"/linux-programming/guides/compilation",frontMatter:{sidebarTitle:"Compilation"}}]},{name:"guides",route:"/linux-programming/guides",frontMatter:{sidebarTitle:"Guides"}},{name:"index",route:"/linux-programming",frontMatter:{sidebarTitle:"Index"}},{name:"samples",route:"/linux-programming/samples",children:[{data:n.Z},{name:"copy-file",route:"/linux-programming/samples/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"create-process",route:"/linux-programming/samples/create-process",frontMatter:{sidebarTitle:"Create Process"}},{name:"create-thread",route:"/linux-programming/samples/create-thread",frontMatter:{sidebarTitle:"Create Thread"}},{name:"detect-holes",route:"/linux-programming/samples/detect-holes",frontMatter:{sidebarTitle:"Detect Holes"}},{name:"make-hole",route:"/linux-programming/samples/make-hole",frontMatter:{sidebarTitle:"Make Hole"}},{name:"makefile",route:"/linux-programming/samples/makefile",frontMatter:{sidebarTitle:"Makefile"}},{name:"open-file",route:"/linux-programming/samples/open-file",frontMatter:{sidebarTitle:"Open File"}},{name:"read-file",route:"/linux-programming/samples/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-output",route:"/linux-programming/samples/redirect-output",frontMatter:{sidebarTitle:"Redirect Output"}}]},{name:"samples",route:"/linux-programming/samples",frontMatter:{sidebarTitle:"Samples"}},{name:"tasks",route:"/linux-programming/tasks",children:[{data:a.Z},{name:"array-sum",route:"/linux-programming/tasks/array-sum",frontMatter:{sidebarTitle:"Array Sum"}},{name:"complex-number",route:"/linux-programming/tasks/complex-number",frontMatter:{sidebarTitle:"Complex Number"}},{name:"copy-file",route:"/linux-programming/tasks/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"copy-with-holes",route:"/linux-programming/tasks/copy-with-holes",frontMatter:{sidebarTitle:"Copy with Holes"}},{name:"do-command",route:"/linux-programming/tasks/do-command",frontMatter:{sidebarTitle:"Do Command"}},{name:"environment-setup",route:"/linux-programming/tasks/environment-setup",frontMatter:{sidebarTitle:"Environment Setup"}},{name:"interactive-shell",route:"/linux-programming/tasks/interactive-shell",frontMatter:{sidebarTitle:"Interactive Shell"}},{name:"manual-append",route:"/linux-programming/tasks/manual-append",frontMatter:{sidebarTitle:"Manual Append"}},{name:"prime-calculator",route:"/linux-programming/tasks/prime-calculator",frontMatter:{sidebarTitle:"Prime Calculator"}},{name:"read-file",route:"/linux-programming/tasks/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-cin",route:"/linux-programming/tasks/redirect-cin",frontMatter:{sidebarTitle:"Redirect Cin"}},{name:"secure-file-deletion",route:"/linux-programming/tasks/secure-file-deletion",frontMatter:{sidebarTitle:"Secure File Deletion"}},{name:"shared-array",route:"/linux-programming/tasks/shared-array",frontMatter:{sidebarTitle:"Shared Array"}},{name:"signal-echo",route:"/linux-programming/tasks/signal-echo",frontMatter:{sidebarTitle:"Signal Echo"}},{name:"thread-pool",route:"/linux-programming/tasks/thread-pool",frontMatter:{sidebarTitle:"Thread Pool"}}]},{name:"tasks",route:"/linux-programming/tasks",frontMatter:{sidebarTitle:"Tasks"}},{name:"topics",route:"/linux-programming/topics",children:[{data:o.Z},{name:"hardware-and-software",route:"/linux-programming/topics/hardware-and-software",frontMatter:{sidebarTitle:"Hardware and Software"}},{name:"system-calls",route:"/linux-programming/topics/system-calls",frontMatter:{sidebarTitle:"System Calls"}}]},{name:"topics",route:"/linux-programming/topics",frontMatter:{sidebarTitle:"Topics"}}]},{name:"operating-systems",route:"/operating-systems",children:[{data:{"*":{display:"visible"},index:"Getting Started",topics:"Topics"}},{name:"index",route:"/operating-systems",frontMatter:{sidebarTitle:"Index"}},{name:"topics",route:"/operating-systems/topics",children:[{data:{introduction:"Introduction"}},{name:"introduction",route:"/operating-systems/topics/introduction",frontMatter:{sidebarTitle:"Introduction"}}]},{name:"topics",route:"/operating-systems/topics",frontMatter:{sidebarTitle:"Topics"}}]}]}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=2545)}),_N_E=e.O()}]);