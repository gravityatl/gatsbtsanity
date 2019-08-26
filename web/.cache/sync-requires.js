const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/katie/Documents/GitHub/gatsbysanity/web/src/templates/blog-post.js"))),
  "component---src-templates-project-js": hot(preferDefault(require("/Users/katie/Documents/GitHub/gatsbysanity/web/src/templates/project.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/katie/Documents/GitHub/gatsbysanity/web/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/katie/Documents/GitHub/gatsbysanity/web/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/katie/Documents/GitHub/gatsbysanity/web/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/katie/Documents/GitHub/gatsbysanity/web/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/katie/Documents/GitHub/gatsbysanity/web/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/katie/Documents/GitHub/gatsbysanity/web/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/katie/Documents/GitHub/gatsbysanity/web/src/pages/projects.js")))
}

