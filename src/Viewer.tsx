import * as React from 'react'
import {useAppState} from "./AppProvider";

const style = {
  height: '500px',
}

export default function Viewer() {
  const {
    control,
    flip,
    invert,
    updateControl,
    updateFlip,
    updateInvert,
  } = useAppState()

   console.error('------- Viewer rendering')
  return (
    <div style={style}>
      <span>control : {control}</span>
      <br />
      <span>invert : {invert.toString()}</span>
      <br />
      <span>flip : {flip.toString()}</span>
      <br />
    </div>
  )
}
