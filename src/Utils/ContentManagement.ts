import axios from "axios";

export const fetchGlobalContentDjango = async (locale: string) => {
  try {
    const response = await axios.get("https://programs.ksaa.gov.sa/api/header-footer/", {
      headers: {
        "Accept-Language": locale,
      },
    });
    return response.data[0];
  } catch (err) {
    // console.log(err);
  }
};

export const fetchHomepageContentDjango = async (locale: string) => {
  try {
    const response = await axios.get("https://programs.ksaa.gov.sa/api/homepage/", {
      headers: {
        "Accept-Language": locale,
      },
    });
    return response.data[0];
  } catch (err) {
    // console.log(err);
  }
};

export const fetchFormPageContentDjango = async (locale: string) => {
  try {
    const formContent = await axios.get("https://programs.ksaa.gov.sa/api/form_page/", {
      headers: {
        "Accept-Language": locale,
      },
    });

    const formSections = await axios.get("https://programs.ksaa.gov.sa/api/form_sections/", {
      headers: {
        "Accept-Language": locale,
      },
    });

    return {
      ...formContent.data[0],
      formSections: formSections.data,
    };
  } catch (err) {
    // console.log(err);
  }
};

export const createRegisteredUser = async (userInfo: any) => {
  try {
    const registerationInfo = await axios.post("https://programs.ksaa.gov.sa/register/", userInfo);

    return registerationInfo;
  } catch (err) {
    // console.log(err);
  }
};
