# rxduce [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

I'm trying to solve `async operations` on a Redux Application. I recommend to take a look into [Mobx](https://github.com/mobxjs/mobx).

The idea was to create a state of an Observable, and a `Rx.Subject` of actions (can be sync or async).
The state listens to the `actionStream` and maps to a update (or reducer) pure functions that changes the state with the RxJS interface, similar to [redux-observable](https://github.com/redux-observable/redux-observable).
