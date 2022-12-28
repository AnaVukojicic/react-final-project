import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import DefaultLayout from './components/layouts/defaultLayout/DefaultLayout';
import { queryClientConfig } from './config/queryClientConfig';
import ContextWrapper from './contexts/Wrapper';
import AddTransactionPage from './pages/addTransactionPage/AddTransactionPage';
import CategoryPage from './pages/categoryPage/CategoryPage';
import EditPage from './pages/editPage/EditPage';
import HistoryPage from './pages/historyPage/HistoryPage';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import ProfilePage from './pages/profilePage/ProfilePage';
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
        <Route path='add-transaction' element={<AddTransactionPage type='add'/>}/>
        <Route path='edit-transaction/:id' element={<EditPage/>}/>
        <Route path='categories' element={<CategoryPage/>}/>
        <Route path='edit-profile' element={<ProfilePage/>}/>
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
