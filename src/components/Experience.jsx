import React from "react";
import {
  useGLTF,
  Text,
  Float,
  Environment,
  PresentationControls,
  ContactShadows,
  Html,
} from "@react-three/drei";

export const Experience = () => {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <color args={["#695b6b"]} attach="background" />
      <Environment files={"./texture/potsdamer_platz_1k.hdr"} />

      <PresentationControls
        global
        rotation={[0.13, 0.1, -0.1]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{
          mass: 2,
          tension: 400,
        }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={0.4}
            height={1.65}
            intensity={65}
            color="#fedb43"
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive
            object={computer.scene}
            position-y={-1.2}
            floatIntensity={0.4}
            rotation-y={Math.PI * 0.35}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="http://new.artdementiev.by/"></iframe>
            </Html>
          </primitive>
          <Text
            fontSize={0.7}
            font="./fonts/Bangers-Regular.ttf"
            position={[1.25, 1.2, -1.75]}
            rotation-y={-0.25}
            maxWidth={1}
            color={'#fedb43'}
          >
            ARTDEMENTIEV
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};
