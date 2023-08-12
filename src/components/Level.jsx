import BlockVertical from './BlockVertical';
import BlockSpinner from './BlockSpinner';
import BlockStart from './BlockStart';
import { Physics, Debug } from '@react-three/rapier';
const Level = () => {
    return (
        <>
            <Physics>
                <Debug />
                <BlockStart position={[0, 0, 8]} scale={[4, 0.2, 4]} />
                <BlockSpinner position={[0, 0, 4]} scale={[4, 0.2, 4]} />
                <BlockVertical position={[0, 0, 0]} scale={[4, 0.2, 4]} />
            </Physics>
        </>
    );
};

export default Level;
