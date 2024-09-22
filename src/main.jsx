import { createRoot } from 'react-dom/client'
import React from 'react';
// import router from './Routes/Routes';
import './index.css'

import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';

createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto">
      <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
  </div>
)
