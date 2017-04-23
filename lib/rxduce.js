const { Observable, BehaviorSubject } = require('rxjs/Rx')
const isObservable = require('is-observable')

export function createStore (state, actions) {
  let state$

  if (isObservable(state)) {
    state$ = Observable.from(state)
  } else {
    state$ = new BehaviorSubject(state)
  }

  function subscribe (observer) {
    return state$.subscribe(observer)
  }

  function dispatch (action) {
    state$.map((state) => actions[action](state))
  }

  return { dispatch, subscribe }
}

// TODO: Implement connect and middlewares
// export function connect (state, fn) {
//   this.dispatcher
//     .let(this._preMiddleware)
//     .scan((state, action) => this._reducer(state, action), this._initialState)
//     .let(this._postMiddleware)
//     .subscribe(fn)
//   }
