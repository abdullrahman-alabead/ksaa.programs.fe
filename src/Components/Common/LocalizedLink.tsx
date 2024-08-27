import useGlobalStore from "Stores/GlobalStore";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const LocalizedLink = ({ children, href, className }: { children?: ReactNode | ReactNode[]; href: string; className?: string }) => {
  const globalStore = useGlobalStore();

  return (
    <Link to={`${globalStore.currentLocale != globalStore.defaultLocale ? `/${globalStore.currentLocale}` : ""}${href}`} className={className}>
      {children}
    </Link>
  );
};

export default LocalizedLink;
