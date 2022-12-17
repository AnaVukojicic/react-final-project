import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/' element={<LoginPage/>}/>
    </>
  )
)

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
