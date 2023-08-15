import { Float, Text } from '@react-three/drei';

const Intro = () => {
    return (
        <>
            <Float>
                <Text
                    scale={0.5}
                    font='./bebas-neue-v9-latin-regular.woff'
                    maxWidth={0.25}
                    lineHeight={0.75}
                    textAlign='right'
                    position={[0.6, 0.65, -0.5]}
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
