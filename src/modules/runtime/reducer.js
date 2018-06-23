export const SET_RUNTIME_VARIABLE = "runtime/SET_VARIABLE"

export default (state = {}, action) => {
  switch (action.type) {
    case SET_RUNTIME_VARIABLE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
      return state
  }
}
