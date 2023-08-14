import { Physics, Debug } from '@react-three/rapier';
import Level from './components/Level';
import Lights from './components/Lights';
import Stats from './components/Stats';
import Player from './components/Player';
import useGame from './hooks/useGame';
const App = () => {
    const blocksCount = useGame((state) => state.blocksCount);
    return (
        <>
            <Physics>
                <Debug />
                <Level count={blocksCount} />
                <Stats />
                <Lights />
                <Player />
            </Physics>
        </>
    );
};

export default App;
