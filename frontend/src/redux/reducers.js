import { combineReducers } from 'redux'

export default combineReducers({
  tasks: () => [
    {
      _id: 1,
      done: false,
      description: 'Ler livro'
    }, {
      _id: 2,
      done: false,
      description: 'Ligar para esposa'
    }, {
      _id: 3,
      done: true,
      description: 'Almoçar'
    }, 
  ]
})
