"use client";

import { createContext, useState } from "react";

export const UtilsContext = createContext();

const UtilsProvider = ({ children }) => {
    const [priority, setPriority] = useState("low");
    const previousData = localStorage.getItem("tasks");

    const handleAddTask = (e) => {
        e.preventDefault();

        const id = Math.random().toString();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const createdAt = new Date();
        const completed = false;

        //defining a new task out of the form's data
        const newTask = { id, title, description, createdAt, priority, completed };
        const tasks = JSON.stringify([newTask]);

        if (previousData) {
            const previousArray = JSON.parse(previousData);
            const updatedTasks = [...previousArray, newTask];
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            e.target.reset();
        } else {
            localStorage.setItem("tasks", tasks);
            e.target.reset();
        }
    };

    const utils = { handleAddTask, setPriority };
    return <UtilsContext.Provider value={utils}>{children}</UtilsContext.Provider>;
};

export default UtilsProvider;
