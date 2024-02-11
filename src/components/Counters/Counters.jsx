"use client";

import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";
import { useContext } from "react";

const Counters = () => {
    const { previousData, incompleteArray, completeArray } = useContext(UtilsContext);

    return (
        <div className="order-3">
            {`Total ${JSON.parse(previousData).length} tasks added, ${
                completeArray?.length
            } completed, and ${incompleteArray?.length} incomplete`}
        </div>
    );
};

export default Counters;
