const { createStore } = require('./../../lib/rxduce')

const state = {
  todos: [1, 2, 3],
  visibilityFilter: 'all'
}

function update (state, payload) {
  return state.push(payload)
}

const store = createStore(state, update)

store.dispatch('addTodo', 23)

store.subscribe((value) => {
  console.log('value', value)
})

store.dispatch('addTodo', 999)
