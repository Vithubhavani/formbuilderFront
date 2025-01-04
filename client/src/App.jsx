import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import SettingsPage from './pages/SettingsPage'
import CreateForm from './pages/CreateForm'
import ShareForm from './pages/ShareForm'
import ViewForm from './pages/ViewForm'
export default function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/settings' element={<SettingsPage/>}/>
    <Route path='/formcreate' element={<CreateForm/>}/>
    <Route path='/form/share/:id' element={<ShareForm/>}/>
    <Route path="/dashboard/view/:formId/:folderId" element={<ViewForm />} />

   </Routes>
   </BrowserRouter>
   </div>
  )
}
