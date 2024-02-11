"use client";

import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";
import { useContext } from "react";

const Counters = () => {
    const { previousData, incompleteArray, completeArray } = useContext(UtilsContext);

    return (
        <div className="order-3">
            {`Total ${JSON.parse(previousData)?.length || 0} tasks added, ${
                completeArray?.length || 0
            } completed, and ${incompleteArray?.length || 0} incomplete`}
        </div>
    );
};

export default Counters;
