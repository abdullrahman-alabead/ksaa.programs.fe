import axios from "axios";
export let api = ''; // https://programs.ksaa.gov.sa/api/

export const fetchGlobalContentDjango = async (locale: string) => {
  try {
    const response = await axios.get(`${api}/header-footer/`, {
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
    const response = await axios.get(`${api}/homepage/`, {
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
    const formContent = await axios.get(`${api}/form_page/`, {
      headers: {
        "Accept-Language": locale,
      },
    });

    const formSections = await axios.get(`${api}/form_sections/`, {
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
    const registerationInfo = await axios.post(`${api}/register/`, userInfo);

    return registerationInfo;
  } catch (err) {
    // console.log(err);
  }
};
