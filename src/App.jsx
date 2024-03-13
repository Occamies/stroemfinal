import './App.scss'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout/Layout'
import FrontPage from './views/FrontPage';
import NotFound from './views/NotFound';
import AdminHome from './views/admin/AdminHome';
import AdminLayout from './layout/admin/AdminLayout';
import AdminNews from './views/admin/AdminNews';
import AdminCreate from './views/admin/AdminCreate';
import AdminEdit from './views/admin/AdminEdit';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      {/* PUBLIC */}
      <Route path='/' element={<Layout/>}>
        <Route index element={<FrontPage/>} />
        <Route path='*' element={<NotFound/>} />
      </Route>

      {/* ADMIN */}

      <Route path='/Admin' element={<AdminLayout/>}>
        <Route index element={<AdminHome/>} />
        <Route path='/Admin/AdminNews' element={ <AdminNews />} />
        <Route path='/Admin/AdminCreate' element={ <AdminCreate />} />
        <Route path='/Admin/AdminEdit/:ID' element={ <AdminEdit />} />
      </Route>

      </>
    )
  )


  return (
    <main className='container'>
    <RouterProvider router={router} />
  </main>
  )
}

export default App
