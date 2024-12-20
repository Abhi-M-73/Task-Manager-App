import React, { createContext, useState } from 'react'

export const todoContext = createContext(null);




const TodoContext = ({ children }) => {
    const [tasks, settasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    return (
        <todoContext.Provider value={{ tasks, settasks }} >
            {children}
        </todoContext.Provider>
    )
}

export default TodoContext
