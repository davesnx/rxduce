const { Observable, BehaviorSubject } = require('rxjs/Rx')
const isObservable = require('is-observable')

export function createStore (state, update) {
  let state$ = new BehaviorSubject(state)

  state$.scan((currentState) => {
    return update[action](currentState)
  })

  function getState () {
    return state$.getValue()
  }

  function subscribe (observer) {
    return state$.subscribe(observer)
  }

  function dispatch (action) {
    return state$.next(action)
  }

  return { getState, dispatch, subscribe }
}

// TODO: Implement connect and middlewares
// export function connect (state, fn) {
//   this.dispatcher
//     .let(this._preMiddleware)
//     .scan((state, action) => this._reducer(state, action), this._initialState)
//     .let(this._postMiddleware)
//     .subscribe(fn)
//   }
