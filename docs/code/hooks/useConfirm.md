Confirmation hook

```jsx
"use client";
import React, { MouseEventHandler, createContext, useState } from "react";
import { noop } from "lodash";
import { Dialog } from "@headlessui/react";
import Modal from "@/components/Modal";

interface ConfirmationContextProps {
  confirm: (message: string) => Promise<boolean>;
}

export const ConfirmationContext = createContext<ConfirmationContextProps>({
  confirm: () => Promise.reject(false),
});

const ConfirmationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeConfirm, setActiveConfirm] = useState<{
    message: string;
    handleConfirm: MouseEventHandler<HTMLButtonElement>;
    handleCancel: MouseEventHandler<HTMLButtonElement>;
  } | null>(null);

  /**
   * Create a promise that resolves when the user confirms the action
   * and rejects when the user cancels the action
   * @param message
   * @returns
   */
  const confirm = (message: string): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      const handleConfirm: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveConfirm(null);
        resolve(true);
      };

      const handleCancel: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveConfirm(null);
        resolve(false);
      };
      setActiveConfirm({ message, handleConfirm, handleCancel });
    });
  };

  return (
    <ConfirmationContext.Provider value={{ confirm }}>
      <Modal
        open={!!activeConfirm}
        dimmer
        onClose={activeConfirm?.handleCancel || noop}
      >
        <Dialog.Panel className="flex relative bg-white rounded-2xl shadow dark:bg-gray-800 max-w-[80vw] h-auto flex-col space-y-2 m-4 text-gray-900 dark:text-white">
          <Dialog.Title className="text-lg font-semibold p-4">
            Confirm action
          </Dialog.Title>
          <Dialog.Description className="p-4">
            {activeConfirm?.message}
          </Dialog.Description>
          <div className="flex justify-end p-4 space-x-2">
            <button
              onClick={activeConfirm?.handleCancel}
              className="px-4 py-4 text-sm font-semibold text-gray-500 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={activeConfirm?.handleConfirm}
              className="px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg dark:bg-blue-600"
            >
              Confirm
            </button>
          </div>
        </Dialog.Panel>
      </Modal>
      {children}
    </ConfirmationContext.Provider>
  );
};

export default ConfirmationProvider;

export const useConfirm = () => React.useContext(ConfirmationContext);
```
