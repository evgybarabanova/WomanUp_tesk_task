import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Notes from './components/Notes'
import './App.css'

function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Home />}></Route>
</Routes>
<Notes/>
</>
  )
}

export default App;
