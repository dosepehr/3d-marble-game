import { boxGeometry, wallMaterial } from './helpers';
import { RigidBody, CuboidCollider } from '@react-three/rapier';
const Walls = ({ length = 1 }) => {
    return (
        <>
            <RigidBody type='fixed' restitution={0.2} friction={0}>
                {/* right wall */}
                <mesh
                    castShadow
                    material={wallMaterial}
                    geometry={boxGeometry}
                    scale={[0.3, 1.5, length * 4]}
                    position={[2.15, 0.75, -(length * 2) + 2]}
                />
                {/* left wall */}
                <mesh
                    receiveShadow
                    material={wallMaterial}
                    geometry={boxGeometry}
                    scale={[0.3, 1.5, length * 4]}
                    position={[-2.15, 0.75, -(length * 2) + 2]}
                />
                {/* end wall */}
                <mesh
                    receiveShadow
                    material={wallMaterial}
                    geometry={boxGeometry}
                    scale={[4, 1.5, 0.3]}
                    position={[0, 0.75, -(length * 4) + 2]}
                />
                <CuboidCollider
                    args={[2, 0.1, 2 * length]}
                    position={[0, -0.1, -(length * 2) + 2]}
                    restitution={0.2}
                    friction={1}
                />
            </RigidBody>
        </>
    );
};

export default Walls;
