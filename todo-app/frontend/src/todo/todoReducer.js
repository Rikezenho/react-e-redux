const INITIAL_STATE = {
  description: '',
  list: [
    {
      _id: 1,
      description: 'Pagar fatura do cartão',
      done: true
    },
    {
      _id: 2,
      description: 'Reunião',
      done: false
    }
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGE':
      return { ...state, description: action.payload }
    case 'TODO_SEARCHED':
      return { ...state, list: action.payload.data }
    default:
      return state
  }
}