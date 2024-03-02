(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[397],{5264:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linux-programming/tasks/copy-file",function(){return r(8434)}])},8434:function(e,t,r){"use strict";r.r(t),r.d(t,{useTOC:function(){return l}});var n=r(1527),i=r(9310),a=r(2613),o=r(9222),s=r(2847);function l(e){return[{value:"Requirements",id:"requirements",depth:3},{value:"Expected result",id:"expected-result",depth:3}]}t.default=(0,i.c)(function(e){let{toc:t=l(e)}=e,r={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:"FS-2: Copy a file"}),"\n",(0,n.jsx)(r.h3,{id:t[0].id,children:t[0].value}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Write a C++ program ",(0,n.jsx)(r.strong,{children:"simple-copy"})," accepting two command line arguments representing source file path and destination file path."]}),"\n",(0,n.jsx)(r.li,{children:"Implement proper error handling to account if not all arguments are passed or if one of arguments is not a valid one."}),"\n",(0,n.jsxs)(r.li,{children:["Copy the content of the ",(0,n.jsx)(r.strong,{children:"source"})," file into a ",(0,n.jsx)(r.strong,{children:"destination"})," file. If ",(0,n.jsx)(r.strong,{children:"destination"})," file already exists, it should be overwritten."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:t[1].id,children:t[1].value}),"\n",(0,n.jsx)(r.p,{children:"The resulting application should be able to build and execute from command line as follows:"}),"\n",(0,n.jsx)(r.pre,{icon:s.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsxs)(r.code,{children:[(0,n.jsx)(r.span,{children:(0,n.jsx)(r.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"make"})}),"\n",(0,n.jsxs)(r.span,{children:[(0,n.jsx)(r.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"./simple-copy"}),(0,n.jsx)(r.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" source-file destination-file"})]})]})}),"\n",(0,n.jsxs)(r.p,{children:["The final solution should contain a ",(0,n.jsx)(r.strong,{children:"Makefile"})," for the multi-stage build. The Makefile should also contain targets ",(0,n.jsx)(r.strong,{children:"all"})," and ",(0,n.jsx)(r.strong,{children:"clean"}),". It’s recommended to have compiler and compiler flags to be declared as a Makefile variables. Alternatively, ",(0,n.jsx)(r.strong,{children:"cmake"})," could also be used instead of make."]})]})},"/linux-programming/tasks/copy-file",{filePath:"pages/linux-programming/tasks/copy-file.mdx",timestamp:1709399623e3,pageMap:a.v,frontMatter:{},title:"FS-2: Copy a file"},"undefined"==typeof RemoteContent?l:RemoteContent.useTOC)},84:function(e,t){"use strict";t.Z={compilation:"Compilation and build process"}},7175:function(e,t){"use strict";t.Z={"environment-setup":{title:"ENV-1: Setup GNU/Linux Environment",handle:{group:"Environment"}},"complex-number":{title:"ENV-2: Complex numbers and sorting",handle:{group:"Environment"}},"read-file":{title:"FS-1: Read from the file",handle:{group:"File Systems"}},"copy-file":{title:"FS-2: Copy a file",handle:{group:"File Systems"}},"secure-file-deletion":{title:"FS-3: Secure file deletion",handle:{group:"File Systems"}},"redirect-cin":{title:"FS-4: Redirect standard input",handle:{group:"File Systems"}},"manual-append":{title:"FS-5: Manual append",handle:{group:"File Systems"}},"copy-with-holes":{title:"FS-10: Copy a file with holes",handle:{group:"File Systems"}},"do-command":{title:"PS-1: Do command",handle:{group:"Processes"}},"interactive-shell":{title:"PS-2: Interactive shell",handle:{group:"Processes"}},"array-sum":{title:"TH-1: Array Summary",handle:{group:"Threads"}},"thread-pool":{title:"TH-2: Thread Pool",handle:{group:"Threads"}},"signal-echo":{title:"IPC-1: Signal Echo",handle:{group:"IPC"}},"prime-calculator":{title:"IPC-2: Prime Calculator",handle:{group:"IPC"}},"shared-array":{title:"IPC-3: Shared Array",handle:{group:"IPC"}}}},2383:function(e,t){"use strict";t.Z={"hardware-and-software":"Hardware and Software"}},9222:function(e,t,r){"use strict";r.d(t,{a:function(){return l}});var n=r(877),i=r(3128),a=r.n(i),o=r(959);let s={img:e=>(0,o.createElement)("object"==typeof e.src?a():"img",e)},l=e=>(0,n.a)({...s,...e})},9310:function(e,t,r){"use strict";r.d(t,{c:function(){return d}});var n=r(1527),i=r(6030),a=r(7508);let o=(0,r(959).createContext)({}),s=o.Provider;o.displayName="SSG";var l=r(9222);function d(e,t,r,n){let a=globalThis[i.ud];return a.route=t,a.pageMap=r.pageMap,a.context[t]={Content:e,pageOpts:r,useTOC:n},u}function u({__nextra_pageMap:e=[],__nextra_dynamic_opts:t,...r}){let o=globalThis[i.ud],{Layout:l,themeConfig:d}=o,{route:u,locale:p}=(0,a.t)(),c=o.context[u];if(!c)throw Error(`No content found for the "${u}" route. Please report it as a bug.`);let{pageOpts:g,useTOC:h,Content:f}=c;for(let{route:t,children:r}of e){let e=t.split("/").slice(p?2:1);(function e(t,[r,...n]){for(let i of t)if("children"in i&&r===i.name)return n.length?e(i.children,n):i})(g.pageMap,e).children=r}if(t){let{title:e,frontMatter:r}=t;g={...g,title:e,frontMatter:r}}return(0,n.jsx)(l,{themeConfig:d,pageOpts:g,pageProps:r,children:(0,n.jsx)(s,{value:r,children:(0,n.jsx)(m,{useTOC:h,children:(0,n.jsx)(f,{...r})})})})}function m({children:e,useTOC:t}){let{wrapper:r}=(0,l.a)();return(0,n.jsx)(p,{useTOC:t,wrapper:r,children:e})}function p({children:e,useTOC:t,wrapper:r,...i}){let a=t(i);return r?(0,n.jsx)(r,{toc:a,children:e}):e}},2613:function(e,t,r){"use strict";r.d(t,{v:function(){return o}});var n=r(84),i=r(7175),a=r(2383);let o=[{data:{index:{title:"Home",type:"page",display:"hidden",theme:{layout:"raw"}},"linux-programming":{title:"Linux Programming",type:"page"},"operating-systems":{title:"Operating Systems",type:"page",display:"hidden"}}},{name:"index",route:"/",frontMatter:{title:"Index",description:"Description"}},{name:"linux-programming",route:"/linux-programming",children:[{data:{index:"Getting Started",topics:"Topics",guides:"Guides",tasks:"Tasks"}},{name:"guides",route:"/linux-programming/guides",children:[{data:n.Z},{name:"compilation",route:"/linux-programming/guides/compilation",frontMatter:{sidebarTitle:"Compilation"}}]},{name:"guides",route:"/linux-programming/guides",frontMatter:{sidebarTitle:"Guides"}},{name:"index",route:"/linux-programming",frontMatter:{sidebarTitle:"Index"}},{name:"tasks",route:"/linux-programming/tasks",children:[{data:i.Z},{name:"array-sum",route:"/linux-programming/tasks/array-sum",frontMatter:{sidebarTitle:"Array Sum"}},{name:"complex-number",route:"/linux-programming/tasks/complex-number",frontMatter:{sidebarTitle:"Complex Number"}},{name:"copy-file",route:"/linux-programming/tasks/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"copy-with-holes",route:"/linux-programming/tasks/copy-with-holes",frontMatter:{sidebarTitle:"Copy with Holes"}},{name:"do-command",route:"/linux-programming/tasks/do-command",frontMatter:{sidebarTitle:"Do Command"}},{name:"environment-setup",route:"/linux-programming/tasks/environment-setup",frontMatter:{sidebarTitle:"Environment Setup"}},{name:"interactive-shell",route:"/linux-programming/tasks/interactive-shell",frontMatter:{sidebarTitle:"Interactive Shell"}},{name:"manual-append",route:"/linux-programming/tasks/manual-append",frontMatter:{sidebarTitle:"Manual Append"}},{name:"prime-calculator",route:"/linux-programming/tasks/prime-calculator",frontMatter:{sidebarTitle:"Prime Calculator"}},{name:"read-file",route:"/linux-programming/tasks/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-cin",route:"/linux-programming/tasks/redirect-cin",frontMatter:{sidebarTitle:"Redirect Cin"}},{name:"secure-file-deletion",route:"/linux-programming/tasks/secure-file-deletion",frontMatter:{sidebarTitle:"Secure File Deletion"}},{name:"shared-array",route:"/linux-programming/tasks/shared-array",frontMatter:{sidebarTitle:"Shared Array"}},{name:"signal-echo",route:"/linux-programming/tasks/signal-echo",frontMatter:{sidebarTitle:"Signal Echo"}},{name:"thread-pool",route:"/linux-programming/tasks/thread-pool",frontMatter:{sidebarTitle:"Thread Pool"}}]},{name:"tasks",route:"/linux-programming/tasks",frontMatter:{sidebarTitle:"Tasks"}},{name:"topics",route:"/linux-programming/topics",children:[{data:a.Z},{name:"hardware-and-software",route:"/linux-programming/topics/hardware-and-software",frontMatter:{sidebarTitle:"Hardware and Software"}}]},{name:"topics",route:"/linux-programming/topics",frontMatter:{sidebarTitle:"Topics"}}]},{name:"operating-systems",route:"/operating-systems",children:[{data:{"*":{display:"visible"},index:"Getting Started",topics:"Topics"}},{name:"index",route:"/operating-systems",frontMatter:{sidebarTitle:"Index"}},{name:"topics",route:"/operating-systems/topics",children:[{data:{introduction:"Introduction"}},{name:"introduction",route:"/operating-systems/topics/introduction",frontMatter:{sidebarTitle:"Introduction"}}]},{name:"topics",route:"/operating-systems/topics",frontMatter:{sidebarTitle:"Topics"}}]}]}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5264)}),_N_E=e.O()}]);