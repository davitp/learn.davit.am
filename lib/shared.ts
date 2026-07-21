export const domain = 'davit.am';
export const subdomain = 'learn';
export const siteUrl = `https://${subdomain}.${domain}`; 
export const docsRoute = '/';

export const shell = {
  user: 'stranger',
  host: domain, 
  home: '~',
  dir: subdomain, 
};
export const shellPath = `${shell.home}/${shell.dir}`; 

export const appName = '~/learn';

export const author = {
  name: 'Davit Petrosyan',
  url: `https://${domain}`, 
  linkedin: 'https://www.linkedin.com/in/davitp/',
};

export const gitConfig = {
  user: 'davitp',
  repo: 'learn.davit.am',
  branch: 'main',
};

export const gaId = 'G-11WJEP8KLR';
export const slidesBoard = 'uXjVJKv1fww=';

export const courses = [
  {
    slug: 'system-programming',
    title: 'Systems Programming',
    description: 'Processes, threads, IPC, file systems and networking.',
  },
];
