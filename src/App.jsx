import { OrbitControls } from '@react-three/drei';
const App = () => {
    return (
        <>
            <OrbitControls makeDefault />
            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </>
    );
};

export default App;
