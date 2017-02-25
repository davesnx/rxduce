# rxduce [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Motivation
I'm trying to solve the async operations on a Redux Application. I highly recommend to take a look into [Mobx](https://github.com/mobxjs/mobx).

The idea was to create a state of an observable, and a stream of actions, that the state listen to the stream of actions and runs the `"updates"` (or reducers) to the state.
