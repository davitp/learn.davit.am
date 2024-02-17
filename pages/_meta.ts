export default {
  index: {
    title: "Home",
    type: "page",
    display: "hidden",
    theme: {
      layout: "raw"
    }
  },
  'linux-programming': {
    display: 'hidden'
  },
  courses: {
    title: 'Courses',
    type: 'menu',
    items: {
      'linux-programming': {
        title: 'Linux Programming',
        href: '/linux-programming'
      }
    }
  }
}
