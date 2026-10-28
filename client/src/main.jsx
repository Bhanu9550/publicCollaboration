import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import FilesProvider from './contexts/fileProvider.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <FilesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FilesProvider>
)
