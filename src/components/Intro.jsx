import { Float, Text } from '@react-three/drei';

const Intro = () => {
    return (
        <>
            <Float>
                <Text
                    scale={0.8}
                    font='./bebas-neue-v9-latin-regular.woff'
                    maxWidth={0.25}
                    lineHeight={0.75}
                    textAlign='right'
                    position={[0.5, 0.65, 0]}
                    rotation-y={-0.25}
                >
                    Marble Race
                    <meshBasicMaterial toneMapped={false} />
                </Text>
            </Float>
        </>
    );
};

export default Intro;
