import React from 'react'
import Loginpage from '../pages/Loginpage/Loginpage'
import Home from '../pages/Home/Home'
import { createBrowserRouter } from 'react-router-dom'
import Signup from '../pages/Signup/Signup'
import Welcomepage from '../pages/Welcomepage/Welcomepage'
import Logoutpage from '../pages/Home/Logoutpage/Logoutpage'
import Verify from '../pages/Verify/Verify'

const router = createBrowserRouter(
    [
        { path:'/',
        element:<Home/>
        },
        {path:'/loginpage',
        element:<Loginpage/>
        },
        {path:'/signup',
        element:<Signup/>
        },
        {path:'/verify',
        element:<Verify/>
        },
        {path:'/welcome',
        element:<Welcomepage/>
        },
        {path:'/logout',
        element:<Logoutpage/>
        },
        
    ]
)
export default router