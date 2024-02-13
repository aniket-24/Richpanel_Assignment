import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "fetch_user":
      return action.payload;
    case "logout":
      return null;
    default:
      return state;
  }
};

const fetchUser = (dispatch) => async (user) => {
  const res = user;
  console.log("res context", res);
  localStorage.setItem("token", res);
  dispatch({ type: "fetch_user", payload: res });
};

const logout = (dispatch) => async () => {
  localStorage.removeItem("token");
  dispatch({ type: "logout" });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { fetchUser, logout },
  null
);
