import { Navbar, Footer } from '../components';
import { GetStarted, Insights, WhatsNew } from '../sections';

const Home = () => (
  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
    <Navbar />
    <div className="relative">
      <GetStarted />
      <div className="footer-gradient z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <Insights />
      <div className="footer-gradient z-0" />
    </div>
    <Footer />
  </div>
);

export default Home;
