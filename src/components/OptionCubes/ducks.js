// Actions
const SELECT_ONE = '@components/OptionCubes/SELECT_ONE';
const SELECT_MANY = '@components/OptionCubes/SELECT_MANY';

// Reducer
export default (state = {}, action = {}) => {
  switch (action.type) {
    case SELECT_ONE:
      return {
        ...state,
        [action.field]: action.payload
      };
    case SELECT_MANY:
      if (state[action.field]) {
        if (
          state[action.field].find(el => {
            return el.id === action.payload.id;
          }) === undefined
        ) {
          return Object.assign({}, state, {
            [action.field]: [...state[action.field], action.payload]
          });
        } else {
          return {
            ...state,
            [action.field]: state[action.field].filter(function(obj) {
              return obj.id !== action.payload.id;
            })
          };
        }
      } else if (!state[action.field]) {
        return {
          ...state,
          [action.field]: [action.payload]
        };
      }
      return {
        ...state
      };
    default:
      return state;
  }
};

// Action Creators
export const selectManyOptions = (payload, field) => ({
  type: SELECT_MANY,
  payload,
  field
});

export const selectOneOption = (payload, field) => ({
  type: SELECT_ONE,
  payload,
  field
});
