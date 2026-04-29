import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import AppView from './views/AppView'
import OtraView from './views/OtraView'
import ParamView from './views/ParamView'
import ProductLayout from './layouts/ProductLayout'
import MainView from './views/MainView'
import ProductsView from './views/ProductsView'
import CreateProductView from './views/CreateProductView'
import EditProductView from './views/EditProductView'



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout /> }>
                    <Route path='/main' element={<AppView />} />
                    <Route path='/otra' element={<OtraView />} />
                    <Route path='/parametro/:id' element={<ParamView />} />
                </Route>

                <Route element={<ProductLayout />}>
                    <Route path='/' element={<MainView />} index />
                    <Route path='/products' element={<ProductsView />} />
                    <Route path='/products/create' element={<CreateProductView />} />
                    <Route path='/products/:id' element={<EditProductView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}