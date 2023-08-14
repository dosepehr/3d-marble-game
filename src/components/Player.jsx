import { RigidBody, useRapier } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';
const Player = () => {
    const marble = useRef();
    const [subscribeKeys, getKeys] = useKeyboardControls();

    useFrame((state, delta) => {
        const { forward, backward, leftward, rightward } = getKeys();
        const impulse = { x: 0, y: 0, z: 0 };
        const torque = { x: 0, y: 0, z: 0 };
        const impulseStrength = 0.6 * delta;
        const torqueStrength = 0.2 * delta;
        if (forward) {
            impulse.z -= impulseStrength;
            torque.x -= torqueStrength;
        }
        if (rightward) {
            impulse.x += impulseStrength;
            torque.z -= torqueStrength;
        }
        if (backward) {
            impulse.z += impulseStrength;
            torque.x += torqueStrength;
        }
        if (leftward) {
            impulse.x -= impulseStrength;
            torque.z += torqueStrength;
        }
        marble.current.applyImpulse(impulse);
        marble.current.applyTorqueImpulse(torque);
    });
    return (
        <>
            <RigidBody
                linearDamping={0.5}
                angularDamping={0.5}
                ref={marble}
                position={[0, 1, 0]}
                colliders='ball'
                restitution={0.2}
                friction={1}
            >
                <mesh castShadow>
                    <icosahedronGeometry args={[0.3, 1]} />
                    <meshStandardMaterial flatShading color='mediumPurple' />
                </mesh>
            </RigidBody>
        </>
    );
};

export default Player;
