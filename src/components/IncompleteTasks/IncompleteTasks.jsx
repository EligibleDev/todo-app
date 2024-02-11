"use client";

import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";
import { useContext, useEffect } from "react";

const IncompleteTasks = () => {
    const { incompleteArray, fetch } = useContext(UtilsContext);

    useEffect(() => {}, [fetch]);

    return (
        <div className="text-[#fff] ">
            <h3 className="text2xl">Incomplete Tasks</h3>

            {incompleteArray.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </div>
    );
};

export default IncompleteTasks;
