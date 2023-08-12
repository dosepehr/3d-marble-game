import { boxGeometry, floor2Material, obstacleMaterial } from './helpers';
const BlockSpinner = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
    return (
        <>
            <group position={position}>
                <mesh
                    scale={scale}
                    geometry={boxGeometry}
                    material={floor2Material}
                    position-y={-0.1}
                    receiveShadow
                ></mesh>

                <mesh
                    geometry={boxGeometry}
                    material={obstacleMaterial}
                    scale={[3.5, 0.3, 0.3]}
                    castShadow
                    receiveShadow
                />
            </group>
        </>
    );
};

export default BlockSpinner;
