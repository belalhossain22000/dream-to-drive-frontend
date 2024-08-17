export type MengaMenuPropsTypes = {
  column1: { name: string; link: string }[];
  column2: { name: string; link: string }[];
};

export const buy_mega_menu: MengaMenuPropsTypes = {
  column1: [
    {
      name: "All Live listings",
      link: "/buy?categroy=All Live",
    },
    {
      name: "Coming Soon",
      link: "/buy?categroy=Coming Soon"
    },
    {
      name: "Recently Sold",
      link: "/buy?categroy=Sold"
    },
    
  ],
  column2: [{
    name: "Porsche",
    link: "/buy?manufacturer=Porsche"
  }, {
    name: "Ferrari",
    link: "/buy?manufacturer=Ferrari"
  }, {
    name: "Mercedes",
    link: "/buy?manufacturer=Mercedes"
  }, {
    name: "Land Rover",
    link: "/buy?manufacturer=Land Rover"
  }],
};


export const sell_mega_menu: MengaMenuPropsTypes = {
  column1: [
    {
      name: "View all",
      link: "sell-with-us",
    },
    {
      name: "Auctions",
      link: "sell-with-us",
    },
  ],
  column2: [
    {
      name: "Porsche",
      link: "sell-with-us?manufacturer=porsche",
    },
    {
      name: "Ferrari",
      link: "sell-with-us?manufacturer=ferrari",
    },
    {
      name: "BMW",
      link: "sell-with-us?manufacturer=bmw",
    },
    {
      name: "Mercedes",
      link: "sell-with-us?manufacturer=mercedes",
    },
    {
      name: "Land Rover",
      link: "sell-with-us?manufacturer=landRover",
    },
    {
      name: "Sell something else?",
      link: "sell-with-us",
    },
  ],
};


