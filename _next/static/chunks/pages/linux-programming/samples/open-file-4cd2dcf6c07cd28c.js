(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{7819:function(i,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linux-programming/samples/open-file",function(){return s(9750)}])},9750:function(i,e,s){"use strict";s.r(e),s.d(e,{useTOC:function(){return h}});var n=s(1527),r=s(9310),t=s(2613),a=s(9222),l=s(2847);function h(i){return[]}e.default=(0,r.c)(function(i){let e={code:"code",h1:"h1",p:"p",pre:"pre",span:"span",strong:"strong",...(0,a.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"Opening a file"}),"\n",(0,n.jsxs)(e.p,{children:["This sample demonstrates the usage of functions ",(0,n.jsx)(e.strong,{children:"open"})," and ",(0,n.jsx)(e.strong,{children:"close"}),"."]}),"\n",(0,n.jsx)(e.pre,{tabIndex:"0","data-language":"c","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <stdio.h>"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <fcntl.h>"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <errno.h>"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"#include"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" <unistd.h>"})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"int"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" main"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"() "})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"{      "})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:'    // open the file with a given relative path "foo.txt" '})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // the file should be open only for reading (O_RDONLY) and should be created if missing (O_CREAT)"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // when created, the file should have the following permissions: read and write by the owner (S_IRUSR and S_IWUSR) and read-only for the group (S_IRGRP) "})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    int"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" fd "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" open"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"foo.txt"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", O_RDONLY "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"|"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" O_CREAT, S_IRUSR "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"|"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" S_IWUSR "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"|"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" S_IRGRP);  "})]}),"\n",(0,n.jsx)(e.span,{children:" "}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // print the number of the descriptor"})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    printf"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Returned Value = '}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"%d\\n"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", fd); "})]}),"\n",(0,n.jsx)(e.span,{children:" "}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // validating the result of the open operation      "})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    if"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" (fd "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" -"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    { "})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // print which type of error have in a code (stored in the global errno variable)"})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"        printf"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Error Number '}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"%d\\n"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", errno);  "})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"          "})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // print error details "})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"        perror"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"main"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");       "})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        "})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // exit program as cannot continue"})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"        return"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" errno;           "})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    } "})}),"\n",(0,n.jsx)(e.span,{children:" "}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    printf"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Successfully opened a file. Doing some reading...'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"\\n"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,n.jsx)(e.span,{children:" "}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // close file"})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    int"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" closed "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" close"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(fd);"})]}),"\n",(0,n.jsx)(e.span,{children:" "}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // if closed"})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    if"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(closed "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" -"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    {"})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"        printf"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Error while closing file '}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"%d\\n"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", errno);"})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        "})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"        return"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" errno; "})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    "})}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    printf"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"File closed successfully '}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"\\n"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    return"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"; "})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"} "})})]})}),"\n",(0,n.jsx)(e.p,{children:"The file can be compiled with the following command:"}),"\n",(0,n.jsx)(e.pre,{icon:l.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsx)(e.code,{children:(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"gcc"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" open.c -o open"})]})})}),"\n",(0,n.jsxs)(e.p,{children:["Running the resulting application ",(0,n.jsx)(e.strong,{children:"./open"})," should create a file named ",(0,n.jsx)(e.strong,{children:"foo.txt"})," and print the following result:"]}),"\n",(0,n.jsx)(e.pre,{icon:l.Fx,tabIndex:"0","data-language":"sh","data-word-wrap":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Returned"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" Value = "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"3"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"Successfully"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" opened a file. Doing some reading..."})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"File"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" closed successfully"})]})]})})]})},"/linux-programming/samples/open-file",{filePath:"pages/linux-programming/samples/open-file.mdx",timestamp:1709404096e3,pageMap:t.v,frontMatter:{},title:"Opening a file"},"undefined"==typeof RemoteContent?h:RemoteContent.useTOC)},84:function(i,e){"use strict";e.Z={compilation:"Compilation and build process"}},8619:function(i,e){"use strict";e.Z={makefile:"Using Makefile","open-file":"Opening a file","read-file":"Reading a file","copy-file":"Copy a file","redirect-output":"Redirect the output","make-hole":"Creating holes","detect-holes":"Detect holes","create-process":"Create a process","create-thread":"Create a thread"}},7175:function(i,e){"use strict";e.Z={"environment-setup":{title:"ENV-1: Setup GNU/Linux Environment",handle:{group:"Environment"}},"complex-number":{title:"ENV-2: Complex numbers and sorting",handle:{group:"Environment"}},"read-file":{title:"FS-1: Read from the file",handle:{group:"File Systems"}},"copy-file":{title:"FS-2: Copy a file",handle:{group:"File Systems"}},"secure-file-deletion":{title:"FS-3: Secure file deletion",handle:{group:"File Systems"}},"redirect-cin":{title:"FS-4: Redirect standard input",handle:{group:"File Systems"}},"manual-append":{title:"FS-5: Manual append",handle:{group:"File Systems"}},"copy-with-holes":{title:"FS-10: Copy a file with holes",handle:{group:"File Systems"}},"do-command":{title:"PS-1: Do command",handle:{group:"Processes"}},"interactive-shell":{title:"PS-2: Interactive shell",handle:{group:"Processes"}},"array-sum":{title:"TH-1: Array Summary",handle:{group:"Threads"}},"thread-pool":{title:"TH-2: Thread Pool",handle:{group:"Threads"}},"signal-echo":{title:"IPC-1: Signal Echo",handle:{group:"IPC"}},"prime-calculator":{title:"IPC-2: Prime Calculator",handle:{group:"IPC"}},"shared-array":{title:"IPC-3: Shared Array",handle:{group:"IPC"}}}},2383:function(i,e){"use strict";e.Z={"hardware-and-software":"Hardware and Software"}},9222:function(i,e,s){"use strict";s.d(e,{a:function(){return h}});var n=s(877),r=s(3128),t=s.n(r),a=s(959);let l={img:i=>(0,a.createElement)("object"==typeof i.src?t():"img",i)},h=i=>(0,n.a)({...l,...i})},9310:function(i,e,s){"use strict";s.d(e,{c:function(){return d}});var n=s(1527),r=s(6030),t=s(7508);let a=(0,s(959).createContext)({}),l=a.Provider;a.displayName="SSG";var h=s(9222);function d(i,e,s,n){let t=globalThis[r.ud];return t.route=e,t.pageMap=s.pageMap,t.context[e]={Content:i,pageOpts:s,useTOC:n},o}function o({__nextra_pageMap:i=[],__nextra_dynamic_opts:e,...s}){let a=globalThis[r.ud],{Layout:h,themeConfig:d}=a,{route:o,locale:k}=(0,t.t)(),c=a.context[o];if(!c)throw Error(`No content found for the "${o}" route. Please report it as a bug.`);let{pageOpts:g,useTOC:x,Content:u}=c;for(let{route:e,children:s}of i){let i=e.split("/").slice(k?2:1);(function i(e,[s,...n]){for(let r of e)if("children"in r&&s===r.name)return n.length?i(r.children,n):r})(g.pageMap,i).children=s}if(e){let{title:i,frontMatter:s}=e;g={...g,title:i,frontMatter:s}}return(0,n.jsx)(h,{themeConfig:d,pageOpts:g,pageProps:s,children:(0,n.jsx)(l,{value:s,children:(0,n.jsx)(p,{useTOC:x,children:(0,n.jsx)(u,{...s})})})})}function p({children:i,useTOC:e}){let{wrapper:s}=(0,h.a)();return(0,n.jsx)(k,{useTOC:e,wrapper:s,children:i})}function k({children:i,useTOC:e,wrapper:s,...r}){let t=e(r);return s?(0,n.jsx)(s,{toc:t,children:i}):i}},2613:function(i,e,s){"use strict";s.d(e,{v:function(){return l}});var n=s(84),r=s(8619),t=s(7175),a=s(2383);let l=[{data:{index:{title:"Home",type:"page",display:"hidden",theme:{layout:"raw"}},"linux-programming":{title:"Linux Programming",type:"page"},"operating-systems":{title:"Operating Systems",type:"page",display:"hidden"}}},{name:"index",route:"/",frontMatter:{title:"Index",description:"Description"}},{name:"linux-programming",route:"/linux-programming",children:[{data:{index:"Getting Started",topics:"Topics",samples:"Samples",guides:"Guides",tasks:"Tasks"}},{name:"guides",route:"/linux-programming/guides",children:[{data:n.Z},{name:"compilation",route:"/linux-programming/guides/compilation",frontMatter:{sidebarTitle:"Compilation"}}]},{name:"guides",route:"/linux-programming/guides",frontMatter:{sidebarTitle:"Guides"}},{name:"index",route:"/linux-programming",frontMatter:{sidebarTitle:"Index"}},{name:"samples",route:"/linux-programming/samples",children:[{data:r.Z},{name:"copy-file",route:"/linux-programming/samples/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"create-process",route:"/linux-programming/samples/create-process",frontMatter:{sidebarTitle:"Create Process"}},{name:"create-thread",route:"/linux-programming/samples/create-thread",frontMatter:{sidebarTitle:"Create Thread"}},{name:"detect-holes",route:"/linux-programming/samples/detect-holes",frontMatter:{sidebarTitle:"Detect Holes"}},{name:"make-hole",route:"/linux-programming/samples/make-hole",frontMatter:{sidebarTitle:"Make Hole"}},{name:"makefile",route:"/linux-programming/samples/makefile",frontMatter:{sidebarTitle:"Makefile"}},{name:"open-file",route:"/linux-programming/samples/open-file",frontMatter:{sidebarTitle:"Open File"}},{name:"read-file",route:"/linux-programming/samples/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-output",route:"/linux-programming/samples/redirect-output",frontMatter:{sidebarTitle:"Redirect Output"}}]},{name:"samples",route:"/linux-programming/samples",frontMatter:{sidebarTitle:"Samples"}},{name:"tasks",route:"/linux-programming/tasks",children:[{data:t.Z},{name:"array-sum",route:"/linux-programming/tasks/array-sum",frontMatter:{sidebarTitle:"Array Sum"}},{name:"complex-number",route:"/linux-programming/tasks/complex-number",frontMatter:{sidebarTitle:"Complex Number"}},{name:"copy-file",route:"/linux-programming/tasks/copy-file",frontMatter:{sidebarTitle:"Copy File"}},{name:"copy-with-holes",route:"/linux-programming/tasks/copy-with-holes",frontMatter:{sidebarTitle:"Copy with Holes"}},{name:"do-command",route:"/linux-programming/tasks/do-command",frontMatter:{sidebarTitle:"Do Command"}},{name:"environment-setup",route:"/linux-programming/tasks/environment-setup",frontMatter:{sidebarTitle:"Environment Setup"}},{name:"interactive-shell",route:"/linux-programming/tasks/interactive-shell",frontMatter:{sidebarTitle:"Interactive Shell"}},{name:"manual-append",route:"/linux-programming/tasks/manual-append",frontMatter:{sidebarTitle:"Manual Append"}},{name:"prime-calculator",route:"/linux-programming/tasks/prime-calculator",frontMatter:{sidebarTitle:"Prime Calculator"}},{name:"read-file",route:"/linux-programming/tasks/read-file",frontMatter:{sidebarTitle:"Read File"}},{name:"redirect-cin",route:"/linux-programming/tasks/redirect-cin",frontMatter:{sidebarTitle:"Redirect Cin"}},{name:"secure-file-deletion",route:"/linux-programming/tasks/secure-file-deletion",frontMatter:{sidebarTitle:"Secure File Deletion"}},{name:"shared-array",route:"/linux-programming/tasks/shared-array",frontMatter:{sidebarTitle:"Shared Array"}},{name:"signal-echo",route:"/linux-programming/tasks/signal-echo",frontMatter:{sidebarTitle:"Signal Echo"}},{name:"thread-pool",route:"/linux-programming/tasks/thread-pool",frontMatter:{sidebarTitle:"Thread Pool"}}]},{name:"tasks",route:"/linux-programming/tasks",frontMatter:{sidebarTitle:"Tasks"}},{name:"topics",route:"/linux-programming/topics",children:[{data:a.Z},{name:"hardware-and-software",route:"/linux-programming/topics/hardware-and-software",frontMatter:{sidebarTitle:"Hardware and Software"}}]},{name:"topics",route:"/linux-programming/topics",frontMatter:{sidebarTitle:"Topics"}}]},{name:"operating-systems",route:"/operating-systems",children:[{data:{"*":{display:"visible"},index:"Getting Started",topics:"Topics"}},{name:"index",route:"/operating-systems",frontMatter:{sidebarTitle:"Index"}},{name:"topics",route:"/operating-systems/topics",children:[{data:{introduction:"Introduction"}},{name:"introduction",route:"/operating-systems/topics/introduction",frontMatter:{sidebarTitle:"Introduction"}}]},{name:"topics",route:"/operating-systems/topics",frontMatter:{sidebarTitle:"Topics"}}]}]}},function(i){i.O(0,[888,774,179],function(){return i(i.s=7819)}),_N_E=i.O()}]);