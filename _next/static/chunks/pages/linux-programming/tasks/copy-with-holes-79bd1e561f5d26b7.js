(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{3405:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linux-programming/tasks/copy-with-holes",function(){return i(5368)}])},5368:function(e,t,i){"use strict";i.r(t),i.d(t,{useTOC:function(){return l}});var r=i(1527),a=i(9310),n=i(2613),o=i(9222),s=i(2847);function l(e){return[{value:"Requirements",id:"requirements",depth:3},{value:"Expected result",id:"expected-result",depth:3}]}t.default=(0,a.c)(function(e){let{toc:t=l(e)}=e,i={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{children:"FS-10: Copy a file accounting holes"}),"\n",(0,r.jsx)(i.h3,{id:t[0].id,children:t[0].value}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Write a C++ program accepting two command line arguments representing source file path and destination file path."}),"\n",(0,r.jsx)(i.li,{children:"Implement proper error handling to account if not all arguments are passed or if one of arguments is not a valid one."}),"\n",(0,r.jsxs)(i.li,{children:["Copy the content of the ",(0,r.jsx)(i.strong,{children:"source"})," file into a ",(0,r.jsx)(i.strong,{children:"destination"})," file. If ",(0,r.jsx)(i.strong,{children:"destination"})," file already exists, it should be overwritten."]}),"\n",(0,r.jsxs)(i.li,{children:["If source file contains ",(0,r.jsx)(i.strong,{children:"holes"}),", the destination file should also contain hole as is."]}),"\n",(0,r.jsx)(i.li,{children:"Print overall amount of bytes copied to the destination file including total amount of physical data and total amount of holes if any."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:t[1].id,children:t[1].value}),"\n",(0,r.jsx)(i.p,{children:"The resulting application should be able to build and execute from command line as follows:"}),"\n",(0,r.jsx)(i.pre,{icon:s.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,r.jsxs)(i.code,{children:[(0,r.jsx)(i.span,{children:(0,r.jsx)(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"make"})}),"\n",(0,r.jsxs)(i.span,{children:[(0,r.jsx)(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"./copy"}),(0,r.jsx)(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" source-file destination-file"})]})]})}),"\n",(0,r.jsx)(i.p,{children:"After copy is completed, program should print following message to the console:"}),"\n",(0,r.jsx)(i.pre,{icon:s.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,r.jsx)(i.code,{children:(0,r.jsxs)(i.span,{children:[(0,r.jsx)(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Successfully"}),(0,r.jsx)(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" copied X bytes "}),(0,r.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,r.jsx)(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"data:"}),(0,r.jsx)(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" M, hole: N"}),(0,r.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"}),(0,r.jsx)(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"."})]})})}),"\n",(0,r.jsx)(i.p,{children:"The logical and physical sizes of source and destination files should match exactly."}),"\n",(0,r.jsxs)(i.p,{children:["The final solution should contain a ",(0,r.jsx)(i.strong,{children:"Makefile"})," for the multi-stage build. The Makefile should also contain targets ",(0,r.jsx)(i.strong,{children:"all"})," and ",(0,r.jsx)(i.strong,{children:"clean"}),". It’s recommended to have compiler and compiler flags to be declared as a Makefile variables. Alternatively, ",(0,r.jsx)(i.strong,{children:"cmake"})," could also be used instead of make."]})]})},"/linux-programming/tasks/copy-with-holes",{filePath:"pages/linux-programming/tasks/copy-with-holes.mdx",timestamp:1709404096e3,pageMap:n.v,frontMatter:{},title:"FS-10: Copy a file accounting holes"},"undefined"==typeof RemoteContent?l:RemoteContent.useTOC)},84:function(e,t){"use strict";t.Z={compilation:"Compilation and build process"}},8619:function(e,t){"use strict";t.Z={makefile:"Using Makefile","open-file":"Opening a file","read-file":"Reading a file","copy-file":"Copy a file","redirect-output":"Redirect the output","make-hole":"Creating holes","detect-holes":"Detect holes","create-process":"Create a process","create-thread":"Create a thread"}},7175:function(e,t){"use strict";t.Z={"environment-setup":{title:"ENV-1: Setup GNU/Linux Environment",handle:{group:"Environment"}},"complex-number":{title:"ENV-2: Complex numbers and sorting",handle:{group:"Environment"}},"read-file":{title:"FS-1: Read from the file",handle:{group:"File Systems"}},"copy-file":{title:"FS-2: Copy a file",handle:{group:"File Systems"}},"secure-file-deletion":{title:"FS-3: Secure file deletion",handle:{group:"File Systems"}},"redirect-cin":{title:"FS-4: Redirect standard input",handle:{group:"File Systems"}},"manual-append":{title:"FS-5: Manual append",handle:{group:"File Systems"}},"copy-with-holes":{title:"FS-10: Copy a file with holes",handle:{group:"File Systems"}},"do-command":{title:"PS-1: Do command",handle:{group:"Processes"}},"interactive-shell":{title:"PS-2: Interactive shell",handle:{group:"Processes"}},"array-sum":{title:"TH-1: Array Summary",handle:{group:"Threads"}},"thread-pool":{title:"TH-2: Thread Pool",handle:{group:"Threads"}},"signal-echo":{title:"IPC-1: Signal Echo",handle:{group:"IPC"}},"prime-calculator":{title:"IPC-2: Prime Calculator",handle:{group:"IPC"}},"shared-array":{title:"IPC-3: Shared Array",handle:{group:"IPC"}}}},2383:function(e,t){"use strict";t.Z={"hardware-and-software":"Hardware and Software"}},9222:function(e,t,i){"use strict";i.d(t,{a:function(){return l}});var r=i(877),a=i(3128),n=i.n(a),o=i(959);let s={img:e=>(0,o.createElement)("object"==typeof e.src?n():"img",e)},l=e=>(0,r.a)({...s,...e})},9310:function(e,t,i){"use strict";i.d(t,{c:function(){return d}});var r=i(1527),a=i(6030),n=i(7508);let o=(0,i(959).createContext)({}),s=o.Provider;o.displayName="SSG";var l=i(9222);function d(e,t,i,r){let n=globalThis[a.ud];return n.route=t,n.pageMap=i.pageMap,n.context[t]={Content:e,pageOpts:i,useTOC:r},u}function u({__nextra_pageMap:e=[],__nextra_dynamic_opts:t,...i}){let o=globalThis[a.ud],{Layout:l,themeConfig:d}=o,{route:u,locale:m}=(0,n.t)(),c=o.context[u];if(!c)throw Error(`No content found for the "${u}" route. Please report it as a bug.`);let{pageOpts:h,useTOC:g,Content:f}=c;for(let{route:t,children:i}of e){let e=t.split("/").slice(m?2:1);(function e(t,[i,...r]){for(let a of t)if("children"in a&&i===a.name)return r.length?e(a.children,r):a})(h.pageMap,e).children=i}if(t){let{title:e,frontMatter:i}=t;h={...h,title:e,frontMatter:i}}return(0,r.jsx)(l,{themeConfig:d,pageOpts:h,pageProps:i,children:(0,r.jsx)(s,{value:i,children:(0,r.jsx)(p,{useTOC:g,children:(0,r.jsx)(f,{...i})})})})}function p({children:e,useTOC:t}){let{wrapper:i}=(0,l.a)();return(0,r.jsx)(m,{useTOC:t,wrapper:i,children:e})}function m({children:e,useTOC:t,wrapper:i,...a}){let n=t(a);return i?(0,r.jsx)(i,{toc:n,children:e}):e}},2613:function(e,t,i){"use strict";i.d(t,{v:function(){return s}});var r=i(84),a=i(8619),n=i(7175),o=i(2383);let s=[{data:{index:{title:"Home",type:"page",display:"hidden",theme:{layout:"raw"}},"linux-programming":{title:"Linux Programming",type:"page"},"operating-systems":{title:"Operating Systems",type:"page",display:"hidden"}}},{name:"index",route:"/",frontMatter:{title:"Index",description:"Description"}},{name:"linux-programming",route:"/linux-programming",children:[{data:{index:"Getting Started",topics:"Topics",samples:"Samples",guides:"Guides",tasks:"Tasks"}},{name:"guides",route:"/linux-programming/guides",children:[{data:r.Z},{name:"compilation",route:"/linux-programming/guides/compilation",frontMatter:{sidebarTitle:"Compilation"}}]},{name:"guides",route:"/linux-programming/guides",frontMatter:{sidebarTitle:"Guides"}},{name:"index",route:"/linux-programming",frontMatter:{sidebarTitle:"Index"}},{name:"samples",route:"/linux-programming/samples",children:[{data:a.Z},{name:"copy-file",route:"/linux-programming/samples/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"create-process",route:"/linux-programming/samples/create-process",frontMatter:{sidebarTitle:"Create Process"}},{name:"create-thread",route:"/linux-programming/samples/create-thread",frontMatter:{sidebarTitle:"Create Thread"}},{name:"detect-holes",route:"/linux-programming/samples/detect-holes",frontMatter:{sidebarTitle:"Detect Holes"}},{name:"make-hole",route:"/linux-programming/samples/make-hole",frontMatter:{sidebarTitle:"Make Hole"}},{name:"makefile",route:"/linux-programming/samples/makefile",frontMatter:{sidebarTitle:"Makefile"}},{name:"open-file",route:"/linux-programming/samples/open-file",frontMatter:{sidebarTitle:"Open File"}},{name:"read-file",route:"/linux-programming/samples/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-output",route:"/linux-programming/samples/redirect-output",frontMatter:{sidebarTitle:"Redirect Output"}}]},{name:"samples",route:"/linux-programming/samples",frontMatter:{sidebarTitle:"Samples"}},{name:"tasks",route:"/linux-programming/tasks",children:[{data:n.Z},{name:"array-sum",route:"/linux-programming/tasks/array-sum",frontMatter:{sidebarTitle:"Array Sum"}},{name:"complex-number",route:"/linux-programming/tasks/complex-number",frontMatter:{sidebarTitle:"Complex Number"}},{name:"copy-file",route:"/linux-programming/tasks/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"copy-with-holes",route:"/linux-programming/tasks/copy-with-holes",frontMatter:{sidebarTitle:"Copy with Holes"}},{name:"do-command",route:"/linux-programming/tasks/do-command",frontMatter:{sidebarTitle:"Do Command"}},{name:"environment-setup",route:"/linux-programming/tasks/environment-setup",frontMatter:{sidebarTitle:"Environment Setup"}},{name:"interactive-shell",route:"/linux-programming/tasks/interactive-shell",frontMatter:{sidebarTitle:"Interactive Shell"}},{name:"manual-append",route:"/linux-programming/tasks/manual-append",frontMatter:{sidebarTitle:"Manual Append"}},{name:"prime-calculator",route:"/linux-programming/tasks/prime-calculator",frontMatter:{sidebarTitle:"Prime Calculator"}},{name:"read-file",route:"/linux-programming/tasks/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-cin",route:"/linux-programming/tasks/redirect-cin",frontMatter:{sidebarTitle:"Redirect Cin"}},{name:"secure-file-deletion",route:"/linux-programming/tasks/secure-file-deletion",frontMatter:{sidebarTitle:"Secure File Deletion"}},{name:"shared-array",route:"/linux-programming/tasks/shared-array",frontMatter:{sidebarTitle:"Shared Array"}},{name:"signal-echo",route:"/linux-programming/tasks/signal-echo",frontMatter:{sidebarTitle:"Signal Echo"}},{name:"thread-pool",route:"/linux-programming/tasks/thread-pool",frontMatter:{sidebarTitle:"Thread Pool"}}]},{name:"tasks",route:"/linux-programming/tasks",frontMatter:{sidebarTitle:"Tasks"}},{name:"topics",route:"/linux-programming/topics",children:[{data:o.Z},{name:"hardware-and-software",route:"/linux-programming/topics/hardware-and-software",frontMatter:{sidebarTitle:"Hardware and Software"}}]},{name:"topics",route:"/linux-programming/topics",frontMatter:{sidebarTitle:"Topics"}}]},{name:"operating-systems",route:"/operating-systems",children:[{data:{"*":{display:"visible"},index:"Getting Started",topics:"Topics"}},{name:"index",route:"/operating-systems",frontMatter:{sidebarTitle:"Index"}},{name:"topics",route:"/operating-systems/topics",children:[{data:{introduction:"Introduction"}},{name:"introduction",route:"/operating-systems/topics/introduction",frontMatter:{sidebarTitle:"Introduction"}}]},{name:"topics",route:"/operating-systems/topics",frontMatter:{sidebarTitle:"Topics"}}]}]}},function(e){e.O(0,[888,774,179],function(){return e(e.s=3405)}),_N_E=e.O()}]);