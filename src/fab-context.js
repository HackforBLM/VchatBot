import React from 'react';

//Floating Action Button (FAB)
export const fabState = false;

export const FabContext = React.createContext({
  isOpen: fabState,
  toggleFab: () => {},
}); // default value
