"use client";

import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";
import React, { useContext } from "react";
import Button from "../Button/Button";

const AddTaskForm = () => {
    const { handleAddTask, setPriority } = useContext(UtilsContext);
    return (
        <form
            onSubmit={handleAddTask}
            className="flex flex-col justify-between gap-3 p-2"
        >
            <input
                placeholder="Task Title"
                required
                className="w-full border border-purple rounded-md p-2"
                type="text"
                name="title"
            />

            <select
                required
                onChange={(e) => setPriority(e.target.value)}
                className="w-full border border-purple rounded-md px-2 py-3"
            >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <textarea
                placeholder="Task Description"
                name="description"
                required
                className="w-full border border-purple rounded-md p-2"
            />
            <Button type="submit">Add Task</Button>
        </form>
    );
};

export default AddTaskForm;
