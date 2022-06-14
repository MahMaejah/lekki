import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './style.css';
import Home from './pages/Home';
import AddProperty from './pages/AddProperty';
import EditProperty from './pages/EditProperty';
import ViewProperty from './pages/ViewProperty';

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/add' element={ <AddProperty/> } />
        <Route path='/view' element={ <ViewProperty/> } />
        <Route path='/edit' element={ <EditProperty/> } />
      </Routes>

      <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">&copy;Chipo Hameja - Dufuna Scholar - 2022</a>
        </div>
      </nav>
    </div>
  );
}

export default App;