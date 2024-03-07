"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8702],{1078:function(e,t){t.Z={index:"Getting Started",topics:"Topics",samples:"Samples",guides:"Guides",tasks:"Tasks"}},84:function(e,t){t.Z={compilation:"Compilation and build process"}},8619:function(e,t){t.Z={makefile:"Using Makefile","open-file":"Opening a file","read-file":"Reading a file","copy-file":"Copy a file","redirect-output":"Redirect the output","make-hole":"Creating holes","detect-holes":"Detect holes","create-process":"Create a process","create-thread":"Create a thread"}},7175:function(e,t){t.Z={environment:"Environment","file-systems":"File Systems",processes:"Processes",threads:"Threads",ipc:"IPC"}},5483:function(e,t){t.Z={"environment-setup":{title:"ENV-1: Setup GNU/Linux Environment"},"complex-number":{title:"ENV-2: Complex numbers and sorting"}}},5547:function(e,t){t.Z={"read-file":{title:"FS-1: Read from the file"},"copy-file":{title:"FS-2: Copy a file"},"secure-file-deletion":{title:"FS-3: Secure file deletion"},"redirect-cin":{title:"FS-4: Redirect standard input"},"manual-append":{title:"FS-5: Manual append"},"copy-with-holes":{title:"FS-10: Copy a file with holes"}}},1789:function(e,t){t.Z={"signal-echo":{title:"IPC-1: Signal Echo"},"prime-calculator":{title:"IPC-2: Prime Calculator"},"shared-array":{title:"IPC-3: Shared Array"}}},5694:function(e,t){t.Z={"do-command":{title:"PS-1: Do command"},"interactive-shell":{title:"PS-2: Interactive shell"}}},9477:function(e,t){t.Z={"array-sum":{title:"TH-1: Array Summary"},"thread-pool":{title:"TH-2: Thread Pool"}}},2383:function(e,t){t.Z={"hardware-and-software":"Hardware and Software","file-systems-overview":"File Systems Overview","system-calls":"System Calls"}},9947:function(e,t,r){r.d(t,{a:function(){return l}});var a=r(877),i=r(3128),n=r.n(i),o=r(959);let s={img:e=>(0,o.createElement)("object"==typeof e.src?n():"img",e)},l=e=>(0,a.a)({...s,...e})},5141:function(e,t,r){r.d(t,{c:function(){return m}});var a=r(1527),i=r(8204),n=r(6704);let o=(0,r(959).createContext)({}),s=o.Provider;o.displayName="SSG";var l=r(9947);function m(e,t,r,a){let n=globalThis[i.ud];return n.route=t,n.pageMap=r.pageMap,n.context[t]={Content:e,pageOpts:r,useTOC:a},u}function u({__nextra_pageMap:e=[],__nextra_dynamic_opts:t,...r}){let o=globalThis[i.ud],{Layout:l,themeConfig:m}=o,{route:u,locale:d}=(0,n.t)(),c=o.context[u];if(!c)throw Error(`No content found for the "${u}" route. Please report it as a bug.`);let{pageOpts:g,useTOC:f,Content:h}=c;for(let{route:t,children:r}of e){let e=t.split("/").slice(d?2:1);(function e(t,[r,...a]){for(let i of t)if("children"in i&&r===i.name)return a.length?e(i.children,a):i})(g.pageMap,e).children=r}if(t){let{title:e,frontMatter:r}=t;g={...g,title:e,frontMatter:r}}return(0,a.jsx)(l,{themeConfig:m,pageOpts:g,pageProps:r,children:(0,a.jsx)(s,{value:r,children:(0,a.jsx)(p,{useTOC:f,children:(0,a.jsx)(h,{...r})})})})}function p({children:e,useTOC:t}){let{wrapper:r}=(0,l.a)();return(0,a.jsx)(d,{useTOC:t,wrapper:r,children:e})}function d({children:e,useTOC:t,wrapper:r,...i}){let n=t(i);return r?(0,a.jsx)(r,{toc:n,children:e}):e}},1790:function(e,t,r){r.d(t,{v:function(){return c}});var a=r(1078),i=r(84),n=r(8619),o=r(7175),s=r(5483),l=r(5547),m=r(1789),u=r(5694),p=r(9477),d=r(2383);let c=[{data:{index:{title:"Home",type:"page",display:"hidden",theme:{layout:"raw"}},"linux-programming":{title:"Linux Programming",type:"page"},"operating-systems":{title:"Operating Systems",type:"page",display:"hidden"}}},{name:"index",route:"/",frontMatter:{title:"Home",description:"Welcome to new Learning Portal!"}},{name:"linux-programming",route:"/linux-programming",children:[{data:a.Z},{name:"guides",route:"/linux-programming/guides",children:[{data:i.Z},{name:"compilation",route:"/linux-programming/guides/compilation",frontMatter:{sidebarTitle:"Compilation"}}]},{name:"guides",route:"/linux-programming/guides",frontMatter:{sidebarTitle:"Guides"}},{name:"index",route:"/linux-programming",frontMatter:{sidebarTitle:"Index"}},{name:"samples",route:"/linux-programming/samples",children:[{data:n.Z},{name:"copy-file",route:"/linux-programming/samples/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"create-process",route:"/linux-programming/samples/create-process",frontMatter:{sidebarTitle:"Create Process"}},{name:"create-thread",route:"/linux-programming/samples/create-thread",frontMatter:{sidebarTitle:"Create Thread"}},{name:"detect-holes",route:"/linux-programming/samples/detect-holes",frontMatter:{sidebarTitle:"Detect Holes"}},{name:"make-hole",route:"/linux-programming/samples/make-hole",frontMatter:{sidebarTitle:"Make Hole"}},{name:"makefile",route:"/linux-programming/samples/makefile",frontMatter:{sidebarTitle:"Makefile"}},{name:"open-file",route:"/linux-programming/samples/open-file",frontMatter:{sidebarTitle:"Open File"}},{name:"read-file",route:"/linux-programming/samples/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-output",route:"/linux-programming/samples/redirect-output",frontMatter:{sidebarTitle:"Redirect Output"}}]},{name:"samples",route:"/linux-programming/samples",frontMatter:{sidebarTitle:"Samples"}},{name:"tasks",route:"/linux-programming/tasks",children:[{data:o.Z},{name:"environment",route:"/linux-programming/tasks/environment",children:[{data:s.Z},{name:"complex-number",route:"/linux-programming/tasks/environment/complex-number",frontMatter:{sidebarTitle:"Complex Number"}},{name:"environment-setup",route:"/linux-programming/tasks/environment/environment-setup",frontMatter:{sidebarTitle:"Environment Setup"}}]},{name:"environment",route:"/linux-programming/tasks/environment",frontMatter:{sidebarTitle:"Environment"}},{name:"file-systems",route:"/linux-programming/tasks/file-systems",children:[{data:l.Z},{name:"copy-file",route:"/linux-programming/tasks/file-systems/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"copy-with-holes",route:"/linux-programming/tasks/file-systems/copy-with-holes",frontMatter:{sidebarTitle:"Copy with Holes"}},{name:"manual-append",route:"/linux-programming/tasks/file-systems/manual-append",frontMatter:{sidebarTitle:"Manual Append"}},{name:"read-file",route:"/linux-programming/tasks/file-systems/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-cin",route:"/linux-programming/tasks/file-systems/redirect-cin",frontMatter:{sidebarTitle:"Redirect Cin"}},{name:"secure-file-deletion",route:"/linux-programming/tasks/file-systems/secure-file-deletion",frontMatter:{sidebarTitle:"Secure File Deletion"}}]},{name:"file-systems",route:"/linux-programming/tasks/file-systems",frontMatter:{sidebarTitle:"File Systems"}},{name:"ipc",route:"/linux-programming/tasks/ipc",children:[{data:m.Z},{name:"prime-calculator",route:"/linux-programming/tasks/ipc/prime-calculator",frontMatter:{sidebarTitle:"Prime Calculator"}},{name:"shared-array",route:"/linux-programming/tasks/ipc/shared-array",frontMatter:{sidebarTitle:"Shared Array"}},{name:"signal-echo",route:"/linux-programming/tasks/ipc/signal-echo",frontMatter:{sidebarTitle:"Signal Echo"}}]},{name:"ipc",route:"/linux-programming/tasks/ipc",frontMatter:{sidebarTitle:"Ipc"}},{name:"processes",route:"/linux-programming/tasks/processes",children:[{data:u.Z},{name:"do-command",route:"/linux-programming/tasks/processes/do-command",frontMatter:{sidebarTitle:"Do Command"}},{name:"interactive-shell",route:"/linux-programming/tasks/processes/interactive-shell",frontMatter:{sidebarTitle:"Interactive Shell"}}]},{name:"processes",route:"/linux-programming/tasks/processes",frontMatter:{sidebarTitle:"Processes"}},{name:"threads",route:"/linux-programming/tasks/threads",children:[{data:p.Z},{name:"array-sum",route:"/linux-programming/tasks/threads/array-sum",frontMatter:{sidebarTitle:"Array Sum"}},{name:"thread-pool",route:"/linux-programming/tasks/threads/thread-pool",frontMatter:{sidebarTitle:"Thread Pool"}}]},{name:"threads",route:"/linux-programming/tasks/threads",frontMatter:{sidebarTitle:"Threads"}}]},{name:"tasks",route:"/linux-programming/tasks",frontMatter:{sidebarTitle:"Tasks"}},{name:"topics",route:"/linux-programming/topics",children:[{data:d.Z},{name:"file-systems-overview",route:"/linux-programming/topics/file-systems-overview",frontMatter:{sidebarTitle:"File Systems Overview"}},{name:"hardware-and-software",route:"/linux-programming/topics/hardware-and-software",frontMatter:{sidebarTitle:"Hardware and Software"}},{name:"system-calls",route:"/linux-programming/topics/system-calls",frontMatter:{sidebarTitle:"System Calls"}}]},{name:"topics",route:"/linux-programming/topics",frontMatter:{sidebarTitle:"Topics"}}]},{name:"operating-systems",route:"/operating-systems",children:[{data:{"*":{display:"visible"},index:"Getting Started",topics:"Topics"}},{name:"index",route:"/operating-systems",frontMatter:{sidebarTitle:"Index"}},{name:"topics",route:"/operating-systems/topics",children:[{data:{introduction:"Introduction"}},{name:"introduction",route:"/operating-systems/topics/introduction",frontMatter:{sidebarTitle:"Introduction"}}]},{name:"topics",route:"/operating-systems/topics",frontMatter:{sidebarTitle:"Topics"}}]}]}}]);