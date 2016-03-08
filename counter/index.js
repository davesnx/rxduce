import ReactDOM from 'react-dom'
import counter from './components/counter'
import configureStore from './store/configureStore'
import Rx from 'rx'

// Considering Counter as a container that talks with the store
// also we have the concept of events$, that are just the ways of connect
// the UI actions with the streams

// We create the events$ on the container for have the case of
// use it in another component
function createEvents () {
  return {
    clickEventIncrement$: new Rx.Subject(),
    clickEventDecrement$: new Rx.Subject(),
    clickEventIncrementIfOdd$: new Rx.Subject(),
    clickEventIncrementAsync$: new Rx.Subject()
  }
}

const store = configureStore()
const events$ = createEvents()
const Counter = counter(store, events$)

ReactDOM.render(
  Counter,
  document.getElementById('root')
)
