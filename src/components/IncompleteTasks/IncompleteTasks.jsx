"use client";

import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";
import { useContext, useEffect } from "react";

const IncompleteTasks = () => {
    const { incompleteArray, fetch } = useContext(UtilsContext);

    return (
        <div className="text-[#fff] ">
            <h3 className="text-2xl">Incomplete Tasks</h3>

            {incompleteArray.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </div>
    );
};

export default IncompleteTasks;
