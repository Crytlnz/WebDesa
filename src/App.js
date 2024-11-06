import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Navbar';
import Hero from './components/Hero';
import AparatDesa from './components/AparatDesa';
import BeritaDesa from './components/BeritaDesa';
import UMKMDesa from './components/UMKMDesa';
import KegiatanDesa from './components/KegiatanDesa';
import PetaDesa from './components/PetaDesa';
import Footer from './components/Footer';
import { useVillageActivities, useVillageNews, useVillageProfile, useVillageUMKM } from './hooks/useApi';

function App() {
  const { profile, aparattus, boundaryData, loading, error } = useVillageProfile();
  const { news } = useVillageNews();
  const { produkUMKM } = useVillageUMKM();
  const { activities } = useVillageActivities();

  const refs = {
    homeRef: useRef(null),
    apparatusRef: useRef(null),
    newsRef: useRef(null),
    marketRef: useRef(null),
    activitiesRef: useRef(null),
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header
          data={profile}
          scrollToSection={scrollToSection}
          refs={refs}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mx-auto flex-grow">
                <section id="home" ref={refs.homeRef}>
                  <Hero />
                </section>
                <div className='flex gap-6 flex-col'>
                  <section id="aparat-desa" ref={refs.apparatusRef}>
                    {loading ? <p>Loading Aparat Desa...</p> : error ? <p>Error: {error.message}</p> : <AparatDesa data={aparattus} />}
                  </section>
                  <section id="berita-desa" ref={refs.newsRef}>
                    <BeritaDesa data={news} />
                  </section>
                  <section id="umkm-desa" ref={refs.marketRef}>
                    <UMKMDesa data={produkUMKM} />
                  </section>
                  <section id="kegiatan-desa" ref={refs.activitiesRef}>
                    <KegiatanDesa data={activities} />
                  </section>
                  <section id="peta-desa">
                    <PetaDesa dataProfile={profile} dataMap={boundaryData} />
                  </section>
                </div>
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
