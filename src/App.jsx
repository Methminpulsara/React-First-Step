import './App.css'
import ChildComponent from './components/ChildComponent';

function App() {

  const username="methmin"

  return (
    <>
      <ChildComponent data={username} />
    </>
  );
}

export default App
