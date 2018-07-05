import uuid from "uuid";
import { ADD_ITEMS, DELETE_ITEM, GET_ITEMS } from "../actions/types";

const initialState = {
  items: [{
      id: uuid(),
      name: 'Item 1'
    },
    {
      id: uuid(),
      name: 'Item 2'
    },
    {
      id: uuid(),
      name: 'Item 3'
    },
    {
      id: uuid(),
      name: 'Item 4'
    },
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS: 
      return {
        ...state
      }
    default:
      return state;
  }
}