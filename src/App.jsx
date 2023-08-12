import { OrbitControls } from '@react-three/drei';
import Level from './components/Level';
import Lights from './components/Lights';
import Stats from './components/Stats';
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

