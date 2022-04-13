import Navigation from "../Widgets/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
