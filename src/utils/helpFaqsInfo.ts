export type TabesTypes = {
  key: string;
  label: string;
};

export const tabs: TabesTypes[] = [
  { key: "selling-via-auction", label: "Selling via Auction" },
  { key: "buying-at-auction", label: "Buying at Auction" },
  { key: "auction-fees", label: "Auction Fees" },
  // { key: "private-sales", label: "Private Sales" },
  // { key: "managed-service", label: "Managed Service" },
  { key: "shipping", label: "Shipping" },
  { key: "general", label: "General" },
];

export type FaqTypes = {
  title: string;
  category: string;
  id: number;
  content: { id: number; question: string; answer: string }[];
};

const generateDummyContent = (
  count: number
): { id: number; question: string; answer: string }[] => {
  const dummyContent = [];
  for (let i = 1; i <= count; i++) {
    dummyContent.push({
      id: i,

      question: `Question ${i}`,
      answer: `Answer to question ${i}`,
    });
  }
  return dummyContent;
};

export const faq: FaqTypes[] = [
  {
    id: 1,
    title: "Selling via Auction",
    category: "selling-via-auction",
    content: generateDummyContent(10),
  },
  {
    id: 2,
    title: "Buying at Auction",
    category: "buying-at-auction",
    content: generateDummyContent(10),
  },
  {
    id: 3,
    title: "Auction Fees",
    category: "auction-fees",
    content: generateDummyContent(10),
  },
  {
    id: 4,
    title: "Private Sales",
    category: "private-sales",
    content: generateDummyContent(10),
  },
  {
    id: 5,
    title: "Managed Service",
    category: "managed-service",
    content: generateDummyContent(10),
  },
  {
    id: 6,
    title: "Shipping",
    category: "shipping",
    content: generateDummyContent(10),
  },
  {
    id: 7,
    title: "General",
    category: "general",
    content: generateDummyContent(10),
  },
];
