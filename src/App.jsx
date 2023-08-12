import { OrbitControls } from '@react-three/drei';
import { Physics, Debug } from '@react-three/rapier';
import Level from './components/Level';
import Lights from './components/Lights';
import Stats from './components/Stats';
import Player from './components/Player';
const App = () => {
    return (
        <>
            <Physics>
                <Debug />
                <OrbitControls makeDefault />
                <Level />
                <Stats />
                <Lights />
                <Player />
            </Physics>
        </>
    );
};

export default App;

