import BlockVertical from './BlockVertical';
import BlockSpinner from './BlockSpinner';
import BlockStart from './BlockStart';
import BlockHorizontal from './BlockHorizontal';
import BlockEnd from './BlockEnd';
import { Physics, Debug } from '@react-three/rapier';
import { useMemo } from 'react';
const Level = ({
    count = 5,
    types = [BlockSpinner, BlockVertical, BlockHorizontal],
}) => {
    const blocks = useMemo(() => {
        const blocks = [];
        for (let i = 0; i < count; i++) {
            const index = Math.floor(Math.random() * types.length);
            blocks.push(types[index]);
        }
        return blocks;
    }, [types, count]);
    console.log(blocks);
    return (
        <>
            <Physics>
                <Debug />
                <BlockStart position={[0, 0, 0]} scale={[4, 0.2, 4]} />
                {blocks.map((Block, i) => (
                    <Block
                        key={i}
                        position={[0, 0, -(i + 1) * 4]}
                        scale={[4, 0.2, 4]}
                    />
                ))}
                <BlockEnd
                    position={[0, 0, -(count + 1) * 4]}
                    scale={[4, 0.2, 4]}
                />
            </Physics>
        </>
    );
};

export default Level;
