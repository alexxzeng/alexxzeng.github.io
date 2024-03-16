import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"
import CanvasLoader from '../Loader'

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl])
  
  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}> 
      <mesh castShadow receiveShadow scale={2.75}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 0.2]}/>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color='#ffffff'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal position={[0, 0, 1]} map={decal} rotation={[2 * Math.PI, 0, 6.25]} flatShading/>
      </mesh>
    </Float>
  )
}

const BallCanvas = (({ icon }) => {
  return (
    <Canvas frameloop='always' dpr={[1, 2]} gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false}/>
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
})

export default BallCanvas