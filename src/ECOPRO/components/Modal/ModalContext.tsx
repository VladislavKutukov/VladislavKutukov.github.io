import React from "react";

import type { ModalContextValue } from "./Modal.type";

export const ModalContext = React.createContext<ModalContextValue>({
    onClose: ()=>{}
});
ModalContext.displayName = "ModalContext";

export default {};
