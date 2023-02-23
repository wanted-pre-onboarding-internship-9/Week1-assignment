import { emailCheck, passwordCheck } from "../commons/validation"

export const initialStateForm = {
  email: "",
  password: "",
  isEmail: false,
  isPassword: false,
};

//FormReducer
export function FormReducer(state, action) {
  switch (action.type) {
    case "email":
      return emailCheck(action.value)
        ? {
          ...state,
          [action.type]: action.value,
          isEmail: true,
        }
        : {
          ...state,
          [action.type]: action.value,
          isEmail: false,
        };

    case "password":
      return passwordCheck(action.value)
        ? {
          ...state,
          [action.type]: action.value,
          isPassword: true,
        }
        : {
          ...state,
          [action.type]: action.value,
          isPassword: false,
        };
    case "reset":
      return initialStateForm;
    default:
      return state;
  }
}