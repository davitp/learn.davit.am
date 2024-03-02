(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[840],{7086:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linux-programming/tasks/thread-pool",function(){return r(3781)}])},3781:function(e,t,r){"use strict";r.r(t),r.d(t,{useTOC:function(){return s}});var n=r(1527),a=r(9310),i=r(2613),o=r(9222),l=r(2847);function s(e){return[{value:"Requirements",id:"requirements",depth:3},{value:"Expected result",id:"expected-result",depth:3}]}t.default=(0,a.c)(function(e){let{toc:t=s(e)}=e,r={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:"TH-2: The thread pool implementation"}),"\n",(0,n.jsx)(r.h3,{id:t[0].id,children:t[0].value}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Create a C++ library (shared object) that implements a simple thread pool"}),"\n",(0,n.jsx)(r.li,{children:"Thread pool should be implemented as a class called “parallel_scheduler”"}),"\n",(0,n.jsxs)(r.li,{children:["Thread pool takes a ",(0,n.jsx)(r.strong,{children:"capacity"})," argument in the constructor as a maximum number of threads in the pool."]}),"\n",(0,n.jsxs)(r.li,{children:["Thread pool defines a method ",(0,n.jsx)(r.strong,{children:"run"})," that takes as an input two arguments ",(0,n.jsx)(r.strong,{children:"function"})," and the ",(0,n.jsx)(r.strong,{children:"argument"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"All the functions given to the “run” method are enqueued and the thread pool should execute them as soon as any of its threads gets time."}),"\n",(0,n.jsx)(r.li,{children:"Next, another executable application is implemented to demonstrate the usage of the thread pool library."}),"\n",(0,n.jsx)(r.li,{children:"The demonstration application should enqueue various functions for the execution (more than the capacity)."}),"\n",(0,n.jsx)(r.li,{children:"The module “parallel_scheduler” should be compiled as a shared library (parallel_scheduler.so) and should be linked with the demo application."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:t[1].id,children:t[1].value}),"\n",(0,n.jsx)(r.p,{children:"The resulting application should be able to build and execute from command line as follows:"}),"\n",(0,n.jsx)(r.pre,{icon:l.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsxs)(r.code,{children:[(0,n.jsx)(r.span,{children:(0,n.jsx)(r.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"make"})}),"\n",(0,n.jsx)(r.span,{children:(0,n.jsx)(r.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"./demo-application"})})]})}),"\n",(0,n.jsxs)(r.p,{children:["The final solution should contain a ",(0,n.jsx)(r.strong,{children:"Makefile"})," for the multi-stage build. The Makefile should also contain targets ",(0,n.jsx)(r.strong,{children:"all"})," and ",(0,n.jsx)(r.strong,{children:"clean"}),". It’s recommended to have compiler and compiler flags to be declared as a Makefile variables. Alternatively, ",(0,n.jsx)(r.strong,{children:"cmake"})," could also be used instead of make."]})]})},"/linux-programming/tasks/thread-pool",{filePath:"pages/linux-programming/tasks/thread-pool.mdx",timestamp:1709399623e3,pageMap:i.v,frontMatter:{},title:"TH-2: The thread pool implementation"},"undefined"==typeof RemoteContent?s:RemoteContent.useTOC)},84:function(e,t){"use strict";t.Z={compilation:"Compilation and build process"}},7175:function(e,t){"use strict";t.Z={"environment-setup":{title:"ENV-1: Setup GNU/Linux Environment",handle:{group:"Environment"}},"complex-number":{title:"ENV-2: Complex numbers and sorting",handle:{group:"Environment"}},"read-file":{title:"FS-1: Read from the file",handle:{group:"File Systems"}},"copy-file":{title:"FS-2: Copy a file",handle:{group:"File Systems"}},"secure-file-deletion":{title:"FS-3: Secure file deletion",handle:{group:"File Systems"}},"redirect-cin":{title:"FS-4: Redirect standard input",handle:{group:"File Systems"}},"manual-append":{title:"FS-5: Manual append",handle:{group:"File Systems"}},"copy-with-holes":{title:"FS-10: Copy a file with holes",handle:{group:"File Systems"}},"do-command":{title:"PS-1: Do command",handle:{group:"Processes"}},"interactive-shell":{title:"PS-2: Interactive shell",handle:{group:"Processes"}},"array-sum":{title:"TH-1: Array Summary",handle:{group:"Threads"}},"thread-pool":{title:"TH-2: Thread Pool",handle:{group:"Threads"}},"signal-echo":{title:"IPC-1: Signal Echo",handle:{group:"IPC"}},"prime-calculator":{title:"IPC-2: Prime Calculator",handle:{group:"IPC"}},"shared-array":{title:"IPC-3: Shared Array",handle:{group:"IPC"}}}},2383:function(e,t){"use strict";t.Z={"hardware-and-software":"Hardware and Software"}},9222:function(e,t,r){"use strict";r.d(t,{a:function(){return s}});var n=r(877),a=r(3128),i=r.n(a),o=r(959);let l={img:e=>(0,o.createElement)("object"==typeof e.src?i():"img",e)},s=e=>(0,n.a)({...l,...e})},9310:function(e,t,r){"use strict";r.d(t,{c:function(){return d}});var n=r(1527),a=r(6030),i=r(7508);let o=(0,r(959).createContext)({}),l=o.Provider;o.displayName="SSG";var s=r(9222);function d(e,t,r,n){let i=globalThis[a.ud];return i.route=t,i.pageMap=r.pageMap,i.context[t]={Content:e,pageOpts:r,useTOC:n},u}function u({__nextra_pageMap:e=[],__nextra_dynamic_opts:t,...r}){let o=globalThis[a.ud],{Layout:s,themeConfig:d}=o,{route:u,locale:p}=(0,i.t)(),c=o.context[u];if(!c)throw Error(`No content found for the "${u}" route. Please report it as a bug.`);let{pageOpts:h,useTOC:g,Content:f}=c;for(let{route:t,children:r}of e){let e=t.split("/").slice(p?2:1);(function e(t,[r,...n]){for(let a of t)if("children"in a&&r===a.name)return n.length?e(a.children,n):a})(h.pageMap,e).children=r}if(t){let{title:e,frontMatter:r}=t;h={...h,title:e,frontMatter:r}}return(0,n.jsx)(s,{themeConfig:d,pageOpts:h,pageProps:r,children:(0,n.jsx)(l,{value:r,children:(0,n.jsx)(m,{useTOC:g,children:(0,n.jsx)(f,{...r})})})})}function m({children:e,useTOC:t}){let{wrapper:r}=(0,s.a)();return(0,n.jsx)(p,{useTOC:t,wrapper:r,children:e})}function p({children:e,useTOC:t,wrapper:r,...a}){let i=t(a);return r?(0,n.jsx)(r,{toc:i,children:e}):e}},2613:function(e,t,r){"use strict";r.d(t,{v:function(){return o}});var n=r(84),a=r(7175),i=r(2383);let o=[{data:{index:{title:"Home",type:"page",display:"hidden",theme:{layout:"raw"}},"linux-programming":{title:"Linux Programming",type:"page"},"operating-systems":{title:"Operating Systems",type:"page",display:"hidden"}}},{name:"index",route:"/",frontMatter:{title:"Index",description:"Description"}},{name:"linux-programming",route:"/linux-programming",children:[{data:{index:"Getting Started",topics:"Topics",guides:"Guides",tasks:"Tasks"}},{name:"guides",route:"/linux-programming/guides",children:[{data:n.Z},{name:"compilation",route:"/linux-programming/guides/compilation",frontMatter:{sidebarTitle:"Compilation"}}]},{name:"guides",route:"/linux-programming/guides",frontMatter:{sidebarTitle:"Guides"}},{name:"index",route:"/linux-programming",frontMatter:{sidebarTitle:"Index"}},{name:"tasks",route:"/linux-programming/tasks",children:[{data:a.Z},{name:"array-sum",route:"/linux-programming/tasks/array-sum",frontMatter:{sidebarTitle:"Array Sum"}},{name:"complex-number",route:"/linux-programming/tasks/complex-number",frontMatter:{sidebarTitle:"Complex Number"}},{name:"copy-file",route:"/linux-programming/tasks/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"copy-with-holes",route:"/linux-programming/tasks/copy-with-holes",frontMatter:{sidebarTitle:"Copy with Holes"}},{name:"do-command",route:"/linux-programming/tasks/do-command",frontMatter:{sidebarTitle:"Do Command"}},{name:"environment-setup",route:"/linux-programming/tasks/environment-setup",frontMatter:{sidebarTitle:"Environment Setup"}},{name:"interactive-shell",route:"/linux-programming/tasks/interactive-shell",frontMatter:{sidebarTitle:"Interactive Shell"}},{name:"manual-append",route:"/linux-programming/tasks/manual-append",frontMatter:{sidebarTitle:"Manual Append"}},{name:"prime-calculator",route:"/linux-programming/tasks/prime-calculator",frontMatter:{sidebarTitle:"Prime Calculator"}},{name:"read-file",route:"/linux-programming/tasks/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-cin",route:"/linux-programming/tasks/redirect-cin",frontMatter:{sidebarTitle:"Redirect Cin"}},{name:"secure-file-deletion",route:"/linux-programming/tasks/secure-file-deletion",frontMatter:{sidebarTitle:"Secure File Deletion"}},{name:"shared-array",route:"/linux-programming/tasks/shared-array",frontMatter:{sidebarTitle:"Shared Array"}},{name:"signal-echo",route:"/linux-programming/tasks/signal-echo",frontMatter:{sidebarTitle:"Signal Echo"}},{name:"thread-pool",route:"/linux-programming/tasks/thread-pool",frontMatter:{sidebarTitle:"Thread Pool"}}]},{name:"tasks",route:"/linux-programming/tasks",frontMatter:{sidebarTitle:"Tasks"}},{name:"topics",route:"/linux-programming/topics",children:[{data:i.Z},{name:"hardware-and-software",route:"/linux-programming/topics/hardware-and-software",frontMatter:{sidebarTitle:"Hardware and Software"}}]},{name:"topics",route:"/linux-programming/topics",frontMatter:{sidebarTitle:"Topics"}}]},{name:"operating-systems",route:"/operating-systems",children:[{data:{"*":{display:"visible"},index:"Getting Started",topics:"Topics"}},{name:"index",route:"/operating-systems",frontMatter:{sidebarTitle:"Index"}},{name:"topics",route:"/operating-systems/topics",children:[{data:{introduction:"Introduction"}},{name:"introduction",route:"/operating-systems/topics/introduction",frontMatter:{sidebarTitle:"Introduction"}}]},{name:"topics",route:"/operating-systems/topics",frontMatter:{sidebarTitle:"Topics"}}]}]}},function(e){e.O(0,[888,774,179],function(){return e(e.s=7086)}),_N_E=e.O()}]);