"use client";

import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";
import { useContext, useEffect, useState } from "react";
import "../Accordion/accordion.css";
import Accordion from "../Accordion/Accordion";

const IncompleteTasks = () => {
    const { incompleteArray, reFetch } = useContext(UtilsContext);
    const [incompleteTasks, setIncompleteTasks] = useState(incompleteArray);

    useEffect(() => {
        setIncompleteTasks(incompleteArray);
    }, [incompleteArray]);

    const handleSort = (method) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };

        if (method === "h2l") {
            const sorted = incompleteTasks.sort((task1, task2) => {
                const priorityValue1 = priorityOrder[task1.priority];
                const priorityValue2 = priorityOrder[task2.priority];
                return priorityValue2 - priorityValue1;
            });
            setIncompleteTasks(sorted);
        } else if (method === "l2h") {
            const sorted = incompleteTasks.sort((task1, task2) => {
                const priorityValue1 = priorityOrder[task1.priority];
                const priorityValue2 = priorityOrder[task2.priority];
                return priorityValue1 - priorityValue2;
            });
            setIncompleteTasks(sorted);
        } else if (method === "o2n") {
            const sorted = incompleteTasks.sort((task1, task2) => {
                return new Date(task1.createdAt) - new Date(task2.createdAt);
            });
            setIncompleteTasks(sorted);
        } else if (method === "n2o") {
            const sorted = incompleteTasks.sort((task1, task2) => {
                return new Date(task2.createdAt) - new Date(task1.createdAt);
            });
            setIncompleteTasks(sorted);
        } else {
            setIncompleteTasks(incompleteArray);
        }

        reFetch();
    };

    return (
        <div className="text-[#fff] space-y-4">
            <h3 className="text-2xl">Incomplete Tasks</h3>

            <select
                className="text-[#000] w-full border border-purple rounded-md px-2 py-3"
                onChange={(e) => {
                    handleSort(e.target.value);
                }}
            >
                <option value="">Default Sorting</option>
                <option value="h2l">Sort by Priority: High to low</option>
                <option value="l2h">Sort by Priority: low to High</option>
                <option value="o2n">Sort by Date: Oldest to Newest</option>
                <option value="n2o">Sort by Date: Newest to Oldest</option>
            </select>

            {incompleteTasks?.length ? (
                <div className="space-y-2">
                    {incompleteTasks.map((task) => (
                        <Accordion key={task.id} task={task} />
                    ))}
                </div>
            ) : (
                <p>There is no incomplete task</p>
            )}
        </div>
    );
};

export default IncompleteTasks;
