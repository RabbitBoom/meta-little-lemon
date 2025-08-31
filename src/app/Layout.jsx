import Header from "components/Header";
import HeroSection from "components/HeroSection";
import "./Layout.css";
function Layout({ children }) {
  return (
    <section className="app-layout">
      <Header />
      <HeroSection />
      {children}
      <footer></footer>
    </section>
  );
}

export default Layout;
