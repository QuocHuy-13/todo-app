import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions"
import { todos } from "./states";

export let reducer = (state = todos, action) => {
    let newtodos ;
    switch (action.type) {
        case ADD_TODO:
            newtodos = [...state];
            newtodos.push(action.payload);
            return newtodos;
        case DELETE_TODO:
            newtodos = [...state];
            newtodos = newtodos.filter(todo => todo.id !== action.payload)
            return newtodos;
        case UPDATE_TODO:
            newtodos = [...state];
            for (let i = 0; i < newtodos.length; i++) {
                if (newtodos[i].id === action.payload.id) {
                    newtodos[i] = action.payload
                }
            }
            // console.log(newtodos)
            return newtodos
    }
    return state;
}
