import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useDialog } from '@selectquotelabs/sqhooks';

const CreateDialogStateContext = React.createContext(undefined);
const CreateDialogDispatchContext = React.createContext(undefined);

function CreateDialogProvider({ children }) {
  const { pathname } = useRouter();
  const { isDialogOpen, openDialog, closeDialog } = useDialog();

  const getIsCreateDialogOpen = React.useCallback(
    (currentRoute) => {
      if (pathname === '/' || !isDialogOpen) {
        return false;
      }

      return currentRoute === pathname;
    },
    [pathname, isDialogOpen]
  );

  return (
    <CreateDialogStateContext.Provider value={getIsCreateDialogOpen}>
      <CreateDialogDispatchContext.Provider value={{ openDialog, closeDialog }}>
        {children}
      </CreateDialogDispatchContext.Provider>
    </CreateDialogStateContext.Provider>
  );
}

function useCreateDialogState() {
  const context = React.useContext(CreateDialogStateContext);
  if (context === undefined) {
    throw new Error(
      'useCreateDialogState must be used within a CreateDialogProvider'
    );
  }
  return context;
}

function useCreateDialogDispatch() {
  const context = React.useContext(CreateDialogDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useCreateDialogDispatch must be used within a CreateDialogProvider'
    );
  }
  return context;
}

function useCreateDialog() {
  return [useCreateDialogState(), useCreateDialogDispatch()];
}

export {
  CreateDialogProvider,
  useCreateDialog,
  useCreateDialogState,
  useCreateDialogDispatch,
};
