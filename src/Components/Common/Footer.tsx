import useGlobalStore from "Stores/GlobalStore";

const Footer = () => {
  const { globalContent } = useGlobalStore();
  return (
    <footer className="text-center py-8 bg-green text-white flex flex-col items-center gap-7">
      <img src="/Images/footerImage.webp" className="w-full max-w-[80vw]" />
      <div className="pt-6 w-full text-center border-t-2 border-t-white max-w-[80vw]">
        <p>{globalContent?.footerLicense}</p>
      </div>
    </footer>
  );
};

export default Footer;
