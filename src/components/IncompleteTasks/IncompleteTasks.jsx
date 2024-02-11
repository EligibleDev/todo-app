"use client";

import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";
import { useContext, useEffect } from "react";
import "../Accordion/accordion.css";
import Accordion from "../Accordion/Accordion";

const IncompleteTasks = () => {
    const { incompleteArray, fetch } = useContext(UtilsContext);

    return (
        <div className="text-[#fff] space-y-4">
            <h3 className="text-2xl">Incomplete Tasks</h3>
            <div className="space-y-2">
                {incompleteArray.map((task) => (
                    <Accordion key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default IncompleteTasks;
