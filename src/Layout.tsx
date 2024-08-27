import { Outlet, useLocation } from "react-router-dom";
import useGlobalStore from "./Stores/GlobalStore";
import { useEffect } from "react";
import { fetchGlobalContentDjango } from "Utils/ContentManagement";
import Header from "Components/Common/Header";
import Footer from "Components/Common/Footer";
import "@fontsource-variable/noto-kufi-arabic";
import { transformKeysToCamelCase } from "Utils";

const Layout = ({ locale }: { locale: string }) => {
  // Update Current Locale
  useGlobalStore.setState({ currentLocale: locale });

  // Fetch Global Content
  useEffect(() => {
    fetchGlobalContentDjango(locale).then((res) => {
      useGlobalStore.setState({ globalContent: transformKeysToCamelCase(res) });
    });
  }, []);

  const location = useLocation();
  useEffect(() => {
    const header = document.getElementById("mainHeader") as HTMLElement;
    // scrolling to section logic
    const hashElementid = location.hash.split("#")[1];
    if (hashElementid) {
      const section = document?.getElementById(hashElementid) as HTMLElement;
      if (section) {
        const offset = section.offsetTop - header.clientHeight;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    } else window.scrollTo(0, 0);
  }, [location.hash, location.pathname]);

  return (
    <main id="layout" className="font-kufi" style={locale.includes("ar") ? { direction: "rtl" } : {}}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
