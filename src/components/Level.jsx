import BlockVertical from './BlockVertical';
import BlockSpinner from './BlockSpinner';
import BlockStart from './BlockStart';
import BlockHorizontal from './BlockHorizontal';
import BlockEnd from './BlockEnd';
import { Physics, Debug } from '@react-three/rapier';
const Level = () => {
    return (
        <>
            <Physics>
                <Debug />
                <BlockStart position={[0, 0, 16]} scale={[4, 0.2, 4]} />
                <BlockSpinner position={[0, 0, 12]} scale={[4, 0.2, 4]} />
                <BlockVertical position={[0, 0, 8]} scale={[4, 0.2, 4]} />
                <BlockHorizontal position={[0, 0, 4]} scale={[4, 0.2, 4]} />
                <BlockEnd position={[0, 0, 0]} scale={[4, 0.2, 4]} />
            </Physics>
        </>
    );
};

export default Level;
