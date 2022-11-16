import { Routes, Route, Router } from 'react-router-dom';
import Landing from './page/Landing';

function App() {
  return 
<>
<Routes>
  <Route path='/' element={<Landing />}></Route>
</Routes>
</>
}

export default App;
