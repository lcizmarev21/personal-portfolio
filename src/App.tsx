import Launcher from './components/Launcher/Launcher'
import Background from './components/Background/Background';


function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Background />
  
      <div className="flex min-h-screen items-end  justify-center ">
        <Launcher />
      </div>

    </div>
  );
}

export default App
