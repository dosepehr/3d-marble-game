import { OrbitControls } from '@react-three/drei';
import Level from './Level';
import Lights from './Lights';
const App = () => {
    return (
        <>
            <OrbitControls makeDefault />
            <Level />
            <Lights />
        </>
    );
};

export default App;

