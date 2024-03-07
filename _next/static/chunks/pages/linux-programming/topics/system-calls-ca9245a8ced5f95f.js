(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6639],{7602:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linux-programming/topics/system-calls",function(){return i(6520)}])},6520:function(e,n,i){"use strict";i.r(n),i.d(n,{useTOC:function(){return a}});var t=i(1527),s=i(5141),l=i(1790),r=i(9947);function a(e){return[{value:"Overview",id:"overview",depth:2},{value:"Outline",id:"outline",depth:2},{value:"How CPU and Memory Work Together?",id:"how-cpu-and-memory-work-together",depth:3},{value:"Kernel Communication with CPU, RAM, and Devices",id:"kernel-communication-with-cpu-ram-and-devices",depth:3},{value:"Operating System Functionality for Application Development: System Calls",id:"operating-system-functionality-for-application-development-system-calls",depth:3},{value:"Introduction to POSIX Standard",id:"introduction-to-posix-standard",depth:3},{value:"References",id:"references",depth:3},{value:"Practice",id:"practice",depth:2},{value:"Using GNU/Linux as a Development Environment",id:"using-gnulinux-as-a-development-environment",depth:3},{value:"Overview of Git and Repository Setup",id:"overview-of-git-and-repository-setup",depth:3},{value:"Basic Shell Commands and Input/Output Operations",id:"basic-shell-commands-and-inputoutput-operations",depth:3},{value:"High-Level Introduction to Shell Scripting",id:"high-level-introduction-to-shell-scripting",depth:3},{value:"References",id:"references-1",depth:3}]}n.default=(0,s.c)(function(e){let{toc:n=a(e)}=e,i={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{children:"System calls, hardware-software communication, POSIX standard."}),"\n",(0,t.jsx)(i.h2,{id:n[0].id,children:n[0].value}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Understanding the essential aspects of communication between hardware and software."}),"\n",(0,t.jsx)(i.li,{children:"Exploring the functionality exposed by operating systems and the role of System Calls."}),"\n",(0,t.jsx)(i.li,{children:"Introduction to the POSIX standard for hardware and software compatibility."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:n[1].id,children:n[1].value}),"\n",(0,t.jsx)(i.h3,{id:n[2].id,children:n[2].value}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Explaining the synergy between the CPU and RAM in a computer system."}),"\n",(0,t.jsx)(i.li,{children:"Understanding the fundamental principles of memory management."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:n[3].id,children:n[3].value}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Unraveling the mechanisms through which the Kernel communicates with critical components."}),"\n",(0,t.jsx)(i.li,{children:"Insight into the role of the Kernel in managing hardware resources."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:n[4].id,children:n[4].value}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Examining the functionality exposed by the operating system for application development."}),"\n",(0,t.jsx)(i.li,{children:"Understanding the significance of System Calls in facilitating communication between applications and the OS."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:n[5].id,children:n[5].value}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Exploring the POSIX standard and its importance for ensuring hardware and software compatibility."}),"\n",(0,t.jsx)(i.li,{children:"Discussing key POSIX concepts and their impact on cross-platform development."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:n[6].id,children:n[6].value}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.youtube.com/watch?v=Z5JC9Ve1sfI",children:"The Fetch-Execute Cycle"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.youtube.com/watch?v=GMlTmG2KJH4",children:"Лекция 1. Генезис операционных систем: Назначение ОС (RUS)"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.knowledgehut.com/blog/web-development/system-calls-in-os#frequently-asked-questions",children:"System Calls"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/System_call",children:"System Calls: Wiki"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.baeldung.com/linux/posix",children:"POSIX Standard Explained"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:n[7].id,children:n[7].value}),"\n",(0,t.jsx)(i.h3,{id:n[8].id,children:n[8].value}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Practical guidance on leveraging GNU/Linux for efficient development."}),"\n",(0,t.jsx)(i.li,{children:"Incorporating essential tools and practices for seamless system programming."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:n[9].id,children:n[9].value}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Brief overview of Git for version control and collaboration."}),"\n",(0,t.jsx)(i.li,{children:"Step-by-step guide on setting up repositories for homework assignments."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:n[10].id,children:n[10].value}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Hands-on experience with fundamental shell commands."}),"\n",(0,t.jsx)(i.li,{children:"Exploring standard input and output operations, including redirection and piping."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:n[11].id,children:n[11].value}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Introduction to the basics of shell scripting."}),"\n",(0,t.jsx)(i.li,{children:"Understanding the power of automation through simple script creation."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:n[12].id,children:n[12].value}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://betterprogramming.pub/man-pages-the-complete-guide-800ad93425fe",children:"Man Pages - The Complete Guide"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.youtube.com/watch?v=3aEgkFq4IFA",children:"Manual Pages"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://missing.csail.mit.edu/",children:"The Missing Semester of Your CS Education"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.youtube.com/watch?v=Z56Jmr9Z34Q",children:"Missing Semester: The Shell"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.youtube.com/watch?v=kgII-YWo3Zw",children:"Missing Semester: Shell Tools and Scripting"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.youtube.com/watch?v=a6Q8Na575qc",children:"Missing Semester: Editors (vim)"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.youtube.com/watch?v=2sjqTHE0zok",children:"Missing Semester: Version Control (git)"})}),"\n"]})]})},"/linux-programming/topics/system-calls",{filePath:"pages/linux-programming/topics/system-calls.mdx",timestamp:1709822931e3,pageMap:l.v,frontMatter:{},title:"System calls, hardware-software communication, POSIX standard."},"undefined"==typeof RemoteContent?a:RemoteContent.useTOC)}},function(e){e.O(0,[8702,2888,9774,179],function(){return e(e.s=7602)}),_N_E=e.O()}]);