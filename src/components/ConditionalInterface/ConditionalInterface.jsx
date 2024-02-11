"use client";

import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";
import { useContext } from "react";
import IncompleteTasks from "../IncompleteTasks/IncompleteTasks";
import CompleteTasks from "../CompleteTasks/CompleteTasks";

const ConditionalInterface = () => {
    const { previousData } = useContext(UtilsContext);

    return previousData?.length ? (
        <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2 bg-blue p-4 rounded-xl h-fit">
                <IncompleteTasks />
            </div>
            <div className="w-full lg:w-1/2 bg-purple p-4 rounded-xl h-fit">
                <CompleteTasks />
            </div>
        </div>
    ) : (
        <p>Add tasks to see here</p>
    );
};

export default ConditionalInterface;
