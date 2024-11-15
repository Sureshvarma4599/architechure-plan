const initialAuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export default function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null, token: null };
    default:
      return state;
  }
}
