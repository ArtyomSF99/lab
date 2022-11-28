
import { Route, Routes } from "react-router-dom"


import Registration from "./pages/Registration"
import { publicRoutes } from "./router/router"



const AppRouter = () => {
    
    return(
        
     
        <Routes>
            {publicRoutes.map(route =>
            <Route element={route.component} path={route.path} exact={route.exact} key={route.path}/>
            )} 
            <Route path="*" element={<Registration/>}/>
        </Routes>
        
       
    )
}

export default AppRouter