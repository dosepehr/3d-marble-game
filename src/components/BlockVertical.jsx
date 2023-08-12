import { useFrame } from '@react-three/fiber';
import { boxGeometry, floor2Material, obstacleMaterial } from './helpers';
import { RigidBody } from '@react-three/rapier';
import { useRef, useState } from 'react';
const BlockVertical = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
    const obstacle = useRef();

    const [timeOfsset] = useState(Math.random() * Math.PI * 2);
    useFrame((state, delta) => {
        const time = state.clock.elapsedTime;
        const y = Math.abs(Math.sin(time + timeOfsset)) + 0.2;
        obstacle.current.setNextKinematicTranslation({
            x: position[0],
            y: position[1] + y,
            z: position[2],
        });
    });
    return (
        <>
            <group position={position}>
                {/* block */}
                <mesh
                    scale={scale}
                    geometry={boxGeometry}
                    material={floor2Material}
                    position-y={-0.1}
                    receiveShadow
                ></mesh>
                {/* vertical trap */}
                <RigidBody
                    ref={obstacle}
                    type='kinematicPosition'
                    restitution={0.2}
                    friction={0}
                    position={[0, 0.3, 0]}
                >
                    <mesh
                        geometry={boxGeometry}
                        material={obstacleMaterial}
                        scale={[3.5, 0.3, 0.3]}
                        castShadow
                        receiveShadow
                    />
                </RigidBody>
            </group>
        </>
    );
};

export default BlockVertical;
