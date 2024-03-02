import meta from "../../../pages/_meta.ts";
import linux_programming_meta from "../../../pages/linux-programming/_meta.ts";
import linux_programming_guides_meta from "../../../pages/linux-programming/guides/_meta.ts";
import linux_programming_tasks_meta from "../../../pages/linux-programming/tasks/_meta.ts";
import linux_programming_topics_meta from "../../../pages/linux-programming/topics/_meta.ts";
import operating_systems_meta from "../../../pages/operating-systems/_meta.ts";
import operating_systems_topics_meta from "../../../pages/operating-systems/topics/_meta.ts";
export const pageMap = [{
  data: meta
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "Index",
    "description": "Description"
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
    name: "tasks",
    route: "/linux-programming/tasks",
    children: [{
      data: linux_programming_tasks_meta
    }, {
      name: "array-sum",
      route: "/linux-programming/tasks/array-sum",
      frontMatter: {
        "sidebarTitle": "Array Sum"
      }
    }, {
      name: "complex-number",
      route: "/linux-programming/tasks/complex-number",
      frontMatter: {
        "sidebarTitle": "Complex Number"
      }
    }, {
      name: "copy-file",
      route: "/linux-programming/tasks/copy-file",
      frontMatter: {
        "sidebarTitle": "Copy File"
      }
    }, {
      name: "copy-with-holes",
      route: "/linux-programming/tasks/copy-with-holes",
      frontMatter: {
        "sidebarTitle": "Copy with Holes"
      }
    }, {
      name: "do-command",
      route: "/linux-programming/tasks/do-command",
      frontMatter: {
        "sidebarTitle": "Do Command"
      }
    }, {
      name: "environment-setup",
      route: "/linux-programming/tasks/environment-setup",
      frontMatter: {
        "sidebarTitle": "Environment Setup"
      }
    }, {
      name: "interactive-shell",
      route: "/linux-programming/tasks/interactive-shell",
      frontMatter: {
        "sidebarTitle": "Interactive Shell"
      }
    }, {
      name: "manual-append",
      route: "/linux-programming/tasks/manual-append",
      frontMatter: {
        "sidebarTitle": "Manual Append"
      }
    }, {
      name: "prime-calculator",
      route: "/linux-programming/tasks/prime-calculator",
      frontMatter: {
        "sidebarTitle": "Prime Calculator"
      }
    }, {
      name: "read-file",
      route: "/linux-programming/tasks/read-file",
      frontMatter: {
        "sidebarTitle": "Read File"
      }
    }, {
      name: "redirect-cin",
      route: "/linux-programming/tasks/redirect-cin",
      frontMatter: {
        "sidebarTitle": "Redirect Cin"
      }
    }, {
      name: "secure-file-deletion",
      route: "/linux-programming/tasks/secure-file-deletion",
      frontMatter: {
        "sidebarTitle": "Secure File Deletion"
      }
    }, {
      name: "shared-array",
      route: "/linux-programming/tasks/shared-array",
      frontMatter: {
        "sidebarTitle": "Shared Array"
      }
    }, {
      name: "signal-echo",
      route: "/linux-programming/tasks/signal-echo",
      frontMatter: {
        "sidebarTitle": "Signal Echo"
      }
    }, {
      name: "thread-pool",
      route: "/linux-programming/tasks/thread-pool",
      frontMatter: {
        "sidebarTitle": "Thread Pool"
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