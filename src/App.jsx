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
import NewsSubpage from './views/NewsSubpage';
import NewsPage from './views/NewsPage';
import SearchFile from './layout/SearchFile';
import OmOs from './views/OmOs';
import Service from './views/Service';
import AdminService from './views/admin/AdminService';
import AdminServiceEdit from './views/admin/AdminServiceEdit';
import AdminServiceCreate from './views/admin/AdminServiceCreate';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      {/* PUBLIC */}
      <Route path='/' element={<Layout/>}>
        <Route index element={<FrontPage/>} />
        <Route path='/News/NewsSubpage/:ID' element={<NewsSubpage/>} />
        <Route path='/News/Search/:ID' element={<SearchFile/>} />
        <Route path='/News' element={<NewsPage/>} />
        <Route path='/About' element={<OmOs/>} />
        <Route path='/Services' element={<Service/>} />
        <Route path='*' element={<NotFound/>} />
      </Route>

      {/* ADMIN */}

      <Route path='/Admin' element={<AdminLayout/>}>
        <Route index element={<AdminHome/>} />
        <Route path='/Admin/AdminNews' element={ <AdminNews />} />
        <Route path='/Admin/AdminService' element={ <AdminService />} />
        <Route path='/Admin/AdminCreate' element={ <AdminCreate />} />
        <Route path='/Admin/AdminServiceCreate' element={ <AdminServiceCreate />} />
        <Route path='/Admin/AdminEdit/:ID' element={ <AdminEdit />} />
        <Route path='/Admin/AdminServiceEdit/:ID' element={ <AdminServiceEdit />} />
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
