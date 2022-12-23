import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import DefaultLayout from './components/layouts/defaultLayout/DefaultLayout';
import { queryClientConfig } from './config/queryClientConfig';
import ContextWrapper from './contexts/Wrapper';
import AddTransactionPage from './pages/addTransactionPage/AddTransactionPage';
import HistoryPage from './pages/historyPage/HistoryPage';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';

const queryClient=new QueryClient(queryClientConfig);

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<ContextWrapper><LoginPage/></ContextWrapper>}/>
      <Route path='/' element={<ContextWrapper><DefaultLayout/></ContextWrapper>}>
        <Route index element={<HomePage/>}/>
        <Route path='home' element={<HomePage/>}/>
        <Route path='history' element={<HistoryPage/>}/>
        <Route path='add-transaction' element={<AddTransactionPage/>}/>
      </Route>
    </>
  )
)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  );
}

export default App;
