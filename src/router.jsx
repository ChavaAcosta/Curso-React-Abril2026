import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import AppView from './views/AppView'
import OtraView from './views/OtraView'
import ParamView from './views/ParamView'



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout /> }>
                    <Route path='/main' element={<AppView />} />
                    <Route path='/otra' element={<OtraView />} />
                    <Route path='/parametro/:id' element={<ParamView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}