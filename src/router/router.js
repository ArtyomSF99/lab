import Content from "../components/Content"
import Home from "../pages/Home"

import Registration from "../pages/Registration"





export const publicRoutes = [
    {path:'/', component: <Home/>, exact: true},
    {path:'/registration', component: <Registration/>, exact: true}
   
   
    
]