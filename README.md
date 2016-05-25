# rxduce [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Work in progress...

It's another *(**as usual in Front-end**)* simple approach to play with [Redux](http://redux.js.org/) on top of [RxJS](https://github.com/Reactive-Extensions/RxJS) and match with a React application.

## Objective
Right now it's only the typical counter example... but the objective is: create a **API** for binding RxJS with React in the Redux way, creating connect, container, bindActions, etc...

## Motivation
**rxduce** is trying to find *the way of handling the state of a container with __Async-Data-Happening-All-The-Time__* with the simplicity of **Redux** and maintain the [3 Redux principles](http://redux.js.org/docs/introduction/ThreePrinciples.html) with creating the State as observables, be able to do observable operations with this State and match with actions.

## Run
```bash
git clone https://github.com/davesnx/Rxduce

cd counter
npm install
npm start

open http://localhost:8080/
```

## Inspiration
- Thanks to [@jas-chen](https://github.com/jas-chen) for his two great projects: [react-reactive-class](https://github.com/jas-chen/react-reactive-class) [thisless-react](https://github.com/jas-chen/thisless-react)
- Thanks to [@chetcorcos](https://medium.com/@chetcorcos/elmish-functional-programming-in-javascript-50995f1d4b9e) for this easy-to-read article about Functional Programing
- Thanks to [Cycle.js](http://cycle.js.org/) for mainly the concepts

## License
MIT
