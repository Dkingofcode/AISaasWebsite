import React from 'react';
import { Canvas }  from '@react-three/fiber';
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import './canvas.css';

const CanvasModel = () => {
  return (
    <Canvas 
     shadows 
     camera={{ position: [0, 0, 0], fov: 10 }}
     gl={{ preserveDrawingBuffer: true }}
     className=' canvas w-5 max-w-full max-h-full h-10 transition-all ease-in'
     >
        <ambientLight intensity={0.5} />
        <Environment preset='city'  />
    
        <CameraRig>
          <Backdrop  />
          <Center>
            <Shirt />
            </Center>  
        </CameraRig>
    </Canvas>
  )
}

export default CanvasModel;
