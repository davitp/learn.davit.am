
const isProduction = process.env.NODE_ENV === 'production';

const domain = isProduction ? 'learn.davit.am' : 'localhost:3000';
const protocol = isProduction ? 'https://' : 'http://';

export default {
    domain,
    website: `${protocol}${domain}/`,
    github: 'https://github.com/davitp/learn.davit.am/'
}