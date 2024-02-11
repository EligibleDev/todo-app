"use client";

import { useContext } from "react";
import Button from "../Button/Button";
import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";

const UpdateTaskFrom = ({ previousTask }) => {
    const { handleUpdateTask, setUpdatedPriority } = useContext(UtilsContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateTask(e, previousTask.id);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between gap-3 p-2 text-[#000]"
        >
            <input
                defaultValue={previousTask.title}
                placeholder="Task Title"
                required
                className="w-full border border-purple rounded-md p-2"
                type="text"
                name="title"
            />

            <select
                required
                onChange={(e) => setUpdatedPriority(e.target.value)}
                className="w-full border border-purple rounded-md px-2 py-3"
            >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <textarea
                defaultValue={previousTask.description}
                placeholder="Task Description"
                name="description"
                required
                className="w-full border border-purple rounded-md p-2"
            />
            <Button type="submit">Update Task</Button>
        </form>
    );
};

export default UpdateTaskFrom;
