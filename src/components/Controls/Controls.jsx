"use client";

import { useContext } from "react";
import Button from "../Button/Button";
import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";

const Controls = ({ task }) => {
    const { markAsComplete, deleteTask, makeIncomplete, setEditing } =
        useContext(UtilsContext);

    return task.completed ? (
        <div className="flex gap-2 flex-wrap">
            <Button onClick={() => makeIncomplete(task?.id)}>Make Incomplete</Button>
            <Button onClick={() => deleteTask(task?.id)}>Delete</Button>
            <Button onClick={() => setEditing(task?.id)}>Edit</Button>
        </div>
    ) : (
        <div className="flex gap-2 flex-wrap">
            <Button onClick={() => markAsComplete(task?.id)}>Mark as Complete</Button>
            <Button onClick={() => deleteTask(task?.id)}>Delete</Button>
            <Button onClick={() => setEditing(task?.id)}>Edit</Button>
        </div>
    );
};

export default Controls;
