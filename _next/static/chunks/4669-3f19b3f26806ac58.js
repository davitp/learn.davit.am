"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4669],{9061:function(e,t){t.Z={index:"Getting Started",topics:"Topics",samples:"Samples",guides:"Guides",tasks:"Tasks"}},6869:function(e,t){t.Z={compilation:"Compilation and build process"}},1143:function(e,t){t.Z={makefile:"Using Makefile","open-file":"Opening a file","read-file":"Reading a file","copy-file":"Copy a file","redirect-output":"Redirect the output","make-hole":"Creating holes","detect-holes":"Detect holes","create-process":"Create a process","create-thread":"Create a thread"}},9585:function(e,t){t.Z={environment:"Environment","file-systems":"File Systems",processes:"Processes",threads:"Threads",ipc:"IPC"}},5434:function(e,t){t.Z={"environment-setup":{title:"ENV-1: Setup GNU/Linux Environment"},"complex-number":{title:"ENV-2: Complex numbers and sorting"}}},7218:function(e,t){t.Z={"read-file":{title:"FS-1: Read from the file"},"copy-file":{title:"FS-2: Copy a file"},"secure-file-deletion":{title:"FS-3: Secure file deletion"},"redirect-cin":{title:"FS-4: Redirect standard input"},"manual-append":{title:"FS-5: Manual append"},"copy-with-holes":{title:"FS-10: Copy a file with holes"}}},5783:function(e,t){t.Z={"signal-echo":{title:"IPC-1: Signal Echo"},"prime-calculator":{title:"IPC-2: Prime Calculator"},"shared-array":{title:"IPC-3: Shared Array"}}},5926:function(e,t){t.Z={"do-command":{title:"PS-1: Do command"},"interactive-shell":{title:"PS-2: Interactive shell"}}},2349:function(e,t){t.Z={"array-sum":{title:"TH-1: Array Summary"},"thread-pool":{title:"TH-2: Thread Pool"}}},2496:function(e,t){t.Z={"hardware-and-software":"Hardware and Software","file-systems-overview":"File Systems Overview","linux-programming":"Linux Programming","system-calls":"System Calls","file-systems-api":"File Systems API","advanced-input-output":"Advanced File IO",processes:"Processes",threads:"Threads",synchronization:"Synchronization"}},5717:function(e,t,i){i.d(t,{a:function(){return l}});var r=i(6079),n=i(6351),a=i.n(n),s=i(5271);let o={img:e=>(0,s.createElement)("object"==typeof e.src?a():"img",e)},l=e=>(0,r.a)({...o,...e})},902:function(e,t,i){i.d(t,{c:function(){return m}});var r=i(2676),n=i(7236),a=i(8397);let s=(0,i(5271).createContext)({}),o=s.Provider;s.displayName="SSG";var l=i(5717);function m(e,t,i,r){let a=globalThis[n.ud];return a.route=t,a.pageMap=i.pageMap,a.context[t]={Content:e,pageOpts:i,useTOC:r},c}function c({__nextra_pageMap:e=[],__nextra_dynamic_opts:t,...i}){let s=globalThis[n.ud],{Layout:l,themeConfig:m}=s,{route:c,locale:p}=(0,a.t)(),u=s.context[c];if(!u)throw Error(`No content found for the "${c}" route. Please report it as a bug.`);let{pageOpts:g,useTOC:f,Content:h}=u;for(let{route:t,children:i}of e){let e=t.split("/").slice(p?2:1);(function e(t,[i,...r]){for(let n of t)if("children"in n&&i===n.name)return r.length?e(n.children,r):n})(g.pageMap,e).children=i}if(t){let{title:e,frontMatter:i}=t;g={...g,title:e,frontMatter:i}}return(0,r.jsx)(l,{themeConfig:m,pageOpts:g,pageProps:i,children:(0,r.jsx)(o,{value:i,children:(0,r.jsx)(d,{useTOC:f,children:(0,r.jsx)(h,{...i})})})})}function d({children:e,useTOC:t}){let{wrapper:i}=(0,l.a)();return(0,r.jsx)(p,{useTOC:t,wrapper:i,children:e})}function p({children:e,useTOC:t,wrapper:i,...n}){let a=t(n);return i?(0,r.jsx)(i,{toc:a,children:e}):e}},3103:function(e,t,i){i.d(t,{v:function(){return u}});var r=i(9061),n=i(6869),a=i(1143),s=i(9585),o=i(5434),l=i(7218),m=i(5783),c=i(5926),d=i(2349),p=i(2496);let u=[{data:{index:{title:"Home",type:"page",display:"hidden",theme:{layout:"raw"}},"linux-programming":{title:"Linux Programming",type:"page"},"operating-systems":{title:"Operating Systems",type:"page",display:"hidden"}}},{name:"index",route:"/",frontMatter:{title:"Home",description:"Welcome to new Learning Portal!"}},{name:"linux-programming",route:"/linux-programming",children:[{data:r.Z},{name:"guides",route:"/linux-programming/guides",children:[{data:n.Z},{name:"compilation",route:"/linux-programming/guides/compilation",frontMatter:{description:"The set of samples showcases different aspects of the compilation process in the Linux environment using various tools such as gcc, make, cmake, etc.",sidebarTitle:"Compilation"}}]},{name:"guides",route:"/linux-programming/guides",frontMatter:{sidebarTitle:"Guides"}},{name:"index",route:"/linux-programming",frontMatter:{sidebarTitle:"Index"}},{name:"samples",route:"/linux-programming/samples",children:[{data:a.Z},{name:"copy-file",route:"/linux-programming/samples/copy-file",frontMatter:{description:"This sample demonstrates how to implement a basic copy program using read and **write functions.",sidebarTitle:"Copy File"}},{name:"create-process",route:"/linux-programming/samples/create-process",frontMatter:{description:"The sample demonstrates how to create a process using fork() function.",sidebarTitle:"Create Process"}},{name:"create-thread",route:"/linux-programming/samples/create-thread",frontMatter:{description:"The sample demonstrates how to create a thread using pthread_create() function and wait for its completion.",sidebarTitle:"Create Thread"}},{name:"detect-holes",route:"/linux-programming/samples/detect-holes",frontMatter:{description:"The sample demonstrates how to detect data and hole segments in the given file.",sidebarTitle:"Detect Holes"}},{name:"make-hole",route:"/linux-programming/samples/make-hole",frontMatter:{description:"This sample demonstrates the ability to create a sparse file containing both data segments and holes using lseek function.",sidebarTitle:"Make Hole"}},{name:"makefile",route:"/linux-programming/samples/makefile",frontMatter:{description:"In this sample, we will compile a program having two modules with Makefile.",sidebarTitle:"Makefile"}},{name:"open-file",route:"/linux-programming/samples/open-file",frontMatter:{description:"This sample demonstrates the usage of functions open and close.",sidebarTitle:"Open File"}},{name:"read-file",route:"/linux-programming/samples/read-file",frontMatter:{description:"This sample demonstrates how to read a text file using read() function.",sidebarTitle:"Read File"}},{name:"redirect-output",route:"/linux-programming/samples/redirect-output",frontMatter:{description:"This sample demonstrates how to redirect standard output and standard error into a file (using dup/dup2) while keeping possibility to write to the console when needed.",sidebarTitle:"Redirect Output"}}]},{name:"samples",route:"/linux-programming/samples",frontMatter:{sidebarTitle:"Samples"}},{name:"tasks",route:"/linux-programming/tasks",children:[{data:s.Z},{name:"environment",route:"/linux-programming/tasks/environment",children:[{data:o.Z},{name:"complex-number",route:"/linux-programming/tasks/environment/complex-number",frontMatter:{description:"Write multi-file C++ program consisting of following 3 modules. A class that represents a complex number along with all the basic operations - plus, minus, multiply by a constant, absolute value.",sidebarTitle:"Complex Number"}},{name:"environment-setup",route:"/linux-programming/tasks/environment/environment-setup",frontMatter:{description:"Install any GNU/Linux distribution on a Virtual or Physical Machine.",sidebarTitle:"Environment Setup"}}]},{name:"environment",route:"/linux-programming/tasks/environment",frontMatter:{sidebarTitle:"Environment"}},{name:"file-systems",route:"/linux-programming/tasks/file-systems",children:[{data:l.Z},{name:"copy-file",route:"/linux-programming/tasks/file-systems/copy-file",frontMatter:{description:"Learn to copy files in C++ on Linux with proper error handling. Overwrite destination files effortlessly. Perfect for Linux programming beginners.",sidebarTitle:"Copy File"}},{name:"copy-with-holes",route:"/linux-programming/tasks/file-systems/copy-with-holes",frontMatter:{description:"Master file copying in C++ on Linux with error handling and hole preservation. Overwrite destination files seamlessly and print byte details. Ideal for Linux programming enthusiasts.",sidebarTitle:"Copy with Holes"}},{name:"manual-append",route:"/linux-programming/tasks/file-systems/manual-append",frontMatter:{description:'Your task is to write a program on C/C++ that writes two lines in the files "first line" and "second line".',sidebarTitle:"Manual Append"}},{name:"read-file",route:"/linux-programming/tasks/file-systems/read-file",frontMatter:{description:"You need to implement a program that does the same thing as the cat command in the Linux.",sidebarTitle:"Read File"}},{name:"redirect-cin",route:"/linux-programming/tasks/file-systems/redirect-cin",frontMatter:{description:"By default, program gets standard input waiting for the keyboard input. Your task is to make any program to read input from the file instead of waiting for the keyboard input without changing usages of std::cin or scanf.",sidebarTitle:"Redirect Cin"}},{name:"secure-file-deletion",route:"/linux-programming/tasks/file-systems/secure-file-deletion",frontMatter:{description:"Your task is to implement a C++ program that deletes the file from the filesystem along with its content by replacing every byte in the files with '\\0' character.",sidebarTitle:"Secure File Deletion"}}]},{name:"file-systems",route:"/linux-programming/tasks/file-systems",frontMatter:{sidebarTitle:"File Systems"}},{name:"ipc",route:"/linux-programming/tasks/ipc",children:[{data:m.Z},{name:"prime-calculator",route:"/linux-programming/tasks/ipc/prime-calculator",frontMatter:{description:"Discover C++ interprocess communication on Linux: create child processes, pass data via anonymous pipes, and calculate prime numbers efficiently. Perfect for mastering advanced Linux programming techniques.\n",sidebarTitle:"Prime Calculator"}},{name:"shared-array",route:"/linux-programming/tasks/ipc/shared-array",frontMatter:{description:"Unlock interprocess communication in C++ on Linux with 'shared_array' class. Easily share integer arrays between processes, initialize with custom names and sizes, and seamlessly access elements with operator []. Perfect for implementing cross-process synchronization using semaphores.\n",sidebarTitle:"Shared Array"}},{name:"signal-echo",route:"/linux-programming/tasks/ipc/signal-echo",frontMatter:{description:"Enhance your C++ programming skills on Linux by creating a program that prints its PID and sets up a signal handler for SIGUSR1. Explore handling custom signals effectively, printing sender process details, and accessing register values. Perfect for understanding signal handling and process communication in C++ on Linux.",sidebarTitle:"Signal Echo"}}]},{name:"ipc",route:"/linux-programming/tasks/ipc",frontMatter:{sidebarTitle:"Ipc"}},{name:"processes",route:"/linux-programming/tasks/processes",children:[{data:c.Z},{name:"do-command",route:"/linux-programming/tasks/processes/do-command",frontMatter:{description:"Your task is to implement a C++ program that accepts a command name and command arguments with command-line arguments and executes it in a new process.",sidebarTitle:"Do Command"}},{name:"interactive-shell",route:"/linux-programming/tasks/processes/interactive-shell",frontMatter:{description:"Develop a versatile interactive shell in C++, empowering users to execute commands seamlessly. This program features an infinite loop, spawning new processes for each entered command. Enhance usability by temporarily adding the current directory to the PATH variable for every new process. Additionally, redirect output streams to PID.log files for commands starting with 'silent'. Perfect for mastering shell programming and process management in C++.",sidebarTitle:"Interactive Shell"}}]},{name:"processes",route:"/linux-programming/tasks/processes",frontMatter:{sidebarTitle:"Processes"}},{name:"threads",route:"/linux-programming/tasks/threads",children:[{data:d.Z},{name:"array-sum",route:"/linux-programming/tasks/threads/array-sum",frontMatter:{description:"Efficiently sum large arrays in C++ with and without multi-threading. Customize array size and thread count via command line. Experience the performance difference firsthand.",sidebarTitle:"Array Sum"}},{name:"thread-pool",route:"/linux-programming/tasks/threads/thread-pool",frontMatter:{description:"Build a C++ thread pool library, 'parallel_scheduler', with customizable capacity. Enqueue functions for efficient execution and demonstrate usage in a demo application. Compile as a shared library for easy integration.",sidebarTitle:"Thread Pool"}}]},{name:"threads",route:"/linux-programming/tasks/threads",frontMatter:{sidebarTitle:"Threads"}}]},{name:"tasks",route:"/linux-programming/tasks",frontMatter:{sidebarTitle:"Tasks"}},{name:"topics",route:"/linux-programming/topics",children:[{data:p.Z},{name:"advanced-input-output",route:"/linux-programming/topics/advanced-input-output",frontMatter:{description:"Exploring more advanced functionalities provided by the File Systems API for file manipulations. Understanding concepts such as file descriptor duplication and granular control over file descriptors during file operations.",sidebarTitle:"Advanced Input Output"}},{name:"file-systems-api",route:"/linux-programming/topics/file-systems-api",frontMatter:{description:"Providing a basic understanding of file abstractions in the API. Explaining the concept of file descriptors and their role in file operations.",sidebarTitle:"File Systems API"}},{name:"file-systems-overview",route:"/linux-programming/topics/file-systems-overview",frontMatter:{description:"Understanding the fundamental concepts of hardware and software. Exploring the main components of a computer system.",sidebarTitle:"File Systems Overview"}},{name:"hardware-and-software",route:"/linux-programming/topics/hardware-and-software",frontMatter:{description:"Understanding the fundamental concepts of hardware and software. Exploring the main components of a computer system.",sidebarTitle:"Hardware and Software"}},{name:"linux-programming",route:"/linux-programming/topics/linux-programming",frontMatter:{description:"Providing a concise introduction to programming in the Linux operating system. Explaining the key aspects of compiling and executing C/C++ code.",sidebarTitle:"Linux Programming"}},{name:"processes",route:"/linux-programming/topics/processes",frontMatter:{description:"Explore the fundamentals of Unix process management. Discover key concepts such as processes, virtual memory, and creation workflows. Master command line arguments and environment variables for efficient process control. Elevate your understanding of Unix systems today.",sidebarTitle:"Processes"}},{name:"producer-consumer",route:"/linux-programming/topics/producer-consumer",frontMatter:{description:"Understand and solve the producer-consumer problem in multi-threaded environments. Learn key concepts, solution strategies with mutexes, semaphores, and conditional variables. Practice writing and optimizing producer-consumer programs.",sidebarTitle:"Producer Consumer"}},{name:"synchronization",route:"/linux-programming/topics/synchronization",frontMatter:{description:"Learn to tackle synchronization problems in multi-threaded environments. Understand race conditions, atomicity, and critical sections. Explore mutexes, semaphores, and spin locks. Practice solving race conditions and optimizing performance.",sidebarTitle:"Synchronization"}},{name:"system-calls",route:"/linux-programming/topics/system-calls",frontMatter:{description:"Understanding the essential aspects of communication between hardware and software. Exploring the functionality exposed by operating systems and the role of System Calls.",sidebarTitle:"System Calls"}},{name:"threads",route:"/linux-programming/topics/threads",frontMatter:{description:"Unlock threading's power with our guide! Learn memory layout, thread essentials, and Pthread library mastery. Practice with hands-on exercises. Start mastering parallelism and concurrency now!",sidebarTitle:"Threads"}}]},{name:"topics",route:"/linux-programming/topics",frontMatter:{sidebarTitle:"Topics"}}]},{name:"operating-systems",route:"/operating-systems",children:[{data:{"*":{display:"visible"},index:"Getting Started",topics:"Topics"}},{name:"index",route:"/operating-systems",frontMatter:{sidebarTitle:"Index"}},{name:"topics",route:"/operating-systems/topics",children:[{data:{introduction:"Introduction"}},{name:"introduction",route:"/operating-systems/topics/introduction",frontMatter:{sidebarTitle:"Introduction"}}]},{name:"topics",route:"/operating-systems/topics",frontMatter:{sidebarTitle:"Topics"}}]}]}}]);