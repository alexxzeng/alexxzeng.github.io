import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'

const Computers = ({isMobile, isShort}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor='black' />
      <pointLight intensity={2} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} />
      <primitive object={computer.scene} scale={isMobile ? 0.6 : (isShort ? 0.69 : 0.75)} 
      position={isMobile ? [1.2, -1.8, -1.5] : (isShort ? [-1.5, -3, -1.5] : [0, -2.6, -1.5])} 
      rotation={[-0.01, -0.2, -0.1]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const [hide, sethide] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    const shortQuery = window.matchMedia('(max-height: 850px)');
    const hideQuery = window.matchMedia('(max-height: 600px)');

    setIsMobile(mediaQuery.matches)
    setIsShort(shortQuery.matches)
    sethide(hideQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    const handleShortQueryChange = (event) => {
      setIsShort(event.matches);
    }

    const handleHideQueryChange = (event) => {
      sethide(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    shortQuery.addEventListener('change', handleShortQueryChange)
    hideQuery.addEventListener('change', handleHideQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
      shortQuery.removeEventListener('change', handleShortQueryChange)
      hideQuery.removeEventListener('change', handleHideQueryChange)
    }
  }, [])

  return (
    <Canvas frameloop='demand' shadows camera={{position: [20, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}} className={`${hide ?  "hidden" : "block"}`}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} 
        autoRotate={false} autoRotateSpeed={0.1} enablePan={false}/>
        <Computers isMobile={isMobile} isShort={isShort}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;