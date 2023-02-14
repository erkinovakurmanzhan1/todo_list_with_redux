export const todoActionTypes = {
  ADD: "ADD",
  EDIT: "EDIT",
  DELETE: "DELETE",
  COMPLETED: "COMPLETED",
  DELETE_ALL: "DELETE_ALL",
};

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActionTypes.ADD:
      return [
        ...state,
        {
          id: Date.now().toString(),
          text: action.payload,
          completed: false,
        },
      ];

    case todoActionTypes.DELETE_ALL:
      return [];

    case todoActionTypes.DELETE:
      return state.filter((el) => el.id !== action.payload);

    case todoActionTypes.COMPLETED:
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });

    case todoActionTypes.EDIT:
      return state.map((el) => {
        if (el.id === action.id) {
          return {
            ...el,
            text: action.payload,
          };
        }
        return el;
      });

    default:
      return state;
  }
};
