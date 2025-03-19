import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <main>
      <header>
        <Navbar />
      </header>

        <Outlet />

      <footer>
        <Footer />
      </footer>
      </main>
    </>
  );
};

export default RootLayout;
