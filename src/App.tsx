import Launcher from './components/Launcher/Launcher'
import Background from './components/Background/Background';


function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" >
      <Background />

      <div className="absolute inset-0 flex items-end justify-center pb-25">
        <Launcher />
      </div>
      
    </div>
  );
}

export default App
