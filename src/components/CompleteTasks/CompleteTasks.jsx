"use client";

import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";
import { useContext } from "react";

const CompleteTasks = () => {
    const { completeArray } = useContext(UtilsContext);

    return (
        <div className="text-[#fff]">
            <h3 className="text-2xl">Complete Tasks</h3>

            {completeArray ? (
                completeArray?.map((task) => <li key={task?.id}>{task.title}</li>)
            ) : (
                <p>no task marked as completed</p>
            )}
        </div>
    );
};

export default CompleteTasks;
