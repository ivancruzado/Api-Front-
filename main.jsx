import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'

import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './src/pages/NavBar.jsx';
import Provider from './src/pages/Context.jsx';
import { AuthProvider } from './src/pages/ContextoGlobal.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <main className = "flex bg-gradient-to-b from-slate-600 to-blue-500 h-full">
        <AuthProvider>
          <NavBar/>
          <App />
        </AuthProvider>
      </main> 
    </BrowserRouter>
    
  </React.StrictMode>
)
