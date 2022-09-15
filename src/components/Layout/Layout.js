import Footer from "../Widgets/Footer/Footer";
import Navigation from "../Widgets/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
