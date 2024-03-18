import React, { Suspense, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three-stdlib';
import './Workouts.css';

function Model() {
  const obj = useLoader(OBJLoader, process.env.PUBLIC_URL + '/Man.obj');
  obj.scale.set(0.005, 0.005, 0.005);
  obj.position.y= -0.3;
  return <primitive object={obj} />;
}


function Workouts() {
    //UseEffect for the background IMAGE
    useEffect(() => {
        // Store the original background style
        const originalStyle = document.body.style.background;
    
        // Set the new background image
        document.body.style.background = `url('${process.env.PUBLIC_URL}/gympic.jpg') no-repeat center center fixed`;
        document.body.style.backgroundSize = 'cover';
    
        // Revert back to the original background style when the component unmounts
        return () => {
          document.body.style.background = originalStyle;
        };
      }, []); // Empty dependency array ensures this effect only runs once on mount

    return (
      <div className="model-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <div className="model-box">
          <div className="overlay-text">Click To See Workouts 👆</div>
          <Canvas camera={{ position: [0, 0, 10], fov: 10 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[15, 15, 10]} angle={0.3} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
            <OrbitControls />
          </Canvas>
          <img src={`${process.env.PUBLIC_URL}/image.png`} alt="360 View" className="three-sixty-icon" />
        </div>
      </div>
    );
  }

export default Workouts;
