import { Html, Plane, useAspect } from 'drei';
import { GlitchMode } from 'postprocessing';
import React, { FC, Suspense, useState } from 'react';
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Glitch,
  Noise,
  Vignette,
} from 'react-postprocessing';
import { Canvas, useThree } from 'react-three-fiber';
import { Box, Flex, useFlexSize } from 'react-three-flex';
import { styled } from '../stitches.config';

const Content: FC = () => {
  const { size } = useThree();
  const [vpWidth, vpHeight] = useAspect('cover', size.width, size.height);

  return (
    <>
      <Flex size={[vpWidth / 2, vpHeight / 2, 0]}>
        <Box width="auto" height="auto">
          <Sphere />
        </Box>
      </Flex>
    </>
  );
};

const Background: FC = () => {
  const [width, height] = useFlexSize();
  return (
    <Plane args={[width, height]}>
      <meshBasicMaterial attach="material" color="hsl(206,10%,10%)" />
    </Plane>
  );
};

const Sphere: FC = () => {
  const [width, height] = useFlexSize();
  return (
    <mesh>
      <sphereGeometry args={[width / 2, 20, 20]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  );
};

const Effects: FC = () => {
  return (
    <EffectComposer>
      <Glitch
        delay={[2.5, 5.5]} // min and max glitch delay
        duration={[0.2, 0.5]} // min and max glitch duration
        strength={[0.1, 0.5]} // min and max glitch strength
        mode={GlitchMode.SPORADIC} // glitch mode
        active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
        ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
      />
      <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={1024} />
      <Noise opacity={0.1} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  );
};

const Landing3D: FC = () => {
  const [cameraPosition, setCameraPosition] = useState<
    [x: number, y: number, z: number]
  >([0, 0, 2]);

  const Wrapper = styled.div({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  });

  return (
    <Wrapper>
      <Canvas>
        <ambientLight intensity={0.2} />
        <spotLight
          intensity={0.5}
          position={[1, 1, 2]}
          penumbra={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={<Html center>loading...</Html>}>
          <Content />
        </Suspense>
        <Effects />
      </Canvas>
    </Wrapper>
  );
};

export default Landing3D;
