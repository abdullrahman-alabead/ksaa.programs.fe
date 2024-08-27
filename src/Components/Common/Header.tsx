// @ts-nocheck
import { useEffect, useState } from "react";
import LocalizedLink from "./LocalizedLink";
import useGlobalStore from "Stores/GlobalStore";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "@mui/icons-material";

const Header = () => {
  const globalStore = useGlobalStore();
  const navigate = useNavigate();
  const location = useLocation();
  const isArabic = globalStore.currentLocale == "ar";
  // Language Changing Logic

  function changeLang(lang: "en" | "ar") {
    if (lang == globalStore.currentLocale) return;

    useGlobalStore.setState({ currentLocale: lang });
    if (lang == "ar") {
      navigate(`/ar${location.pathname}${location.hash}`);
    } else {
      navigate(location.pathname.slice(3) + location.hash);
    }
    setSidebarIsActive(false);
    return false;
  }

  // Scroll passed certin point detection
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  // Sidebar State
  const [sidebarIsActive, setSidebarIsActive] = useState(false);
  return (
    <>
      <header
        style={{ direction: "ltr" }}
        className={`fixed left-1/2 -translate-x-1/2 flex items-center justify-between gap-8 duration-200 z-[200] py-8 px-[3vw] ${
          isScrolled ? "top-2 bg-green rounded-2xl shadow-normal w-9/10 tab:w-full tab:top-0" : "  top-0 w-full"
        }`}
        id="mainHeader"
      >
        <LocalizedLink href={"/#"}>
          <img
            src={"/logo.webp"}
            alt=""
            width={400}
            height={400}
            className={`h-auto duration-300 ${isScrolled ? "w-[9vw] " : "w-[12vw]"}`}
          />
        </LocalizedLink>
        <ul
          className={`relative flex items-center gap-7 text-white font-medium text-[1.2vw]
       tab:fixed tab:h-screen tab:flex-col tab:justify-center tab:bg-green tab:px-12 duration-300 tab:shadow-lg tab:text-xl ${
         sidebarIsActive ? "tab:translate-x-2" : "tab:translate-x-full"
       } ${isScrolled ? "tab:-top-4 tab:-right-8" : "tab:-top-0 tab:-right-0"} ${
            isArabic ? " tab:items-end" : " tab:items-start"
          }`}
        >
          <div
            className={`flex items-center gap-4 tab:flex-col ${
              isArabic ? "flex-row-reverse  tab:items-end" : " tab:items-start"
            }`}
          >
            {globalStore.globalContent?.headerLinks &&
              globalStore.globalContent?.headerLinks.map(({ link, text }: unknown, i: number) => {
                return (
                  <li
                    key={i}
                    id={link}
                    onClick={() => setSidebarIsActive(false)}
                    className={`text-xs relative border-b-2 border-white border-opacity-0 hover:border-opacity-100 duration-300`}
                  >
                    <LocalizedLink href={link || ""}>{text}</LocalizedLink>
                  </li>
                );
              })}
            {/* <li onClick={() => setSidebarIsActive(false)}>
              <button onClick={() => changeLang(isArabic ? "en" : "ar")}>{isArabic ? "EN" : "AR"}</button>
            </li> */}
          </div>

          <button
            className="absolute top-8 left-8 text-white hidden tab:block z-10"
            onClick={() => setSidebarIsActive(false)}
          >
            <Menu />
          </button>
        </ul>
        <button className="text-white hidden tab:block" onClick={() => setSidebarIsActive(true)}>
          <Menu />
        </button>
      </header>
      <span
        className={`fixed top-0 left-0 w-screen h-screen backdrop-blur z-[100] hidden tab:block duration-300 ${
          sidebarIsActive ? "opacity-100" : "opacity-0  pointer-events-none"
        }`}
      />
    </>
  );
};

export default Header;
