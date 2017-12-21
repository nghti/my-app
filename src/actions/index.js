import {
  SAVE_TODO,
  ADD_TODO,
  EDIT_TODO,
  DEL_TODO
} from '../constants/todoConstants';

export const saveTodo = (items, isLoad) => {
  return {
    type: SAVE_TODO,
    items,
    isLoad
  }
}

export const addTodo = posts => {
  return {
    type: ADD_TODO,
    posts,
  }
}

export const editTodo = index => {
  return {
    type: EDIT_TODO,
    index,
  }
}

export const delTodo = index => {
  return {
    type: DEL_TODO,
    index,
  }
}