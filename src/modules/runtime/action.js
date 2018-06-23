import { SET_RUNTIME_VARIABLE } from "./reducer"
export const setRuntimeVariable = ({ name, value }) => {
  return {
    type: SET_RUNTIME_VARIABLE,
    payload: {
      name,
      value
    }
  }
}
