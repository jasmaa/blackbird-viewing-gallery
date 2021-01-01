import { useState } from 'react';
import Welcome from 'components/Welcome';
import Gallery from 'components/Gallery';

function App() {

  const [isEntering, setIsEntering] = useState(false);
  const [isEntered, setIsEntered] = useState(false);

  const enter = () => {
    setIsEntering(true);
    setTimeout(() => {
      setIsEntered(true);
    }, 1100);
  }

  return (
    <div>
      {
        isEntered
          ? <Gallery />
          : <Welcome isEntering={isEntering} enter={enter} />
      }
    </div>
  );
}

export default App;
