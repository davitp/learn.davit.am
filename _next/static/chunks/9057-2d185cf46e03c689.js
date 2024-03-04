"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9057],{37:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(1527),n=r(6259),i=r(3700),o=r.n(i);let l={cards:(0,n.Z)("nextra-cards _mt-4 _gap-4 _grid","_not-prose"),card:(0,n.Z)("nextra-card _group _flex _flex-col _justify-start _overflow-hidden _rounded-lg _border _border-gray-200","_text-current _no-underline dark:_shadow-none","hover:_shadow-gray-100 dark:hover:_shadow-none _shadow-gray-100","active:_shadow-sm active:_shadow-gray-200","_transition-all _duration-200 hover:_border-gray-300"),title:(0,n.Z)("_flex _font-semibold _items-start _gap-2 _p-4 _text-gray-700 hover:_text-gray-900")},s=(0,a.jsx)("span",{className:"_transition-transform _duration-75 group-hover:_translate-x-[2px]",children:"→"}),d=Object.assign(function({children:e,num:t=3,className:r,style:i,...o}){return(0,a.jsx)("div",{className:(0,n.Z)(l.cards,r),...o,style:{...i,"--rows":t},children:e})},{displayName:"Cards",Card:function({children:e,title:t,icon:r,image:i,arrow:d,href:m,...u}){let p=d?s:null;return i?(0,a.jsxs)(o(),{href:m,className:(0,n.Z)(l.card,"_bg-gray-100 _shadow dark:_border-neutral-700 dark:_bg-neutral-800 dark:_text-gray-50 hover:_shadow-lg dark:hover:_border-neutral-500 dark:hover:_bg-neutral-700"),...u,children:[e,(0,a.jsxs)("span",{className:(0,n.Z)(l.title,"dark:_text-gray-300 dark:hover:_text-gray-100"),children:[r,(0,a.jsxs)("span",{className:"_flex _gap-1",children:[t,p]})]})]}):(0,a.jsx)(o(),{href:m,className:(0,n.Z)(l.card,"_bg-transparent _shadow-sm dark:_border-neutral-800 hover:_bg-slate-50 hover:_shadow-md dark:hover:_border-neutral-700 dark:hover:_bg-neutral-900"),...u,children:(0,a.jsxs)("span",{className:(0,n.Z)(l.title,"dark:_text-neutral-200 dark:hover:_text-neutral-50 _flex _items-center"),children:[r,t,p]})})}});function m(e){let{directory:t,pages:r=[]}=e;return(0,a.jsx)(d,{children:r.map((e,r)=>(0,a.jsx)(d.Card,{title:e.title,arrow:!0,href:t?"".concat(t,"/").concat(e.key):e.key},r))})}function u(e){let{directory:t,meta:r}=e;return(0,a.jsx)(m,{directory:t,pages:Object.entries(r||{}).map(e=>{let t=e[0],r=e[1];return"string"==typeof r||r instanceof String?{key:t,title:r}:"object"==typeof r?{key:t,title:r.title||t}:{key:t,value:t}})})}},84:function(e,t){t.Z={compilation:"Compilation and build process"}},8619:function(e,t){t.Z={makefile:"Using Makefile","open-file":"Opening a file","read-file":"Reading a file","copy-file":"Copy a file","redirect-output":"Redirect the output","make-hole":"Creating holes","detect-holes":"Detect holes","create-process":"Create a process","create-thread":"Create a thread"}},7175:function(e,t){t.Z={"environment-setup":{title:"ENV-1: Setup GNU/Linux Environment",handle:{group:"Environment"}},"complex-number":{title:"ENV-2: Complex numbers and sorting",handle:{group:"Environment"}},"read-file":{title:"FS-1: Read from the file",handle:{group:"File Systems"}},"copy-file":{title:"FS-2: Copy a file",handle:{group:"File Systems"}},"secure-file-deletion":{title:"FS-3: Secure file deletion",handle:{group:"File Systems"}},"redirect-cin":{title:"FS-4: Redirect standard input",handle:{group:"File Systems"}},"manual-append":{title:"FS-5: Manual append",handle:{group:"File Systems"}},"copy-with-holes":{title:"FS-10: Copy a file with holes",handle:{group:"File Systems"}},"do-command":{title:"PS-1: Do command",handle:{group:"Processes"}},"interactive-shell":{title:"PS-2: Interactive shell",handle:{group:"Processes"}},"array-sum":{title:"TH-1: Array Summary",handle:{group:"Threads"}},"thread-pool":{title:"TH-2: Thread Pool",handle:{group:"Threads"}},"signal-echo":{title:"IPC-1: Signal Echo",handle:{group:"IPC"}},"prime-calculator":{title:"IPC-2: Prime Calculator",handle:{group:"IPC"}},"shared-array":{title:"IPC-3: Shared Array",handle:{group:"IPC"}}}},2383:function(e,t){t.Z={"hardware-and-software":"Hardware and Software","system-calls":"System Calls"}},9222:function(e,t,r){r.d(t,{a:function(){return s}});var a=r(877),n=r(3128),i=r.n(n),o=r(959);let l={img:e=>(0,o.createElement)("object"==typeof e.src?i():"img",e)},s=e=>(0,a.a)({...l,...e})},9310:function(e,t,r){r.d(t,{c:function(){return d}});var a=r(1527),n=r(6030),i=r(7508);let o=(0,r(959).createContext)({}),l=o.Provider;o.displayName="SSG";var s=r(9222);function d(e,t,r,a){let i=globalThis[n.ud];return i.route=t,i.pageMap=r.pageMap,i.context[t]={Content:e,pageOpts:r,useTOC:a},m}function m({__nextra_pageMap:e=[],__nextra_dynamic_opts:t,...r}){let o=globalThis[n.ud],{Layout:s,themeConfig:d}=o,{route:m,locale:p}=(0,i.t)(),c=o.context[m];if(!c)throw Error(`No content found for the "${m}" route. Please report it as a bug.`);let{pageOpts:g,useTOC:h,Content:f}=c;for(let{route:t,children:r}of e){let e=t.split("/").slice(p?2:1);(function e(t,[r,...a]){for(let n of t)if("children"in n&&r===n.name)return a.length?e(n.children,a):n})(g.pageMap,e).children=r}if(t){let{title:e,frontMatter:r}=t;g={...g,title:e,frontMatter:r}}return(0,a.jsx)(s,{themeConfig:d,pageOpts:g,pageProps:r,children:(0,a.jsx)(l,{value:r,children:(0,a.jsx)(u,{useTOC:h,children:(0,a.jsx)(f,{...r})})})})}function u({children:e,useTOC:t}){let{wrapper:r}=(0,s.a)();return(0,a.jsx)(p,{useTOC:t,wrapper:r,children:e})}function p({children:e,useTOC:t,wrapper:r,...n}){let i=t(n);return r?(0,a.jsx)(r,{toc:i,children:e}):e}},2613:function(e,t,r){r.d(t,{v:function(){return l}});var a=r(84),n=r(8619),i=r(7175),o=r(2383);let l=[{data:{index:{title:"Home",type:"page",display:"hidden",theme:{layout:"raw"}},"linux-programming":{title:"Linux Programming",type:"page"},"operating-systems":{title:"Operating Systems",type:"page",display:"hidden"}}},{name:"index",route:"/",frontMatter:{title:"Index",description:"Description"}},{name:"linux-programming",route:"/linux-programming",children:[{data:{index:"Getting Started",topics:"Topics",samples:"Samples",guides:"Guides",tasks:"Tasks"}},{name:"guides",route:"/linux-programming/guides",children:[{data:a.Z},{name:"compilation",route:"/linux-programming/guides/compilation",frontMatter:{sidebarTitle:"Compilation"}}]},{name:"guides",route:"/linux-programming/guides",frontMatter:{sidebarTitle:"Guides"}},{name:"index",route:"/linux-programming",frontMatter:{sidebarTitle:"Index"}},{name:"samples",route:"/linux-programming/samples",children:[{data:n.Z},{name:"copy-file",route:"/linux-programming/samples/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"create-process",route:"/linux-programming/samples/create-process",frontMatter:{sidebarTitle:"Create Process"}},{name:"create-thread",route:"/linux-programming/samples/create-thread",frontMatter:{sidebarTitle:"Create Thread"}},{name:"detect-holes",route:"/linux-programming/samples/detect-holes",frontMatter:{sidebarTitle:"Detect Holes"}},{name:"make-hole",route:"/linux-programming/samples/make-hole",frontMatter:{sidebarTitle:"Make Hole"}},{name:"makefile",route:"/linux-programming/samples/makefile",frontMatter:{sidebarTitle:"Makefile"}},{name:"open-file",route:"/linux-programming/samples/open-file",frontMatter:{sidebarTitle:"Open File"}},{name:"read-file",route:"/linux-programming/samples/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-output",route:"/linux-programming/samples/redirect-output",frontMatter:{sidebarTitle:"Redirect Output"}}]},{name:"samples",route:"/linux-programming/samples",frontMatter:{sidebarTitle:"Samples"}},{name:"tasks",route:"/linux-programming/tasks",children:[{data:i.Z},{name:"array-sum",route:"/linux-programming/tasks/array-sum",frontMatter:{sidebarTitle:"Array Sum"}},{name:"complex-number",route:"/linux-programming/tasks/complex-number",frontMatter:{sidebarTitle:"Complex Number"}},{name:"copy-file",route:"/linux-programming/tasks/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"copy-with-holes",route:"/linux-programming/tasks/copy-with-holes",frontMatter:{sidebarTitle:"Copy with Holes"}},{name:"do-command",route:"/linux-programming/tasks/do-command",frontMatter:{sidebarTitle:"Do Command"}},{name:"environment-setup",route:"/linux-programming/tasks/environment-setup",frontMatter:{sidebarTitle:"Environment Setup"}},{name:"interactive-shell",route:"/linux-programming/tasks/interactive-shell",frontMatter:{sidebarTitle:"Interactive Shell"}},{name:"manual-append",route:"/linux-programming/tasks/manual-append",frontMatter:{sidebarTitle:"Manual Append"}},{name:"prime-calculator",route:"/linux-programming/tasks/prime-calculator",frontMatter:{sidebarTitle:"Prime Calculator"}},{name:"read-file",route:"/linux-programming/tasks/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-cin",route:"/linux-programming/tasks/redirect-cin",frontMatter:{sidebarTitle:"Redirect Cin"}},{name:"secure-file-deletion",route:"/linux-programming/tasks/secure-file-deletion",frontMatter:{sidebarTitle:"Secure File Deletion"}},{name:"shared-array",route:"/linux-programming/tasks/shared-array",frontMatter:{sidebarTitle:"Shared Array"}},{name:"signal-echo",route:"/linux-programming/tasks/signal-echo",frontMatter:{sidebarTitle:"Signal Echo"}},{name:"thread-pool",route:"/linux-programming/tasks/thread-pool",frontMatter:{sidebarTitle:"Thread Pool"}}]},{name:"tasks",route:"/linux-programming/tasks",frontMatter:{sidebarTitle:"Tasks"}},{name:"topics",route:"/linux-programming/topics",children:[{data:o.Z},{name:"hardware-and-software",route:"/linux-programming/topics/hardware-and-software",frontMatter:{sidebarTitle:"Hardware and Software"}},{name:"system-calls",route:"/linux-programming/topics/system-calls",frontMatter:{sidebarTitle:"System Calls"}}]},{name:"topics",route:"/linux-programming/topics",frontMatter:{sidebarTitle:"Topics"}}]},{name:"operating-systems",route:"/operating-systems",children:[{data:{"*":{display:"visible"},index:"Getting Started",topics:"Topics"}},{name:"index",route:"/operating-systems",frontMatter:{sidebarTitle:"Index"}},{name:"topics",route:"/operating-systems/topics",children:[{data:{introduction:"Introduction"}},{name:"introduction",route:"/operating-systems/topics/introduction",frontMatter:{sidebarTitle:"Introduction"}}]},{name:"topics",route:"/operating-systems/topics",frontMatter:{sidebarTitle:"Topics"}}]}]}}]);