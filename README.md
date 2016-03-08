# rxduce [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Work in progress...

It's another *(**as usual in Front-end**)* simple approach to implement [Redux](http://redux.js.org/) on top of [RxJS](https://github.com/Reactive-Extensions/RxJS) and create a [Reactive](http://reactivex.io/) React application.

## Values
Right now it's only the typical counter example... but the objective is:
- create a **API** for binding RxJS with React in the Redux way
- define new concepts like **events$**, that match more with Reactive Programing or update
- create a **ReactiveComponent** implementing [rx-react](https://github.com/fdecampredon/rx-react) and [react-reactive-class](https://github.com/jas-chen/react-reactive-class)
- decouple the components-behaviour (onClicks/onFocus/inputs/etc...) from the view like [Cycle.js](http://cycle.js.org/)

## Motivation
**rxduce** is trying to find *the way of handling the state of a container with __Async-Data-Happening-All-The-Time__* with the simplicity of **Redux** and maintain the grade of complexity on a application without falling into [**TheWrongRateOfDeveloping**](https://twitter.com/andrestaltz/status/702188753016717313) *(production rate < consumption rate)*

## Run
```bash
git clone https://github.com/davesnx/rxduce

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
