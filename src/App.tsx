import * as React from 'react';
import {useState} from 'react'
import Viewer from './Viewer'
import SidePanel from './SidePanel'
import {AppProvider} from "./AppProvider";

function App() {
   const [appFlg, setAppFlg] = useState<boolean>(false)
  return (
    <AppProvider>
      <div>
      <Viewer/>
      <SidePanel appState={appFlg} setState={setAppFlg}/>
      </div>
    </AppProvider>
  );
}

export default App;
