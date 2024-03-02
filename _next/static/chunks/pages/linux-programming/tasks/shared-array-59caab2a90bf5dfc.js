(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[508],{7850:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linux-programming/tasks/shared-array",function(){return r(5539)}])},5539:function(e,t,r){"use strict";r.r(t),r.d(t,{useTOC:function(){return l}});var a=r(1527),i=r(9310),n=r(2613),s=r(9222),o=r(2847);function l(e){return[{value:"Requirements",id:"requirements",depth:3},{value:"Expected result",id:"expected-result",depth:3}]}t.default=(0,i.c)(function(e){let{toc:t=l(e)}=e,r={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{children:"IPC-3: Shared array implementation"}),"\n",(0,a.jsx)(r.h3,{id:t[0].id,children:t[0].value}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Write a C++ class implementing a module ",(0,a.jsx)(r.strong,{children:"shared_array"})," which is an array of integers shared between processes."]}),"\n",(0,a.jsx)(r.li,{children:"The class is supposed to be initialized as follows: shared_array array(“array-name”, size);"}),"\n",(0,a.jsx)(r.li,{children:"The size of the array (number of elements) could be between 1 and 1 000 000 000"}),"\n",(0,a.jsx)(r.li,{children:"Two shared arrays are the same in the system if they have equal names and sizes, otherwise, they are different."}),"\n",(0,a.jsx)(r.li,{children:"The class should provide operator [] for indexing an element with a given index i."}),"\n",(0,a.jsx)(r.li,{children:"Any process that knows the name and the size of the array should be able to use it."}),"\n",(0,a.jsx)(r.li,{children:"Write two infinite programs (first and second) to work with the shared array using cross-process semaphore."}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:t[1].id,children:t[1].value}),"\n",(0,a.jsx)(r.p,{children:"The resulting application should be able to build from the command line as follows:"}),"\n",(0,a.jsx)(r.pre,{icon:o.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,a.jsxs)(r.code,{children:[(0,a.jsxs)(r.span,{children:[(0,a.jsx)(r.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"make"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" first"})]}),"\n",(0,a.jsxs)(r.span,{children:[(0,a.jsx)(r.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"make"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" second"})]})]})}),"\n",(0,a.jsx)(r.p,{children:"The execution of the program should demonstrate how the array changes from the first and second processes."}),"\n",(0,a.jsxs)(r.p,{children:["The final solution should contain a ",(0,a.jsx)(r.strong,{children:"Makefile"})," for the multi-stage build. The Makefile should also contain targets ",(0,a.jsx)(r.strong,{children:"all"})," and ",(0,a.jsx)(r.strong,{children:"clean"}),". It’s recommended to have compiler and compiler flags declared as Makefile variables. Alternatively, ",(0,a.jsx)(r.strong,{children:"cmake"})," could also be used instead of make."]})]})},"/linux-programming/tasks/shared-array",{filePath:"pages/linux-programming/tasks/shared-array.mdx",timestamp:1709404096e3,pageMap:n.v,frontMatter:{},title:"IPC-3: Shared array implementation"},"undefined"==typeof RemoteContent?l:RemoteContent.useTOC)},84:function(e,t){"use strict";t.Z={compilation:"Compilation and build process"}},8619:function(e,t){"use strict";t.Z={makefile:"Using Makefile","open-file":"Opening a file","read-file":"Reading a file","copy-file":"Copy a file","redirect-output":"Redirect the output","make-hole":"Creating holes","detect-holes":"Detect holes","create-process":"Create a process","create-thread":"Create a thread"}},7175:function(e,t){"use strict";t.Z={"environment-setup":{title:"ENV-1: Setup GNU/Linux Environment",handle:{group:"Environment"}},"complex-number":{title:"ENV-2: Complex numbers and sorting",handle:{group:"Environment"}},"read-file":{title:"FS-1: Read from the file",handle:{group:"File Systems"}},"copy-file":{title:"FS-2: Copy a file",handle:{group:"File Systems"}},"secure-file-deletion":{title:"FS-3: Secure file deletion",handle:{group:"File Systems"}},"redirect-cin":{title:"FS-4: Redirect standard input",handle:{group:"File Systems"}},"manual-append":{title:"FS-5: Manual append",handle:{group:"File Systems"}},"copy-with-holes":{title:"FS-10: Copy a file with holes",handle:{group:"File Systems"}},"do-command":{title:"PS-1: Do command",handle:{group:"Processes"}},"interactive-shell":{title:"PS-2: Interactive shell",handle:{group:"Processes"}},"array-sum":{title:"TH-1: Array Summary",handle:{group:"Threads"}},"thread-pool":{title:"TH-2: Thread Pool",handle:{group:"Threads"}},"signal-echo":{title:"IPC-1: Signal Echo",handle:{group:"IPC"}},"prime-calculator":{title:"IPC-2: Prime Calculator",handle:{group:"IPC"}},"shared-array":{title:"IPC-3: Shared Array",handle:{group:"IPC"}}}},2383:function(e,t){"use strict";t.Z={"hardware-and-software":"Hardware and Software"}},9222:function(e,t,r){"use strict";r.d(t,{a:function(){return l}});var a=r(877),i=r(3128),n=r.n(i),s=r(959);let o={img:e=>(0,s.createElement)("object"==typeof e.src?n():"img",e)},l=e=>(0,a.a)({...o,...e})},9310:function(e,t,r){"use strict";r.d(t,{c:function(){return d}});var a=r(1527),i=r(6030),n=r(7508);let s=(0,r(959).createContext)({}),o=s.Provider;s.displayName="SSG";var l=r(9222);function d(e,t,r,a){let n=globalThis[i.ud];return n.route=t,n.pageMap=r.pageMap,n.context[t]={Content:e,pageOpts:r,useTOC:a},m}function m({__nextra_pageMap:e=[],__nextra_dynamic_opts:t,...r}){let s=globalThis[i.ud],{Layout:l,themeConfig:d}=s,{route:m,locale:p}=(0,n.t)(),c=s.context[m];if(!c)throw Error(`No content found for the "${m}" route. Please report it as a bug.`);let{pageOpts:h,useTOC:g,Content:f}=c;for(let{route:t,children:r}of e){let e=t.split("/").slice(p?2:1);(function e(t,[r,...a]){for(let i of t)if("children"in i&&r===i.name)return a.length?e(i.children,a):i})(h.pageMap,e).children=r}if(t){let{title:e,frontMatter:r}=t;h={...h,title:e,frontMatter:r}}return(0,a.jsx)(l,{themeConfig:d,pageOpts:h,pageProps:r,children:(0,a.jsx)(o,{value:r,children:(0,a.jsx)(u,{useTOC:g,children:(0,a.jsx)(f,{...r})})})})}function u({children:e,useTOC:t}){let{wrapper:r}=(0,l.a)();return(0,a.jsx)(p,{useTOC:t,wrapper:r,children:e})}function p({children:e,useTOC:t,wrapper:r,...i}){let n=t(i);return r?(0,a.jsx)(r,{toc:n,children:e}):e}},2613:function(e,t,r){"use strict";r.d(t,{v:function(){return o}});var a=r(84),i=r(8619),n=r(7175),s=r(2383);let o=[{data:{index:{title:"Home",type:"page",display:"hidden",theme:{layout:"raw"}},"linux-programming":{title:"Linux Programming",type:"page"},"operating-systems":{title:"Operating Systems",type:"page",display:"hidden"}}},{name:"index",route:"/",frontMatter:{title:"Index",description:"Description"}},{name:"linux-programming",route:"/linux-programming",children:[{data:{index:"Getting Started",topics:"Topics",samples:"Samples",guides:"Guides",tasks:"Tasks"}},{name:"guides",route:"/linux-programming/guides",children:[{data:a.Z},{name:"compilation",route:"/linux-programming/guides/compilation",frontMatter:{sidebarTitle:"Compilation"}}]},{name:"guides",route:"/linux-programming/guides",frontMatter:{sidebarTitle:"Guides"}},{name:"index",route:"/linux-programming",frontMatter:{sidebarTitle:"Index"}},{name:"samples",route:"/linux-programming/samples",children:[{data:i.Z},{name:"copy-file",route:"/linux-programming/samples/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"create-process",route:"/linux-programming/samples/create-process",frontMatter:{sidebarTitle:"Create Process"}},{name:"create-thread",route:"/linux-programming/samples/create-thread",frontMatter:{sidebarTitle:"Create Thread"}},{name:"detect-holes",route:"/linux-programming/samples/detect-holes",frontMatter:{sidebarTitle:"Detect Holes"}},{name:"make-hole",route:"/linux-programming/samples/make-hole",frontMatter:{sidebarTitle:"Make Hole"}},{name:"makefile",route:"/linux-programming/samples/makefile",frontMatter:{sidebarTitle:"Makefile"}},{name:"open-file",route:"/linux-programming/samples/open-file",frontMatter:{sidebarTitle:"Open File"}},{name:"read-file",route:"/linux-programming/samples/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-output",route:"/linux-programming/samples/redirect-output",frontMatter:{sidebarTitle:"Redirect Output"}}]},{name:"samples",route:"/linux-programming/samples",frontMatter:{sidebarTitle:"Samples"}},{name:"tasks",route:"/linux-programming/tasks",children:[{data:n.Z},{name:"array-sum",route:"/linux-programming/tasks/array-sum",frontMatter:{sidebarTitle:"Array Sum"}},{name:"complex-number",route:"/linux-programming/tasks/complex-number",frontMatter:{sidebarTitle:"Complex Number"}},{name:"copy-file",route:"/linux-programming/tasks/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"copy-with-holes",route:"/linux-programming/tasks/copy-with-holes",frontMatter:{sidebarTitle:"Copy with Holes"}},{name:"do-command",route:"/linux-programming/tasks/do-command",frontMatter:{sidebarTitle:"Do Command"}},{name:"environment-setup",route:"/linux-programming/tasks/environment-setup",frontMatter:{sidebarTitle:"Environment Setup"}},{name:"interactive-shell",route:"/linux-programming/tasks/interactive-shell",frontMatter:{sidebarTitle:"Interactive Shell"}},{name:"manual-append",route:"/linux-programming/tasks/manual-append",frontMatter:{sidebarTitle:"Manual Append"}},{name:"prime-calculator",route:"/linux-programming/tasks/prime-calculator",frontMatter:{sidebarTitle:"Prime Calculator"}},{name:"read-file",route:"/linux-programming/tasks/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-cin",route:"/linux-programming/tasks/redirect-cin",frontMatter:{sidebarTitle:"Redirect Cin"}},{name:"secure-file-deletion",route:"/linux-programming/tasks/secure-file-deletion",frontMatter:{sidebarTitle:"Secure File Deletion"}},{name:"shared-array",route:"/linux-programming/tasks/shared-array",frontMatter:{sidebarTitle:"Shared Array"}},{name:"signal-echo",route:"/linux-programming/tasks/signal-echo",frontMatter:{sidebarTitle:"Signal Echo"}},{name:"thread-pool",route:"/linux-programming/tasks/thread-pool",frontMatter:{sidebarTitle:"Thread Pool"}}]},{name:"tasks",route:"/linux-programming/tasks",frontMatter:{sidebarTitle:"Tasks"}},{name:"topics",route:"/linux-programming/topics",children:[{data:s.Z},{name:"hardware-and-software",route:"/linux-programming/topics/hardware-and-software",frontMatter:{sidebarTitle:"Hardware and Software"}}]},{name:"topics",route:"/linux-programming/topics",frontMatter:{sidebarTitle:"Topics"}}]},{name:"operating-systems",route:"/operating-systems",children:[{data:{"*":{display:"visible"},index:"Getting Started",topics:"Topics"}},{name:"index",route:"/operating-systems",frontMatter:{sidebarTitle:"Index"}},{name:"topics",route:"/operating-systems/topics",children:[{data:{introduction:"Introduction"}},{name:"introduction",route:"/operating-systems/topics/introduction",frontMatter:{sidebarTitle:"Introduction"}}]},{name:"topics",route:"/operating-systems/topics",frontMatter:{sidebarTitle:"Topics"}}]}]}},function(e){e.O(0,[888,774,179],function(){return e(e.s=7850)}),_N_E=e.O()}]);