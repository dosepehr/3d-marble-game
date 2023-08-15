import { useFrame } from '@react-three/fiber';
import { boxGeometry, obstacleMaterial } from './helpers';
import { RigidBody } from '@react-three/rapier';
import { useRef, useState } from 'react';
import BlockContainer from './BlockContainer';
const BlockHorizontal = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
    const obstacle = useRef();

    const [timeOfsset] = useState(Math.random() * Math.PI * 2);
    useFrame((state, delta) => {
        const time = state.clock.elapsedTime;
        const x = Math.sin(time + timeOfsset) * 1.25;
        obstacle.current.setNextKinematicTranslation({
            x: position[0] + x,
            y: position[1] + 0.75,
            z: position[2],
        });
    });
    return (
        <>
            <BlockContainer position={position} scale={scale}>
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
                        scale={[1.5, 1.5, 0.3]}
                        castShadow
                        receiveShadow
                    />
                </RigidBody>
            </BlockContainer>
        </>
    );
};

export default BlockHorizontal;
