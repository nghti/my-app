import {
  SAVE_TODO,
  ADD_TODO,
  EDIT_TODO,
  DEL_TODO
} from '../constants/todoConstants.js';

const initialState = {
  items: [],
  isLoad: true,
};

export default function listItems (state = initialState, action) {
  switch (action.type) {
    case SAVE_TODO:
      return Object.assign({}, state, {
        items: action.items,
        isLoad: false,
      })
    case ADD_TODO:
      state.items.push(action.posts);
      return {
        isLoad: false,
        items: [...state.items]
      }
    case EDIT_TODO:
      state.items.push(action.posts)
      return {
        items: [...state.items]
      }
    case DEL_TODO:
      state.items.splice(action.index, 1);
      return {
        items: [...state.items]
      }
    default:
      return state
  }
}