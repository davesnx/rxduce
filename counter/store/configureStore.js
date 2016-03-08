import { createStore } from 'redux'
import rootReducer from '../reducers'
import { Subject } from 'rx'

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState)

  const state$ = new Subject()
  store.subscribe(() => {
    state$.onNext(store.getState())
  })

  store.state$ = state$.startWith(store.getState())
  return store
}

// TODO: Implement connect: (?)
// TODO: Implement middleWares: (?)
//
//      connect(state, fn) {
//        this.dispatcher
//          .let(this._preMiddleware)
//          .scan((state, action) => this._reducer(state, action), this._initialState)
//          .let(this._postMiddleware)
//          .subscribe(fn);
//      }
