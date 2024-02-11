"use client";

import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";
import { useContext } from "react";
import Accordion from "../Accordion/Accordion";

const CompleteTasks = () => {
    const { completeArray } = useContext(UtilsContext);

    return (
        <div className="text-[#fff] space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-2xl">Complete Tasks</h3>
                <select name="method">
                    <option value="">Default Sorting</option>
                    <option value="h2l">Sort by Priority: High to low</option>
                    <option value="l2h">Sort by Priority: low to High</option>
                </select>
            </div>

            {completeArray.length ? (
                <div className="space-y-2">
                    {completeArray?.map((task) => (
                        <Accordion key={task?.id} task={task} />
                    ))}
                </div>
            ) : (
                <p>no task marked as completed</p>
            )}
        </div>
    );
};

export default CompleteTasks;
