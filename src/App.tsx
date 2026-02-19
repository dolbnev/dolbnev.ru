import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { LongVideos } from './pages/LongVideos';
import { VerticalVideos } from './pages/VerticalVideos';
import { BernazzoliniProject } from './pages/BernazzoliniProject';
import { SpasiboPapProject } from './pages/SpasiboPapProject';
import { BoomerangMeProject } from './pages/BoomerangMeProject';
import { BoomerangMeShortsProject } from './pages/BoomerangMeShortsProject';
import { AndreyVoronovProject } from './pages/AndreyVoronovProject';
import { AndreyVoronovShortsProject } from './pages/AndreyVoronovShortsProject';
import { BernazzoliniShortsProject } from './pages/BernazzoliniShortsProject';
import { SpasiboPapShortsProject } from './pages/SpasiboPapShortsProject';
import { HanTikTokProject } from './pages/HanTikTokProject';
import { WarmReelsProject } from './pages/WarmReelsProject';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/long-videos" element={<LongVideos />} />
        <Route path="/portfolio/vertical-videos" element={<VerticalVideos />} />
        <Route path="/portfolio/long-videos/bernazzolini" element={<BernazzoliniProject />} />
        <Route path="/portfolio/long-videos/spasibo-pap" element={<SpasiboPapProject />} />
        <Route path="/portfolio/long-videos/boomerangme" element={<BoomerangMeProject />} />
        <Route path="/portfolio/long-videos/andrey-voronov" element={<AndreyVoronovProject />} />
        <Route path="/portfolio/vertical-videos/boomerangme-shorts" element={<BoomerangMeShortsProject />} />
        <Route path="/portfolio/vertical-videos/andrey-voronov-shorts" element={<AndreyVoronovShortsProject />} />
        <Route path="/portfolio/vertical-videos/bernazzolini-shorts" element={<BernazzoliniShortsProject />} />
        <Route path="/portfolio/vertical-videos/spasibo-pap-shorts" element={<SpasiboPapShortsProject />} />
        <Route path="/portfolio/vertical-videos/han-tiktok" element={<HanTikTokProject />} />
        <Route path="/portfolio/vertical-videos/warm-reels" element={<WarmReelsProject />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App