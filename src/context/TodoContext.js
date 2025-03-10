import { useContext,createContext } from "react";


const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"TodoMsg",
            compelete:false
        }
    ],

    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});



export const TodoProvider=TodoContext.Provider;


export const useTodo=()=>{
    return useContext(TodoContext);
}