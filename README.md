# calculator
implementation of https://www.youtube.com/watch?v=DgRrrOt0Vr8. A simple calculator using React

# how did I deploy using gh-pages

## npm install gh-pages --save-dev
This way I install npm package which will deploy my project into GHpages
## added   "homepage": "https://mesuhailpm.github.io/calculator",
into my package.json file
## added "predeply":"npm run build",
    "deploy": "gh-pages -d build",
  into the scripts of my pakage.json
## ran npm run build 
  which create a production build
## ran npm run deploy 
which will push the build files into gh-pages branch in my remote repository
## In the pages section of my Github settings make sure to select the source as the gh-pages branch
  
