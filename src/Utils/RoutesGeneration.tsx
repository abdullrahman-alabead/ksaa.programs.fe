import { RouteObject } from "react-router-dom";
import { LocalesInfo } from "Types";
import Layout from "Layout";
import Homepage from "Routes/Homepage";
import { fetchFormPageContentDjango, fetchHomepageContentDjango } from "./ContentManagement";
import FormPage from "Routes/FormPage";
import { transformKeysToCamelCase } from "Utils";

export const generateLocalizedPath: (localesInfo: LocalesInfo) => RouteObject[] = (localesInfo) => {
  return [
    // Default Locale
    {
      path: "/",
      element: <Layout locale={localesInfo.defaultLocale} />,
      children: [
        {
          path: "",
          element: <Homepage />,
          loader: async () => transformKeysToCamelCase(await fetchHomepageContentDjango(localesInfo.defaultLocale)),
        },
        {
          path: "/register",
          element: <FormPage />,
          loader: async () => transformKeysToCamelCase(await fetchFormPageContentDjango(localesInfo.defaultLocale)),
        },
      ],
    },
    // Other Locales
    ...localesInfo.locales.map((locale) => {
      return {
        path: `/${locale}`,
        element: <Layout locale={locale} />,
        children: [
          {
            path: `/${locale}`,
            element: <Homepage />,
            loader: () => transformKeysToCamelCase(fetchHomepageContentDjango(locale)),
          },
          {
            path: `/${locale}/register`,
            element: <FormPage />,
            loader: () => transformKeysToCamelCase(fetchFormPageContentDjango(locale)),
          },
        ],
      };
    }),
  ];
};
