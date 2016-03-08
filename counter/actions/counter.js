export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export function increment () {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrement () {
  return {
    type: DECREMENT_COUNTER
  }
}

// import Rx from 'rx'
//
// export const increment$ = new Rx.Subject()
// export const decrement$ = new Rx.Subject()
//
// export function increment () {
//   increment$.onNext({
//     type: INCREMENT_COUNTER
//   })
// }
//
// export function decrement () {
//   decrement$.onNext({
//     type: DECREMENT_COUNTER
//   })
// }
//
// export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
// export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
