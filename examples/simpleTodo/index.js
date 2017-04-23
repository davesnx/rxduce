const { createStore } = require('./../../lib/rxduce')

const state = {
  todos: [1, 2, 3],
  visibilityFilter: 'all'
}

const actions = {
  'addTodo' (state, todo) {
    state.push(todo)
  }
}

const store = createStore(state, actions)

store.subscribe((value) => {
  console.log(value)
})

store.dispatch('addTodo', 123)
