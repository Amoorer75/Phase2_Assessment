import { Routes, Route } from "react-router-dom"
import Dogs from './componet/Dogs'
import Cats from './componet/Cats'
import NotFound from './componet/NotFound'

function Container(){


    return(

        <div>
            <Routes>
                <Route path={'/'} />
                <Route path={'/cats'}  element={<Cats/>}/>
                <Route path={'/dogs'} element={<Dogs />} />
                <Route path={'*'} element={ <NotFound />} />
            </Routes>

        </div>

    )
}
export default Container