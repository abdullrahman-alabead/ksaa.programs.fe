export interface LocalesInfo {
  defaultLocale: string;
  locales: string[];
}

export interface GlobalContent {
  links: {
    link: string;
    text: string;
  };
  address: string;
  phoneNumbers: string[];
  emailAddress: string;
  youtubeLink: string;
  instagramLink: string;
  facebookLink: string;
  twitterLink: string;
  snapchatLink: string;
  whatsappLink: string;
}
