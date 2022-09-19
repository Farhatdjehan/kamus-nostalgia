import { useEffect } from 'react';
import MainScreen from './../src/components/MainScreen';
import { googleAnalytics } from './../src/helpers/common';

function App() {

    // useEffect(() => {
    //     googleAnalytics();
    // }, [])

    return (
        <MainScreen />
    );
}

export default App;
