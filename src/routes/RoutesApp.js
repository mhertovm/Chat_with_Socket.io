import {Routes, Route} from 'react-router-dom';
import Layout from '../layouts/Layouts';
import Login from '../pages/Login';
import Home from '../pages/Home';
function RoutesApp() {
    return (
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Login />}/>;
          <Route path='/home' element={<Home />}/>;
        </Route>
      </Routes>
    );
  }
export default RoutesApp