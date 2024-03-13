import './App.scss'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout/Layout'
import FrontPage from './views/FrontPage';
import NotFound from './views/NotFound';
import AdminHome from './views/admin/AdminHome';
import AdminLayout from './layout/admin/AdminLayout';
import AdminNews from './views/admin/AdminNews';



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
