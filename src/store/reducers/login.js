import * as Types from "../action-types";

let initState = {
  username: "15134578149",
  password: "123456",
  err:1
};

function login(state = initState, action) {
  switch (action.type) {
    case Types.USER_LOGIN:
      return {...state, ...action.userLogin};
  }
  return state;
}

export default login;