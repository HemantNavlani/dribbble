import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignupPage from './pages/SignupPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import HomePage from './pages/HomePage.jsx'
import RolePage from './pages/RolePage.jsx'
import VerifyEmailPage from './pages/VerifyEmailPage.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/dribbble/',
        element:<HomePage/>
      },
      {
        path:'/dribbble/home',
        element:(
            <HomePage/>
        )
      },
      {
        path:'/dribbble/signup',
        element:<SignupPage/>
      },
      {
        path:'/dribbble/profile',
        element:<ProfilePage/>
      },
      {
        path:'/dribbble/role',
        element:(
            <RolePage/>
        )
      },
      {
        path:'/dribbble/verify',
        element:(
            <VerifyEmailPage/>
        )
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
     <RouterProvider router={router}/>
    </Provider>
)
