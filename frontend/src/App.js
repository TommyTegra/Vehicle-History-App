// Import dependencies
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages (but only the ones you need).
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design.
// If your schema requires SHORT data input, then use the TABLE design.

import HomePage from './pages/HomePage.js';
import TopicsPage from './pages/TopicsPage.js';
import AddServicePageTable from './pages/AddServicePageTable';
import EditServicePageTable from './pages/EditServicePageTable';
import HistoryPage from './pages/HistoryPage';

// Define the function that renders the content in Routes, using State.
function App() {

  const [service, setServiceToEdit] = useState([])

  useEffect(() => {
    fetch("https://vehicle-history-backend.onrender.com/serviceLogs")
      .then((res) => res.json())
      .then((data) => setServiceToEdit(data.service));
  }, []);


  return (
    <>
      <BrowserRouter>

          <header>
            <h1>
              <img 
                  src="../android-chrome-192x192.png"
                  alt="Initials TN favicon"
                  title="&copy; 2021 The Arizonia Project"
              />
              Tommy Nguyen
            
            </h1>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<HomePage />} />
                    <Route path="/topics" element={<TopicsPage />} /> 
                    <Route path="/history" element={<HistoryPage setService={setServiceToEdit}/>} />
                    <Route path="/addService" element={<AddServicePageTable />} />  
                    <Route path="/editService" element={<EditServicePageTable serviceToEdit={service} />} /> 
                    
                    
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Tommy Nguyen</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;