"use client";

import { createContext } from "react";

export const UtilsContext = createContext();

const UtilsProvider = ({ children }) => {
    const utils = {};

    return <UtilsContext.Provider value={utils}>{children}</UtilsContext.Provider>;
};

export default UtilsProvider;
