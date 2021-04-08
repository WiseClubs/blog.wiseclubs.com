-Blog for wiseclubs.com

#### Getting Started
Created from vercel starter template using following command. 
`> npx create-next-app . --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"`

#### Run the development server
To start blog.wiseclubs.com on local. It will start server on `0.0.0.0:3000`, url: `http://localhost:3000`
`> /Users/blog.wiseclubs.com`
`npm run dev`

Inside that directory, you can run several commands:
1. Starts the development server. 
`npm run dev` 
2. Builds the app for production.
`npm run build`
3. Runs the built app in production mode.
`npm start`

#### Introduced Element-React
- https://elemefe.github.io/element-react/index#/en-US/quick-start
> npm i element-react --save

> npm install element-theme-default --save

> npm install --save next-transpile-modules

  `crate next.config.js` and add following line of code
  `const withTM = require('next-transpile-modules')(['element-react']);`
  `module.exports = withTM();`

> npm i -S @babel/runtime

> npm install --save babel-runtime --save

> npm i -D react-hot-loader@next

> Import style globally `pages/_app.js`
  `import 'element-theme-default'`

> Import button `[id].js`

  `import dynamic from 'next/dynamic'`
  `const Button = dynamic(() => import('element-react/dist/npm/es6/src/button'))`

#### Introduced React Context Store
Use patttern from this repo - https://github.com/JoseZunigaDyehs/boilerplate-react-hooks

#### Introduced Save 
Saving last scrolled value - https://stackoverflow.com/questions/64052148/how-to-change-scroll-behavior-while-going-back-in-next-js