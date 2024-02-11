"use client";

import { createContext, useEffect, useState } from "react";

export const UtilsContext = createContext();

const UtilsProvider = ({ children }) => {
    const [priority, setPriority] = useState("low");
    const [updatedPriority, setUpdatedPriority] = useState("low");
    const [fetch, setFetch] = useState(true);
    const [editing, setEditing] = useState("");
    const previousData = localStorage.getItem("tasks");
    const [incompleteArray, setIncompleteArray] = useState(
        JSON.parse(previousData)
            ?.filter((task) => task?.completed === false)
            ?.reverse()
    );
    const [completeArray, setCompleteArray] = useState(
        JSON.parse(previousData)
            ?.filter((task) => task?.completed === true)
            ?.reverse()
    );
    const reFetch = () => setFetch(!fetch);

    useEffect(() => {
        setIncompleteArray(
            JSON.parse(previousData)
                ?.filter((task) => task?.completed === false)
                ?.reverse()
        );

        setCompleteArray(
            JSON.parse(previousData)
                ?.filter((task) => task?.completed === true)
                ?.reverse()
        );
    }, [previousData, fetch]);

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

    const handleUpdateTask = (e, id) => {
        e.preventDefault();

        const title = e.target.title.value;
        const description = e.target.description.value;

        const updatedTasks = JSON.parse(previousData)?.map((task) => {
            if (task?.id === id) {
                return {
                    ...task,
                    title: title,
                    description: description,
                    priority: updatedPriority,
                };
            } else {
                return task;
            }
        });
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setEditing("");
        reFetch();
    };

    const markAsComplete = (id) => {
        const updatedTasks = JSON.parse(previousData)?.map((task) => {
            if (task?.id === id) {
                return { ...task, completed: true };
            }
            return task;
        });
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        reFetch();
    };

    const makeIncomplete = (id) => {
        const updatedTasks = JSON.parse(previousData)?.map((task) => {
            if (task?.id === id) {
                return { ...task, completed: false };
            }
            return task;
        });
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        reFetch();
    };

    const deleteTask = (id) => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        const updatedTasks = tasks?.filter((task) => task?.id !== id);
        localStorage?.setItem("tasks", JSON.stringify(updatedTasks));
        reFetch();
    };

    const utils = {
        previousData,
        reFetch,
        fetch,
        editing,
        setEditing,
        handleAddTask,
        handleUpdateTask,
        setPriority,
        setUpdatedPriority,
        incompleteArray,
        completeArray,
        markAsComplete,
        makeIncomplete,
        deleteTask,
    };
    return <UtilsContext.Provider value={utils}>{children}</UtilsContext.Provider>;
};

export default UtilsProvider;
