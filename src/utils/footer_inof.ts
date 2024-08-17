export type FooterMenuProps = {
  menu: footerMenuTypes[];
  title: string;
};

type footerMenuTypes = {
  name: string;
  path: string;
};

export const support: footerMenuTypes[] = [
  {
    name: "Help Center",
    path: "help-&-faqs",
  },
  {
    name: "Contact Us",
    path: "contact-us",
  },
];

export const about: footerMenuTypes[] = [
  {
    name: "Our journey",
    path: "our-journey",
  },
];

export const legal: footerMenuTypes[] = [
  {
    name: "Privacy Policy",
    path: "privacy-policy",
  },
  {
    name: "Terms and Conditions",
    path: "terms-conditions",
  },
  {
    name: "Cookies Policy",
    path: "cookies-policy",
  },
  {
    name: "Security Information",
    path: "security-information",
  },
];
