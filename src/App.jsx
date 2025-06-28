import React from 'react'
import { Canvas } from "@react-three/fiber"
import Expericence from './components/Expericence'
import './App.css'

const App = () => {
  return (
    <>
    <Canvas camera={{
      fov: 64,
      position: [2.3, 1.5, 2.3],
    }}>
      <Expericence/>
    </Canvas>
    </>
  )
}

export default App
