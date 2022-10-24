import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './components/Landing'
import OrphanagesMap from './components/OrphanagesMap'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/app' element={<OrphanagesMap />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router