const { Observable, BehaviorSubject } = require('rxjs/Rx')
const isObservable = require('is-observable')

export function createStore (state, update) {
  let state$ = new BehaviorSubject(state)

  state$.scan((state, action) => update(currentState))

  function getState () {
    return state$.getValue()
  }

  function subscribe (observer) {
    return state$.subscribe(observer)
  }

  function dispatch (action) {
    return (...args) => {
      state$.next(action(...args))
    }
  }

  return { getState, dispatch, subscribe }
}

export function connect (connector) {
  return (WrappedComponent) => {
    return class extends Component {
      static contextTypes = {
        state$: PropTypes.object.isRequired,
      }

      componentWillMount() {
        this.subscription = this.context.state$
          .map(connector)
          .subscribe(this.setState.bind(this))
      }

      componentWillUnmount() {
        this.subscription.unsubscribe()
      }

      // render () {
      //   return (
      //     <WrappedComponent {...this.state} {...this.props} />
      //   )
      // }
    }
  }
}

// TODO: Implement middlewares
//     .let(this._preMiddleware)
//     .scan((state, action) => update(state, action))
//     .let(this._postMiddleware)
