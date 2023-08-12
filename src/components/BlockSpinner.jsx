import { useFrame } from '@react-three/fiber';
import { boxGeometry, floor2Material, obstacleMaterial } from './helpers';
import { RigidBody, Physics, Debug } from '@react-three/rapier';
import { useRef, useState } from 'react';
import * as THREE from 'three';
const BlockSpinner = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
    const obstacle = useRef();
    const [speed] = useState(
        (Math.random() + 0.2) * Math.random() < 0.5 ? -1 : 1
    );
    useFrame((state, delta) => {
        const time = state.clock.elapsedTime;
        const rotation = new THREE.Quaternion();
        rotation.setFromEuler(new THREE.Euler(0, time * speed, 0));
        obstacle.current.setNextKinematicRotation(rotation);
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
                {/* spinner */}
                <Physics>
                    <Debug />
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
                </Physics>
            </group>
        </>
    );
};

export default BlockSpinner;
