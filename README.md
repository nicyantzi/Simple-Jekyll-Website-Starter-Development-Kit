Personal Website Starter

Project Tools
-Pug
-Sass
-Gulp
-BrowserSync
-Jeckyll

This is a starter package to build you own Jekyll website. This setup uses SASS and pug for Preprocessing Languages for CSS and HTML respectively.

Various Notes to help get started.
- _site is the local development version of the website that will be used. When the site is published using github, index.html and the css files found within assets will be used. 
- /_pugfiles are for new pug files, once they have been converted using gulp-pug they are output to /_includes
- These new html files can be inlcuded into index.html found in the root folder.
- Inside of the assets folder there are folders for the development area for CSS/SASS/SCSS within /css. There are also folders /images and /js for pictures and javascript files.
- The magic happens within gulpfile.js. SASS and Pug are converted and Autoprefixer is also used. Browser-Sync is used in so that any changes that are saved are automatically updated in the browser.
- package.json contains the project description as well as all of the developer dependencies. When you first use this package, you will have to set up these dependencies.
- You will need to install gulp and the other dependencies found in package.json for the current setup to function.
