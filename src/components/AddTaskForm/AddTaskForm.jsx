"use client";

import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";
import React, { useContext } from "react";

const AddTaskForm = () => {
    const { handleAddTask, setPriority } = useContext(UtilsContext);
    return (
        <form onSubmit={handleAddTask} className="space-y-2 p-2">
            <input
                placeholder="Task Title"
                required
                className="w-full border border-black"
                type="text"
                name="title"
            />
            <textarea
                placeholder="Task Description"
                name="description"
                required
                className="w-full border border-black"
            />
            <select
                required
                onChange={(e) => setPriority(e.target.value)}
                className="w-full border border-black"
            >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTaskForm;
