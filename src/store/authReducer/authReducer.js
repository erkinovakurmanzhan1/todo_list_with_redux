export const isRegistrtionTypes = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
};

const initialState = {
  email: "",
  isRegistration: false,
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case isRegistrtionTypes.LOG_IN:
      return {
        ...state,
        email: action.payload,
        isRegistration: true,
      };

    case isRegistrtionTypes.LOG_OUT:
      return initialState;

    default:
      return state;
  }
};
