import './App.scss'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout/Layout'
import FrontPage from './views/FrontPage';
import NotFound from './views/NotFound';

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
