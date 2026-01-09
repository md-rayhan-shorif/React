import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './projects/RouteWebsite/pages/Home.jsx'
import About from './projects/RouteWebsite/pages/About.jsx'
import Contact from './projects/RouteWebsite/pages/Contact.jsx'
import User from './projects/RouteWebsite/pages/User.jsx'
import Github, { githubInfoLoader } from './projects/RouteWebsite/pages/Github.jsx'

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout/>,
//         children: [
//             {
//                 path: "",
//                 element: <Home/>
//             },
//             {
//                 path: "about",
//                 element: <About/>
//             },
//             {
//                 path: "contact",
//                 element: <Contact/>
//             }
//         ]

//     }
// ])

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path='/' element={<Layout/>} >
//             <Route path='' element={<Home/>} />
//             <Route path='about' element={<About/>} />
//             <Route path='contact' element={<Contact/>} />
//             <Route path='user/:userId' element={<User/>} />
//             <Route
//                 loader={githubInfoLoader}
//              path='github'
//               element={<Github/>}
//                />

//         </Route>
//     )
// )


createRoot(document.getElementById('root')).render(
  
    <App />

    // <RouterProvider router={router} />
  
)
