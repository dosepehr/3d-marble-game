import { Physics } from '@react-three/rapier';
import Level from './components/Level';
import Lights from './components/Lights';
import Stats from './components/Stats';
import Player from './components/Player';
import useGame from './hooks/useGame';
const App = () => {
    const blocksCount = useGame((state) => state.blocksCount);
    const blocksSeed = useGame((state) => state.blocksSeed);
    return (
        <>
            <Physics>
                <Level count={blocksCount} seed={blocksSeed} />
                <Stats />
                <Lights />
                <Player />
            </Physics>
        </>
    );
};

export default App;
