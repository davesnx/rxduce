import React from 'react'
import { bindActionCreators } from 'redux'
import * as CounterActions from '../actions/counter'
import { dom } from 'react-reactive-class'
const { span: Span } = dom

// Example of dump component
const Text = ({ text }) => (<span>{text}</span>)

// Example of Intent component
// Intent as http://cycle.js.org/model-view-intent.html
const Button = ({text, clickEvent$}) => {
  return (
    <button
      onClick={clickEvent$.onNext.bind(clickEvent$)}>
      <Text text={text}/>
    </button>
  )
}

// It's the equivalent mapStateToProps of redux
// TODO: Implement connect(?)
function mapStateToEvents (state$) {
  return {
    counter$: state$.map(state => state.counter)
  }
}

const counter = (store, events$) => {
  const { counter$ } = mapStateToEvents(store.state$)
  const {
    clickEventIncrement$,
    clickEventDecrement$,
    clickEventIncrementIfOdd$,
    clickEventIncrementAsync$
  } = events$
  const actions = bindActionCreators(CounterActions, store.dispatch)

  clickEventIncrement$.subscribe(actions.increment)

  clickEventDecrement$.subscribe(actions.decrement)

  clickEventIncrementIfOdd$
    .filter(() => store.getState().counter % 2 !== 0)
    .subscribe(actions.increment)

  clickEventIncrementAsync$
    .delay(1000)
    .subscribe(actions.increment)

  return (
    <p>
      Clicked: <Span>{counter$}</Span> times
      {' '}
      <Button text={'+'} clickEvent$={clickEventIncrement$}/>
       {' '}
      <Button text={'-'} clickEvent$={clickEventDecrement$}/>
      {' '}
      <Button text={'Increment if odd'} clickEvent$={clickEventIncrementIfOdd$}/>
      {' '}
      <Button text={'Increment async'} clickEvent$={clickEventIncrementAsync$}/>
    </p>
  )
}

export default counter
