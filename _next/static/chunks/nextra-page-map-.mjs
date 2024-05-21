import meta from "../../../pages/_meta.ts";
import linux_programming_meta from "../../../pages/linux-programming/_meta.ts";
import linux_programming_guides_meta from "../../../pages/linux-programming/guides/_meta.ts";
import linux_programming_samples_meta from "../../../pages/linux-programming/samples/_meta.ts";
import linux_programming_tasks_meta from "../../../pages/linux-programming/tasks/_meta.ts";
import linux_programming_tasks_environment_meta from "../../../pages/linux-programming/tasks/environment/_meta.ts";
import linux_programming_tasks_file_systems_meta from "../../../pages/linux-programming/tasks/file-systems/_meta.ts";
import linux_programming_tasks_ipc_meta from "../../../pages/linux-programming/tasks/ipc/_meta.ts";
import linux_programming_tasks_processes_meta from "../../../pages/linux-programming/tasks/processes/_meta.ts";
import linux_programming_tasks_threads_meta from "../../../pages/linux-programming/tasks/threads/_meta.ts";
import linux_programming_topics_meta from "../../../pages/linux-programming/topics/_meta.ts";
import operating_systems_meta from "../../../pages/operating-systems/_meta.ts";
import operating_systems_topics_meta from "../../../pages/operating-systems/topics/_meta.ts";
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
  name: "linux-programming",
  route: "/linux-programming",
  children: [{
    data: linux_programming_meta
  }, {
    name: "guides",
    route: "/linux-programming/guides",
    children: [{
      data: linux_programming_guides_meta
    }, {
      name: "compilation",
      route: "/linux-programming/guides/compilation",
      frontMatter: {
        "description": "The set of samples showcases different aspects of the compilation process in the Linux environment using various tools such as gcc, make, cmake, etc.",
        "sidebarTitle": "Compilation"
      }
    }]
  }, {
    name: "guides",
    route: "/linux-programming/guides",
    frontMatter: {
      "sidebarTitle": "Guides"
    }
  }, {
    name: "index",
    route: "/linux-programming",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "samples",
    route: "/linux-programming/samples",
    children: [{
      data: linux_programming_samples_meta
    }, {
      name: "copy-file",
      route: "/linux-programming/samples/copy-file",
      frontMatter: {
        "description": "This sample demonstrates how to implement a basic copy program using read and **write functions.",
        "sidebarTitle": "Copy File"
      }
    }, {
      name: "create-process",
      route: "/linux-programming/samples/create-process",
      frontMatter: {
        "description": "The sample demonstrates how to create a process using fork() function.",
        "sidebarTitle": "Create Process"
      }
    }, {
      name: "create-thread",
      route: "/linux-programming/samples/create-thread",
      frontMatter: {
        "description": "The sample demonstrates how to create a thread using pthread_create() function and wait for its completion.",
        "sidebarTitle": "Create Thread"
      }
    }, {
      name: "detect-holes",
      route: "/linux-programming/samples/detect-holes",
      frontMatter: {
        "description": "The sample demonstrates how to detect data and hole segments in the given file.",
        "sidebarTitle": "Detect Holes"
      }
    }, {
      name: "make-hole",
      route: "/linux-programming/samples/make-hole",
      frontMatter: {
        "description": "This sample demonstrates the ability to create a sparse file containing both data segments and holes using lseek function.",
        "sidebarTitle": "Make Hole"
      }
    }, {
      name: "makefile",
      route: "/linux-programming/samples/makefile",
      frontMatter: {
        "description": "In this sample, we will compile a program having two modules with Makefile.",
        "sidebarTitle": "Makefile"
      }
    }, {
      name: "open-file",
      route: "/linux-programming/samples/open-file",
      frontMatter: {
        "description": "This sample demonstrates the usage of functions open and close.",
        "sidebarTitle": "Open File"
      }
    }, {
      name: "read-file",
      route: "/linux-programming/samples/read-file",
      frontMatter: {
        "description": "This sample demonstrates how to read a text file using read() function.",
        "sidebarTitle": "Read File"
      }
    }, {
      name: "redirect-output",
      route: "/linux-programming/samples/redirect-output",
      frontMatter: {
        "description": "This sample demonstrates how to redirect standard output and standard error into a file (using dup/dup2) while keeping possibility to write to the console when needed.",
        "sidebarTitle": "Redirect Output"
      }
    }]
  }, {
    name: "samples",
    route: "/linux-programming/samples",
    frontMatter: {
      "sidebarTitle": "Samples"
    }
  }, {
    name: "tasks",
    route: "/linux-programming/tasks",
    children: [{
      data: linux_programming_tasks_meta
    }, {
      name: "environment",
      route: "/linux-programming/tasks/environment",
      children: [{
        data: linux_programming_tasks_environment_meta
      }, {
        name: "complex-number",
        route: "/linux-programming/tasks/environment/complex-number",
        frontMatter: {
          "description": "Write multi-file C++ program consisting of following 3 modules. A class that represents a complex number along with all the basic operations - plus, minus, multiply by a constant, absolute value.",
          "sidebarTitle": "Complex Number"
        }
      }, {
        name: "environment-setup",
        route: "/linux-programming/tasks/environment/environment-setup",
        frontMatter: {
          "description": "Install any GNU/Linux distribution on a Virtual or Physical Machine.",
          "sidebarTitle": "Environment Setup"
        }
      }]
    }, {
      name: "environment",
      route: "/linux-programming/tasks/environment",
      frontMatter: {
        "sidebarTitle": "Environment"
      }
    }, {
      name: "file-systems",
      route: "/linux-programming/tasks/file-systems",
      children: [{
        data: linux_programming_tasks_file_systems_meta
      }, {
        name: "copy-file",
        route: "/linux-programming/tasks/file-systems/copy-file",
        frontMatter: {
          "description": "Learn to copy files in C++ on Linux with proper error handling. Overwrite destination files effortlessly. Perfect for Linux programming beginners.",
          "sidebarTitle": "Copy File"
        }
      }, {
        name: "copy-with-holes",
        route: "/linux-programming/tasks/file-systems/copy-with-holes",
        frontMatter: {
          "description": "Master file copying in C++ on Linux with error handling and hole preservation. Overwrite destination files seamlessly and print byte details. Ideal for Linux programming enthusiasts.",
          "sidebarTitle": "Copy with Holes"
        }
      }, {
        name: "manual-append",
        route: "/linux-programming/tasks/file-systems/manual-append",
        frontMatter: {
          "description": "Your task is to write a program on C/C++ that writes two lines in the files \"first line\" and \"second line\".",
          "sidebarTitle": "Manual Append"
        }
      }, {
        name: "read-file",
        route: "/linux-programming/tasks/file-systems/read-file",
        frontMatter: {
          "description": "You need to implement a program that does the same thing as the cat command in the Linux.",
          "sidebarTitle": "Read File"
        }
      }, {
        name: "redirect-cin",
        route: "/linux-programming/tasks/file-systems/redirect-cin",
        frontMatter: {
          "description": "By default, program gets standard input waiting for the keyboard input. Your task is to make any program to read input from the file instead of waiting for the keyboard input without changing usages of std::cin or scanf.",
          "sidebarTitle": "Redirect Cin"
        }
      }, {
        name: "secure-file-deletion",
        route: "/linux-programming/tasks/file-systems/secure-file-deletion",
        frontMatter: {
          "description": "Your task is to implement a C++ program that deletes the file from the filesystem along with its content by replacing every byte in the files with '\\0' character.",
          "sidebarTitle": "Secure File Deletion"
        }
      }]
    }, {
      name: "file-systems",
      route: "/linux-programming/tasks/file-systems",
      frontMatter: {
        "sidebarTitle": "File Systems"
      }
    }, {
      name: "ipc",
      route: "/linux-programming/tasks/ipc",
      children: [{
        data: linux_programming_tasks_ipc_meta
      }, {
        name: "prime-calculator",
        route: "/linux-programming/tasks/ipc/prime-calculator",
        frontMatter: {
          "description": "Discover C++ interprocess communication on Linux: create child processes, pass data via anonymous pipes, and calculate prime numbers efficiently. Perfect for mastering advanced Linux programming techniques.\n",
          "sidebarTitle": "Prime Calculator"
        }
      }, {
        name: "shared-array",
        route: "/linux-programming/tasks/ipc/shared-array",
        frontMatter: {
          "description": "Unlock interprocess communication in C++ on Linux with 'shared_array' class. Easily share integer arrays between processes, initialize with custom names and sizes, and seamlessly access elements with operator []. Perfect for implementing cross-process synchronization using semaphores.\n",
          "sidebarTitle": "Shared Array"
        }
      }, {
        name: "signal-echo",
        route: "/linux-programming/tasks/ipc/signal-echo",
        frontMatter: {
          "description": "Enhance your C++ programming skills on Linux by creating a program that prints its PID and sets up a signal handler for SIGUSR1. Explore handling custom signals effectively, printing sender process details, and accessing register values. Perfect for understanding signal handling and process communication in C++ on Linux.",
          "sidebarTitle": "Signal Echo"
        }
      }]
    }, {
      name: "ipc",
      route: "/linux-programming/tasks/ipc",
      frontMatter: {
        "sidebarTitle": "Ipc"
      }
    }, {
      name: "processes",
      route: "/linux-programming/tasks/processes",
      children: [{
        data: linux_programming_tasks_processes_meta
      }, {
        name: "do-command",
        route: "/linux-programming/tasks/processes/do-command",
        frontMatter: {
          "description": "Your task is to implement a C++ program that accepts a command name and command arguments with command-line arguments and executes it in a new process.",
          "sidebarTitle": "Do Command"
        }
      }, {
        name: "interactive-shell",
        route: "/linux-programming/tasks/processes/interactive-shell",
        frontMatter: {
          "description": "Develop a versatile interactive shell in C++, empowering users to execute commands seamlessly. This program features an infinite loop, spawning new processes for each entered command. Enhance usability by temporarily adding the current directory to the PATH variable for every new process. Additionally, redirect output streams to PID.log files for commands starting with 'silent'. Perfect for mastering shell programming and process management in C++.",
          "sidebarTitle": "Interactive Shell"
        }
      }]
    }, {
      name: "processes",
      route: "/linux-programming/tasks/processes",
      frontMatter: {
        "sidebarTitle": "Processes"
      }
    }, {
      name: "threads",
      route: "/linux-programming/tasks/threads",
      children: [{
        data: linux_programming_tasks_threads_meta
      }, {
        name: "array-sum",
        route: "/linux-programming/tasks/threads/array-sum",
        frontMatter: {
          "description": "Efficiently sum large arrays in C++ with and without multi-threading. Customize array size and thread count via command line. Experience the performance difference firsthand.",
          "sidebarTitle": "Array Sum"
        }
      }, {
        name: "thread-pool",
        route: "/linux-programming/tasks/threads/thread-pool",
        frontMatter: {
          "description": "Build a C++ thread pool library, 'parallel_scheduler', with customizable capacity. Enqueue functions for efficient execution and demonstrate usage in a demo application. Compile as a shared library for easy integration.",
          "sidebarTitle": "Thread Pool"
        }
      }]
    }, {
      name: "threads",
      route: "/linux-programming/tasks/threads",
      frontMatter: {
        "sidebarTitle": "Threads"
      }
    }]
  }, {
    name: "tasks",
    route: "/linux-programming/tasks",
    frontMatter: {
      "sidebarTitle": "Tasks"
    }
  }, {
    name: "topics",
    route: "/linux-programming/topics",
    children: [{
      data: linux_programming_topics_meta
    }, {
      name: "advanced-input-output",
      route: "/linux-programming/topics/advanced-input-output",
      frontMatter: {
        "description": "Exploring more advanced functionalities provided by the File Systems API for file manipulations. Understanding concepts such as file descriptor duplication and granular control over file descriptors during file operations.",
        "sidebarTitle": "Advanced Input Output"
      }
    }, {
      name: "file-systems-api",
      route: "/linux-programming/topics/file-systems-api",
      frontMatter: {
        "description": "Providing a basic understanding of file abstractions in the API. Explaining the concept of file descriptors and their role in file operations.",
        "sidebarTitle": "File Systems API"
      }
    }, {
      name: "file-systems-overview",
      route: "/linux-programming/topics/file-systems-overview",
      frontMatter: {
        "description": "Understanding the fundamental concepts of hardware and software. Exploring the main components of a computer system.",
        "sidebarTitle": "File Systems Overview"
      }
    }, {
      name: "hardware-and-software",
      route: "/linux-programming/topics/hardware-and-software",
      frontMatter: {
        "description": "Understanding the fundamental concepts of hardware and software. Exploring the main components of a computer system.",
        "sidebarTitle": "Hardware and Software"
      }
    }, {
      name: "linux-programming",
      route: "/linux-programming/topics/linux-programming",
      frontMatter: {
        "description": "Providing a concise introduction to programming in the Linux operating system. Explaining the key aspects of compiling and executing C/C++ code.",
        "sidebarTitle": "Linux Programming"
      }
    }, {
      name: "processes",
      route: "/linux-programming/topics/processes",
      frontMatter: {
        "description": "Explore the fundamentals of Unix process management. Discover key concepts such as processes, virtual memory, and creation workflows. Master command line arguments and environment variables for efficient process control. Elevate your understanding of Unix systems today.",
        "sidebarTitle": "Processes"
      }
    }, {
      name: "producer-consumer",
      route: "/linux-programming/topics/producer-consumer",
      frontMatter: {
        "description": "Understand and solve the producer-consumer problem in multi-threaded environments. Learn key concepts, solution strategies with mutexes, semaphores, and conditional variables. Practice writing and optimizing producer-consumer programs.",
        "sidebarTitle": "Producer Consumer"
      }
    }, {
      name: "synchronization",
      route: "/linux-programming/topics/synchronization",
      frontMatter: {
        "description": "Learn to tackle synchronization problems in multi-threaded environments. Understand race conditions, atomicity, and critical sections. Explore mutexes, semaphores, and spin locks. Practice solving race conditions and optimizing performance.",
        "sidebarTitle": "Synchronization"
      }
    }, {
      name: "system-calls",
      route: "/linux-programming/topics/system-calls",
      frontMatter: {
        "description": "Understanding the essential aspects of communication between hardware and software. Exploring the functionality exposed by operating systems and the role of System Calls.",
        "sidebarTitle": "System Calls"
      }
    }, {
      name: "threads",
      route: "/linux-programming/topics/threads",
      frontMatter: {
        "description": "Unlock threading's power with our guide! Learn memory layout, thread essentials, and Pthread library mastery. Practice with hands-on exercises. Start mastering parallelism and concurrency now!",
        "sidebarTitle": "Threads"
      }
    }]
  }, {
    name: "topics",
    route: "/linux-programming/topics",
    frontMatter: {
      "sidebarTitle": "Topics"
    }
  }]
}, {
  name: "operating-systems",
  route: "/operating-systems",
  children: [{
    data: operating_systems_meta
  }, {
    name: "index",
    route: "/operating-systems",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "topics",
    route: "/operating-systems/topics",
    children: [{
      data: operating_systems_topics_meta
    }, {
      name: "introduction",
      route: "/operating-systems/topics/introduction",
      frontMatter: {
        "sidebarTitle": "Introduction"
      }
    }]
  }, {
    name: "topics",
    route: "/operating-systems/topics",
    frontMatter: {
      "sidebarTitle": "Topics"
    }
  }]
}];