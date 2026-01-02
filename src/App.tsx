import Launcher from './components/Launcher/Launcher'
import Background from './components/Background/Background';

function App() {
  return (
    <div>
      <div >
        <Background />
      </div>

      <div className="min-h-screen flex items-end pb-25 justify-center z-10">
          <Launcher />
      </div>
    </div>
  );
}

export default App
