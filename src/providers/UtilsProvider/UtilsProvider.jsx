"use client";

import { createContext, useState } from "react";

export const UtilsContext = createContext();

const UtilsProvider = ({ children }) => {
    const [priority, setPriority] = useState("low");
    const [fetch, setFetch] = useState(true);
    const previousData = localStorage.getItem("tasks");
    const reFetch = () => setFetch(!fetch);

    const incompleteArray = JSON.parse(localStorage.getItem("tasks"))?.filter(
        (task) => task?.completed === false
    );
    const completeArray = JSON.parse(localStorage.getItem("tasks"))?.filter(
        (task) => task?.completed === true
    );

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
            reFetch();
        } else {
            localStorage.setItem("tasks", tasks);
            e.target.reset();
            reFetch();
        }
    };

    const utils = {
        previousData,
        reFetch,
        fetch,
        handleAddTask,
        setPriority,
        incompleteArray,
        completeArray,
    };
    return <UtilsContext.Provider value={utils}>{children}</UtilsContext.Provider>;
};

export default UtilsProvider;
