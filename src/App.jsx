import { Physics } from '@react-three/rapier';
import Level from './components/Level';
import Lights from './components/Lights';
import Player from './components/Player';
import useGame from './hooks/useGame';
import Intro from './components/Intro';
import Effects from './components/Effects';
const App = () => {
    const blocksCount = useGame((state) => state.blocksCount);
    const blocksSeed = useGame((state) => state.blocksSeed);
    return (
        <>
            <color args={['#bdedfc']} attach='background' />
            <Intro />
            <Lights />
            <Effects />
            <Physics>
                <Level count={blocksCount} seed={blocksSeed} />
                <Player />
            </Physics>
        </>
    );
};

export default App;
