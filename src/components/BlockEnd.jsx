import { boxGeometry, floor1Material } from './helpers';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { RigidBody, CylinderCollider } from '@react-three/rapier';
import { useRef } from 'react';


const BlockEnd = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
    const hamburger = useRef();
    useFrame((state, delta) => {
        hamburger.current.rotation.y += delta;
    });
    const hamburgerModel = useGLTF('./hamburger.glb');
    hamburgerModel.scene.children.forEach((mesh) => {
        mesh.castShadow = true;
    });
    return (
        <>
            <group position={position}>
                <mesh
                    scale={scale}
                    geometry={boxGeometry}
                    material={floor1Material}
                    receiveShadow
                />
                <RigidBody
                    type='fixed'
                    colliders={false}
                    restitution={0.2}
                    friction={0}
                    position={[0, 0.25, 0]}
                >
                    <CylinderCollider
                        args={[0.5, 1.2]}
                        position={[0, 0.5, 0]}
                    />
                    <primitive
                        position={[0,1,0]}
                        ref={hamburger}
                        object={hamburgerModel.scene}
                        // scale={0.2}
                    />
                </RigidBody>
            </group>
        </>
    );
};

export default BlockEnd;
