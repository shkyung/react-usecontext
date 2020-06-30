import * as React from 'react'
import { ReactNode, Context, createContext, useState, useContext} from 'react'

const controls = ['none', 'pen', 'pan', 'adjust', 'magnify'] as const;
export type Control = typeof controls[number];

export interface ControlState {
  control: Control;
  invert: boolean;
  flip: boolean;
  updateControl: (value: Control) => void;
  updateFlip: (value: boolean) => void;
  updateInvert: (value: boolean) => void;
}

export const AppContext: React.Context<ControlState | null> = createContext<ControlState | null>(null)

function AppProvider({ children }: { children: ReactNode }) {
   const [control, setControl] = useState<Control>('pan');
  const [invert, setInvert] = useState<boolean>(false);
  const [flip, setFlip] = useState<boolean>(false);
  const value:ControlState = {
    control,
    invert,
    flip,
    updateControl: setControl,
    updateInvert: setInvert,
    updateFlip: setFlip,
  }
  if (AppContext != null) {
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
  } else {
    throw new Error('AppContext is null...')
  }
}

function useAppState() {
   const context: ControlState | null = useContext(AppContext)
    if (context == null) {
    throw new Error('AppContext is null...')
  }
  return context
}

export { AppProvider, useAppState }
