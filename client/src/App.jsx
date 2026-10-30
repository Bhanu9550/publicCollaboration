import { Route, Routes } from 'react-router-dom'
import CreateFilePage from './pages/CreateFilePage/CreateFilePage'
import HomePage from './pages/HomePage/HomePage'
import ReadFilePage from './pages/ReadFilePage/ReadFilePage'
import Chat from "./pages/chat/Chat"
import SingleFile from './components/SinglePageFile/SingleFile'
import Signup from './pages/Signup/Signup'
import Sigin from './pages/sigin/Sigin'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createFiles" element={<CreateFilePage />} />
        <Route path="/publicFiles" element={<ReadFilePage />} />
        <Route path="/test-chat" element={<Chat />} />
        <Route path='/publicFiles/:file' element={<SingleFile />} />
        <Route path='/Signup' element={<Signup />} />
         <Route path="/signin" element={<Sigin />} />
      </Routes>
    </>
  )
}

export default App
