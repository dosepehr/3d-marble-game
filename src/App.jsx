import { Physics } from '@react-three/rapier';
import Level from './components/Level';
import Lights from './components/Lights';
import Stats from './components/Stats';
import Player from './components/Player';
import useGame from './hooks/useGame';
import Intro from './components/Intro';
const App = () => {
    const blocksCount = useGame((state) => state.blocksCount);
    const blocksSeed = useGame((state) => state.blocksSeed);
    return (
        <>
            <color args={['#bdedfc']} attach='background' />
            <Intro />
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
