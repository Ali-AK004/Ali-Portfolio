import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import PropTypes from "prop-types";

const Computers = ({ mobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <ambientLight intensity={2.8} />
      <pointLight intensity={2} />
      <primitive
        object={scene}
        scale={mobile ? 0.6 : 0.75}
        position={mobile ? [0, -2.4, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const mediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    // Add the callback function as a listener for changes to the media query (react useEffect)
    mediaQuery.addEventListener("change", mediaQueryChange);

    return () => {
      // Remove the listener when the component is unmounted (react useEffect)
      mediaQuery.removeEventListener("change", mediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 26 }}
      gl={{ preserveDrawingBuffer: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers mobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

Computers.propTypes = {
  mobile: PropTypes.bool.isRequired,
};

export default ComputersCanvas;
