"use client";

import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";
import { useContext } from "react";
import IncompleteTasks from "../IncompleteTasks/IncompleteTasks";
import CompleteTasks from "../CompleteTasks/CompleteTasks";

const ConditionalInterface = () => {
    const { previousData } = useContext(UtilsContext);

    return previousData ? (
        <div className="flex gap-6">
            <div className="w-1/2 bg-blue p-4 rounded-xl h-fit">
                <IncompleteTasks />
            </div>
            <div className="w-1/2 bg-purple p-4 rounded-xl h-fit">
                <CompleteTasks />
            </div>
        </div>
    ) : (
        <p>gotta add tasks to see here</p>
    );
};

export default ConditionalInterface;
