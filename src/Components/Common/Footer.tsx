import useGlobalStore from "Stores/GlobalStore";

const Footer = () => {
  const { globalContent } = useGlobalStore();
  return (
    <footer className="text-center py-5 bg-green text-white">
      <p>{globalContent?.footerLicense}</p>
    </footer>
  );
};

export default Footer;
