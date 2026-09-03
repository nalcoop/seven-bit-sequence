import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/login'
import { Admin } from './pages/admin'
import { Dashboard } from './pages/dashboard'
import { Input } from './pages/input'
import { Notifications } from './pages/notifications'
import { Schedule_Admin } from './pages/schedule-admin'
import { Schedule } from './pages/schedule'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/input" element={<Input/>}/>
        <Route path="/notifications" element={<Notifications/>}/>
        <Route path="/schedule-admin" element={<Schedule_Admin/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
      </Routes>
    </Router>
  )
  
}

export default App
