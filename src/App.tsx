import AndroidBackButton from './components/common/AndroidBackButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Dashboard from './components/Dashboard';
import Hypothyroidism from './components/tools/Hypothyroidism/index';
import Parasites from './components/tools/Parasites/index';
import FoodAmount from './components/tools/FoodAmount/index';
import FluidTherapy from './components/tools/FluidTherapy/index';
import Neurological from './components/tools/Neurological/index';
import Echocardiography from './components/tools/Echocardiography/index';
import HeartSizeXray from './components/tools/HeartSizeXray/index';
import Poisoning from './components/tools/Poisoning/index';
import Cushing from './components/tools/Cushing/index';
import Atopy from './components/tools/Atopy/index';

// Legal & Static Pages
import About from './components/legal/About';
import Privacy from './components/legal/Privacy';
import Terms from './components/legal/Terms';
import Contact from './components/legal/Contact';

// Articles
import ArticlesIndex from './components/articles/ArticlesIndex';
import FluidTherapyArticle from './components/articles/FluidTherapyArticle';
import CushingArticle from './components/articles/CushingArticle';
import HypothyroidismArticle from './components/articles/HypothyroidismArticle';
import AtopyArticle from './components/articles/AtopyArticle';
import EchocardiographyArticle from './components/articles/EchocardiographyArticle';
import NeurologicalArticle from './components/articles/NeurologicalArticle';
import ParasitesArticle from './components/articles/ParasitesArticle';
import PoisoningArticle from './components/articles/PoisoningArticle';
import FoodAmountArticle from './components/articles/FoodAmountArticle';
import HeartSizeXrayArticle from './components/articles/HeartSizeXrayArticle';

function App() {
  return (
    <Router>
      <AndroidBackButton />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/hypothyroidism" element={<Hypothyroidism />} />
        <Route path="/parasites" element={<Parasites />} />
        <Route path="/food-amount" element={<FoodAmount />} />
        <Route path="/fluid-therapy" element={<FluidTherapy />} />
        <Route path="/neurological" element={<Neurological />} />
        <Route path="/echocardiography" element={<Echocardiography />} />
        <Route path="/heart-size-xray" element={<HeartSizeXray />} />
        <Route path="/poisoning" element={<Poisoning />} />
        <Route path="/cushing" element={<Cushing />} />
        <Route path="/atopy" element={<Atopy />} />

        {/* Legal & Static Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />

        {/* Article Routes */}
        <Route path="/articles" element={<ArticlesIndex />} />
        <Route path="/articles/fluid-therapy" element={<FluidTherapyArticle />} />
        <Route path="/articles/cushing" element={<CushingArticle />} />
        <Route path="/articles/hypothyroidism" element={<HypothyroidismArticle />} />
        <Route path="/articles/atopy" element={<AtopyArticle />} />
        <Route path="/articles/echocardiography" element={<EchocardiographyArticle />} />
        <Route path="/articles/neurological" element={<NeurologicalArticle />} />
        <Route path="/articles/parasites" element={<ParasitesArticle />} />
        <Route path="/articles/poisoning" element={<PoisoningArticle />} />
        <Route path="/articles/food-amount" element={<FoodAmountArticle />} />
        <Route path="/articles/heart-size-xray" element={<HeartSizeXrayArticle />} />
      </Routes>
    </Router>
  );
}

export default App;
