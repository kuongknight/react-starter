export const LOGIN = "auth/LOGIN"
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS"
export const LOGIN_FAILED = "auth/LOGIN_FAILED"

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        isAuthenticated: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true
      }
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        isAuthenticated: false
      }
    default:
      return state
  }
}
