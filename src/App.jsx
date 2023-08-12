import { OrbitControls } from '@react-three/drei';
import Level from './Level';
import Lights from './Lights';
import Stats from './Stats';
const App = () => {
    return (
        <>
            <OrbitControls makeDefault />
            <Level />
            <Stats />
            <Lights />
        </>
    );
};

export default App;

