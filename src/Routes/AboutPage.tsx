import useGlobalStore from "../Stores/GlobalStore";

const AboutPage = () => {
  const { currentLocale } = useGlobalStore();
  return <div>{currentLocale}</div>;
};

export default AboutPage;
