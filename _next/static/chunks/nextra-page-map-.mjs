import meta from "../../../pages/_meta.ts";
import system_programming_meta from "../../../pages/system-programming/_meta.ts";
import system_programming_guides_meta from "../../../pages/system-programming/guides/_meta.ts";
import system_programming_samples_meta from "../../../pages/system-programming/samples/_meta.ts";
import system_programming_tasks_meta from "../../../pages/system-programming/tasks/_meta.ts";
import system_programming_tasks_environment_meta from "../../../pages/system-programming/tasks/environment/_meta.ts";
import system_programming_tasks_file_systems_meta from "../../../pages/system-programming/tasks/file-systems/_meta.ts";
import system_programming_tasks_ipc_meta from "../../../pages/system-programming/tasks/ipc/_meta.ts";
import system_programming_tasks_processes_meta from "../../../pages/system-programming/tasks/processes/_meta.ts";
import system_programming_tasks_threads_meta from "../../../pages/system-programming/tasks/threads/_meta.ts";
import system_programming_topics_meta from "../../../pages/system-programming/topics/_meta.ts";
export const pageMap = [{
  data: meta
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "Home",
    "description": "Welcome to new Learning Portal!"
  }
}, {
  name: "system-programming",
  route: "/system-programming",
  children: [{
    data: system_programming_meta
  }, {
    name: "guides",
    route: "/system-programming/guides",
    children: [{
      data: system_programming_guides_meta
    }, {
      name: "compilation",
      route: "/system-programming/guides/compilation",
      frontMatter: {
        "description": "The set of samples showcases different aspects of the compilation process in the Linux environment using various tools such as gcc, make, cmake, etc.",
        "sidebarTitle": "Compilation"
      }
    }]
  }, {
    name: "guides",
    route: "/system-programming/guides",
    frontMatter: {
      "sidebarTitle": "Guides"
    }
  }, {
    name: "index",
    route: "/system-programming",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "samples",
    route: "/system-programming/samples",
    children: [{
      data: system_programming_samples_meta
    }, {
      name: "bounded-buffer",
      route: "/system-programming/samples/bounded-buffer",
      frontMatter: {
        "sidebarTitle": "Bounded Buffer"
      }
    }, {
      name: "copy-file",
      route: "/system-programming/samples/copy-file",
      frontMatter: {
        "description": "This sample demonstrates how to implement a basic copy program using read and **write functions.",
        "sidebarTitle": "Copy File"
      }
    }, {
      name: "create-process",
      route: "/system-programming/samples/create-process",
      frontMatter: {
        "description": "The sample demonstrates how to create a process using fork() function.",
        "sidebarTitle": "Create Process"
      }
    }, {
      name: "create-thread",
      route: "/system-programming/samples/create-thread",
      frontMatter: {
        "description": "The sample demonstrates how to create a thread using pthread_create() function and wait for its completion.",
        "sidebarTitle": "Create Thread"
      }
    }, {
      name: "detect-holes",
      route: "/system-programming/samples/detect-holes",
      frontMatter: {
        "description": "The sample demonstrates how to detect data and hole segments in the given file.",
        "sidebarTitle": "Detect Holes"
      }
    }, {
      name: "dining-philosophers",
      route: "/system-programming/samples/dining-philosophers",
      frontMatter: {
        "sidebarTitle": "Dining Philosophers"
      }
    }, {
      name: "make-hole",
      route: "/system-programming/samples/make-hole",
      frontMatter: {
        "description": "This sample demonstrates the ability to create a sparse file containing both data segments and holes using lseek function.",
        "sidebarTitle": "Make Hole"
      }
    }, {
      name: "makefile",
      route: "/system-programming/samples/makefile",
      frontMatter: {
        "description": "In this sample, we will compile a program having two modules with Makefile.",
        "sidebarTitle": "Makefile"
      }
    }, {
      name: "open-file",
      route: "/system-programming/samples/open-file",
      frontMatter: {
        "description": "This sample demonstrates the usage of functions open and close.",
        "sidebarTitle": "Open File"
      }
    }, {
      name: "read-file",
      route: "/system-programming/samples/read-file",
      frontMatter: {
        "description": "This sample demonstrates how to read a text file using read() function.",
        "sidebarTitle": "Read File"
      }
    }, {
      name: "redirect-output",
      route: "/system-programming/samples/redirect-output",
      frontMatter: {
        "description": "This sample demonstrates how to redirect standard output and standard error into a file (using dup/dup2) while keeping possibility to write to the console when needed.",
        "sidebarTitle": "Redirect Output"
      }
    }]
  }, {
    name: "samples",
    route: "/system-programming/samples",
    frontMatter: {
      "sidebarTitle": "Samples"
    }
  }, {
    name: "tasks",
    route: "/system-programming/tasks",
    children: [{
      data: system_programming_tasks_meta
    }, {
      name: "environment",
      route: "/system-programming/tasks/environment",
      children: [{
        data: system_programming_tasks_environment_meta
      }, {
        name: "complex-number",
        route: "/system-programming/tasks/environment/complex-number",
        frontMatter: {
          "description": "Write multi-file C++ program consisting of following 3 modules. A class that represents a complex number along with all the basic operations - plus, minus, multiply by a constant, absolute value.",
          "sidebarTitle": "Complex Number"
        }
      }, {
        name: "environment-setup",
        route: "/system-programming/tasks/environment/environment-setup",
        frontMatter: {
          "description": "Install any GNU/Linux distribution on a Virtual or Physical Machine.",
          "sidebarTitle": "Environment Setup"
        }
      }]
    }, {
      name: "environment",
      route: "/system-programming/tasks/environment",
      frontMatter: {
        "sidebarTitle": "Environment"
      }
    }, {
      name: "file-systems",
      route: "/system-programming/tasks/file-systems",
      children: [{
        data: system_programming_tasks_file_systems_meta
      }, {
        name: "copy-file",
        route: "/system-programming/tasks/file-systems/copy-file",
        frontMatter: {
          "description": "Learn to copy files in C++ on Linux with proper error handling. Overwrite destination files effortlessly. Perfect for System Programming beginners.",
          "sidebarTitle": "Copy File"
        }
      }, {
        name: "copy-with-holes",
        route: "/system-programming/tasks/file-systems/copy-with-holes",
        frontMatter: {
          "description": "Master file copying in C++ on Linux with error handling and hole preservation. Overwrite destination files seamlessly and print byte details. Ideal for System Programming enthusiasts.",
          "sidebarTitle": "Copy with Holes"
        }
      }, {
        name: "manual-append",
        route: "/system-programming/tasks/file-systems/manual-append",
        frontMatter: {
          "description": "Your task is to write a program on C/C++ that writes two lines in the files \"first line\" and \"second line\".",
          "sidebarTitle": "Manual Append"
        }
      }, {
        name: "read-file",
        route: "/system-programming/tasks/file-systems/read-file",
        frontMatter: {
          "description": "You need to implement a program that does the same thing as the cat command in the Linux.",
          "sidebarTitle": "Read File"
        }
      }, {
        name: "redirect-cin",
        route: "/system-programming/tasks/file-systems/redirect-cin",
        frontMatter: {
          "description": "By default, program gets standard input waiting for the keyboard input. Your task is to make any program to read input from the file instead of waiting for the keyboard input without changing usages of std::cin or scanf.",
          "sidebarTitle": "Redirect Cin"
        }
      }, {
        name: "secure-file-deletion",
        route: "/system-programming/tasks/file-systems/secure-file-deletion",
        frontMatter: {
          "description": "Your task is to implement a C++ program that deletes the file from the filesystem along with its content by replacing every byte in the files with '\\0' character.",
          "sidebarTitle": "Secure File Deletion"
        }
      }]
    }, {
      name: "file-systems",
      route: "/system-programming/tasks/file-systems",
      frontMatter: {
        "sidebarTitle": "File Systems"
      }
    }, {
      name: "ipc",
      route: "/system-programming/tasks/ipc",
      children: [{
        data: system_programming_tasks_ipc_meta
      }, {
        name: "prime-calculator",
        route: "/system-programming/tasks/ipc/prime-calculator",
        frontMatter: {
          "description": "Discover C++ interprocess communication on Linux: create child processes, pass data via anonymous pipes, and calculate prime numbers efficiently. Perfect for mastering advanced System Programming techniques.\n",
          "sidebarTitle": "Prime Calculator"
        }
      }, {
        name: "shared-array",
        route: "/system-programming/tasks/ipc/shared-array",
        frontMatter: {
          "description": "Unlock interprocess communication in C++ on Linux with 'shared_array' class. Easily share integer arrays between processes, initialize with custom names and sizes, and seamlessly access elements with operator []. Perfect for implementing cross-process synchronization using semaphores.\n",
          "sidebarTitle": "Shared Array"
        }
      }, {
        name: "signal-echo",
        route: "/system-programming/tasks/ipc/signal-echo",
        frontMatter: {
          "description": "Enhance your C++ programming skills on Linux by creating a program that prints its PID and sets up a signal handler for SIGUSR1. Explore handling custom signals effectively, printing sender process details, and accessing register values. Perfect for understanding signal handling and process communication in C++ on Linux.",
          "sidebarTitle": "Signal Echo"
        }
      }]
    }, {
      name: "ipc",
      route: "/system-programming/tasks/ipc",
      frontMatter: {
        "sidebarTitle": "Ipc"
      }
    }, {
      name: "processes",
      route: "/system-programming/tasks/processes",
      children: [{
        data: system_programming_tasks_processes_meta
      }, {
        name: "do-command",
        route: "/system-programming/tasks/processes/do-command",
        frontMatter: {
          "description": "Your task is to implement a C++ program that accepts a command name and command arguments with command-line arguments and executes it in a new process.",
          "sidebarTitle": "Do Command"
        }
      }, {
        name: "interactive-shell",
        route: "/system-programming/tasks/processes/interactive-shell",
        frontMatter: {
          "description": "Develop a versatile interactive shell in C++, empowering users to execute commands seamlessly. This program features an infinite loop, spawning new processes for each entered command. Enhance usability by temporarily adding the current directory to the PATH variable for every new process. Additionally, redirect output streams to PID.log files for commands starting with 'silent'. Perfect for mastering shell programming and process management in C++.",
          "sidebarTitle": "Interactive Shell"
        }
      }]
    }, {
      name: "processes",
      route: "/system-programming/tasks/processes",
      frontMatter: {
        "sidebarTitle": "Processes"
      }
    }, {
      name: "threads",
      route: "/system-programming/tasks/threads",
      children: [{
        data: system_programming_tasks_threads_meta
      }, {
        name: "array-sum",
        route: "/system-programming/tasks/threads/array-sum",
        frontMatter: {
          "description": "Efficiently sum large arrays in C++ with and without multi-threading. Customize array size and thread count via command line. Experience the performance difference firsthand.",
          "sidebarTitle": "Array Sum"
        }
      }, {
        name: "thread-pool",
        route: "/system-programming/tasks/threads/thread-pool",
        frontMatter: {
          "description": "Build a C++ thread pool library, 'parallel_scheduler', with customizable capacity. Enqueue functions for efficient execution and demonstrate usage in a demo application. Compile as a shared library for easy integration.",
          "sidebarTitle": "Thread Pool"
        }
      }]
    }, {
      name: "threads",
      route: "/system-programming/tasks/threads",
      frontMatter: {
        "sidebarTitle": "Threads"
      }
    }]
  }, {
    name: "tasks",
    route: "/system-programming/tasks",
    frontMatter: {
      "sidebarTitle": "Tasks"
    }
  }, {
    name: "topics",
    route: "/system-programming/topics",
    children: [{
      data: system_programming_topics_meta
    }, {
      name: "advanced-io",
      route: "/system-programming/topics/advanced-io",
      frontMatter: {
        "description": "Advanced file I/O in Linux — working with file descriptors, duplication, seeking, sparse files, and file control operations.",
        "sidebarTitle": "Advanced Io"
      }
    }, {
      name: "basic-io",
      route: "/system-programming/topics/basic-io",
      frontMatter: {
        "description": "Introduction to system calls, kernel-user interaction, error handling, and file I/O via file descriptors in Linux.",
        "sidebarTitle": "Basic Io"
      }
    }, {
      name: "classical-sync-problems",
      route: "/system-programming/topics/classical-sync-problems",
      frontMatter: {
        "description": "Exploration of classical synchronization problems including Producer–Consumer, Readers–Writers, Dining Philosophers, and others, applying mutexes, semaphores, and condition variables.",
        "sidebarTitle": "Classical Sync Problems"
      }
    }, {
      name: "compilation",
      route: "/system-programming/topics/compilation",
      frontMatter: {
        "description": "Learn the full compilation workflow in Linux — from preprocessing to linking — using a simple Hello World program. Explore the role of gcc, make, and Makefiles in automating builds.",
        "sidebarTitle": "Compilation"
      }
    }, {
      name: "intro",
      route: "/system-programming/topics/intro",
      frontMatter: {
        "description": "Learn the fundamentals of operating systems, the Linux kernel, GNU/Linux distributions, and basic shell usage. Set up your Linux environment and development tools for system programming.",
        "sidebarTitle": "Intro"
      }
    }, {
      name: "pipes",
      route: "/system-programming/topics/pipes",
      frontMatter: {
        "description": "Introduction to pipes and FIFOs in Unix/Linux — understanding anonymous pipes for parent-child communication and named pipes (FIFOs) for unrelated process IPC.",
        "sidebarTitle": "Pipes"
      }
    }, {
      name: "processes",
      route: "/system-programming/topics/processes",
      frontMatter: {
        "description": "Introduction to processes in Linux — process model, virtual memory basics, and core system calls for process creation and management.",
        "sidebarTitle": "Processes"
      }
    }, {
      name: "shared-memory",
      route: "/system-programming/topics/shared-memory",
      frontMatter: {
        "description": "Introduction to shared memory in Unix/Linux — understanding memory-mapped I/O, POSIX shared memory, and System V shared memory for efficient inter-process communication.",
        "sidebarTitle": "Shared Memory"
      }
    }, {
      name: "signals",
      route: "/system-programming/topics/signals",
      frontMatter: {
        "description": "Introduction to signals in Unix/Linux — understanding asynchronous event notification, signal handling, and sending signals for inter-process communication.",
        "sidebarTitle": "Signals"
      }
    }, {
      name: "synchronization",
      route: "/system-programming/topics/synchronization",
      frontMatter: {
        "description": "Understanding synchronization problems in concurrent programming. Introduction to race conditions, critical sections, and main synchronization primitives in POSIX systems.",
        "sidebarTitle": "Synchronization"
      }
    }, {
      name: "threads",
      route: "/system-programming/topics/threads",
      frontMatter: {
        "description": "Introduction to multithreading in Linux using POSIX Threads (pthreads). Understanding thread creation, management, and synchronization.",
        "sidebarTitle": "Threads"
      }
    }, {
      name: "unix-fs",
      route: "/system-programming/topics/unix-fs",
      frontMatter: {
        "description": "Explore the Linux shell in depth and learn how files, directories, permissions, users, and links are organized in a Unix-like system.",
        "sidebarTitle": "Unix Fs"
      }
    }]
  }, {
    name: "topics",
    route: "/system-programming/topics",
    frontMatter: {
      "sidebarTitle": "Topics"
    }
  }]
}];