import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "./reducer"

export const login = () => async (dispatch, getState, { api }) => {
  try {
    dispatch({ type: LOGIN })
    const user = await api.post("https://reqres.in/api/login", { email: "test@test.com", password: "test" })
    dispatch({ type: LOGIN_SUCCESS, user })
  } catch (error) {
    dispatch({ type: LOGIN_FAILED, error })
  }
}
