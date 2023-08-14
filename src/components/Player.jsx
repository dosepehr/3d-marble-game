import { RigidBody, useRapier } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
const Player = () => {
    const marble = useRef();
    const [subscribeKeys, getKeys] = useKeyboardControls();
    const { rapier, world } = useRapier();
    const rapierWorld = world.raw();
    const jump = () => {
        const origin = marble.current.translation();
        origin.y -= 0.31;
        const direction = { x: 0, y: -1, z: 0 };
        const ray = new rapier.Ray(origin, direction);
        const hit = rapierWorld.castRay(ray, 10, true);

        if (hit?.toi < 0.15) {
            marble.current.applyImpulse({ x: 0, y: 0.5, z: 0 });
        }
    };
    useEffect(() => {
        const unsubcribedJump = subscribeKeys(
            // jump function
            (state) => state.jump,
            (value) => {
                if (value) jump();
            }
        );
        return () => {
            unsubcribedJump();
        };
    }, []);
    useFrame((state, delta) => {
        /**
         * controls
         */
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

        /**
         * camera
         */
        const marblePosition = marble.current.translation();

        const cameraPosition = new THREE.Vector3();
        cameraPosition.copy(marblePosition);
        cameraPosition.z += 2.25;
        cameraPosition.y += 0.65;
        
        const cameraTarget = new THREE.Vector3();
        cameraTarget.copy(marblePosition);
        cameraTarget.y += 0.65;
        state.camera.position.copy(cameraPosition);
        state.camera.lookAt(cameraTarget);
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
