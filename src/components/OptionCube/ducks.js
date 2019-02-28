// Actions
const UPDATE = '@components/OptionCube/UPDATE';
const REMOVE = '@components/OptionCube/REMOVE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export const updateOptionCube = (payload) => ({
  type: UPDATE,
  payload
});

export const removeOptionCube = (payload) => ({
  type: REMOVE,
  payload
});