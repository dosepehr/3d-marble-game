import { useFrame } from '@react-three/fiber';
import { boxGeometry, obstacleMaterial } from './helpers';
import { RigidBody } from '@react-three/rapier';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import BlockContainer from './BlockContainer';
const BlockSpinner = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
    const obstacle = useRef();

    const [speed] = useState(
        () => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1)
    );

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        const rotation = new THREE.Quaternion();
        rotation.setFromEuler(new THREE.Euler(0, time * speed, 0));
        obstacle.current.setNextKinematicRotation(rotation);
    });
    return (
        <BlockContainer position={position} scale={scale}>
            <RigidBody
                ref={obstacle}
                type='kinematicPosition'
                position={[0, 0.3, 0]}
                restitution={0.2}
                friction={0}
            >
                <mesh
                    geometry={boxGeometry}
                    material={obstacleMaterial}
                    scale={[3.5, 0.3, 0.3]}
                    castShadow
                    receiveShadow
                />
            </RigidBody>
        </BlockContainer>
    );
};

export default BlockSpinner;
