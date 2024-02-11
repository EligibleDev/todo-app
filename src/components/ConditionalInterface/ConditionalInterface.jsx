"use client";

import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";
import { useContext } from "react";
import IncompleteTasks from "../IncompleteTasks/IncompleteTasks";

const ConditionalInterface = () => {
    const { previousData } = useContext(UtilsContext);

    return previousData ? (
        <>
            <div className="w-1/2 bg-blue p-4 rounded-xl">
                <IncompleteTasks />
            </div>
            <div className="w-1/2">
                  
            </div>
        </>
    ) : (
        <p>gotta add tasks to see here</p>
    );
};

export default ConditionalInterface;
