import { boxGeometry, floor1Material } from './helpers';
const BlockStart = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
    return (
        <>
            <group position={position}>
                <mesh
                    scale={scale}
                    geometry={boxGeometry}
                    material={floor1Material}
                    position-y={-0.1}
                    receiveShadow
                />
            </group>
        </>
    );
};

export default BlockStart;
