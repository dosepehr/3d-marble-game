import React from 'react';
import { boxGeometry, floor2Material } from './helpers';

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
                />
            </group>
        </>
    );
};

export default BlockSpinner;
