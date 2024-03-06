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
        "sidebarTitle": "Copy File"
      }
    }, {
      name: "create-process",
      route: "/linux-programming/samples/create-process",
      frontMatter: {
        "sidebarTitle": "Create Process"
      }
    }, {
      name: "create-thread",
      route: "/linux-programming/samples/create-thread",
      frontMatter: {
        "sidebarTitle": "Create Thread"
      }
    }, {
      name: "detect-holes",
      route: "/linux-programming/samples/detect-holes",
      frontMatter: {
        "sidebarTitle": "Detect Holes"
      }
    }, {
      name: "make-hole",
      route: "/linux-programming/samples/make-hole",
      frontMatter: {
        "sidebarTitle": "Make Hole"
      }
    }, {
      name: "makefile",
      route: "/linux-programming/samples/makefile",
      frontMatter: {
        "sidebarTitle": "Makefile"
      }
    }, {
      name: "open-file",
      route: "/linux-programming/samples/open-file",
      frontMatter: {
        "sidebarTitle": "Open File"
      }
    }, {
      name: "read-file",
      route: "/linux-programming/samples/read-file",
      frontMatter: {
        "sidebarTitle": "Read File"
      }
    }, {
      name: "redirect-output",
      route: "/linux-programming/samples/redirect-output",
      frontMatter: {
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
          "sidebarTitle": "Complex Number"
        }
      }, {
        name: "environment-setup",
        route: "/linux-programming/tasks/environment/environment-setup",
        frontMatter: {
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
          "sidebarTitle": "Copy File"
        }
      }, {
        name: "copy-with-holes",
        route: "/linux-programming/tasks/file-systems/copy-with-holes",
        frontMatter: {
          "sidebarTitle": "Copy with Holes"
        }
      }, {
        name: "manual-append",
        route: "/linux-programming/tasks/file-systems/manual-append",
        frontMatter: {
          "sidebarTitle": "Manual Append"
        }
      }, {
        name: "read-file",
        route: "/linux-programming/tasks/file-systems/read-file",
        frontMatter: {
          "sidebarTitle": "Read File"
        }
      }, {
        name: "redirect-cin",
        route: "/linux-programming/tasks/file-systems/redirect-cin",
        frontMatter: {
          "sidebarTitle": "Redirect Cin"
        }
      }, {
        name: "secure-file-deletion",
        route: "/linux-programming/tasks/file-systems/secure-file-deletion",
        frontMatter: {
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
          "sidebarTitle": "Prime Calculator"
        }
      }, {
        name: "shared-array",
        route: "/linux-programming/tasks/ipc/shared-array",
        frontMatter: {
          "sidebarTitle": "Shared Array"
        }
      }, {
        name: "signal-echo",
        route: "/linux-programming/tasks/ipc/signal-echo",
        frontMatter: {
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
          "sidebarTitle": "Do Command"
        }
      }, {
        name: "interactive-shell",
        route: "/linux-programming/tasks/processes/interactive-shell",
        frontMatter: {
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
          "sidebarTitle": "Array Sum"
        }
      }, {
        name: "thread-pool",
        route: "/linux-programming/tasks/threads/thread-pool",
        frontMatter: {
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
      name: "hardware-and-software",
      route: "/linux-programming/topics/hardware-and-software",
      frontMatter: {
        "sidebarTitle": "Hardware and Software"
      }
    }, {
      name: "system-calls",
      route: "/linux-programming/topics/system-calls",
      frontMatter: {
        "sidebarTitle": "System Calls"
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