import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Button variant="text">Text</Button>
    </div>
  );
}

export default App;
