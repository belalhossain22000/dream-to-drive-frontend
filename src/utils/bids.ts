type Bid = {
  id: string;
  carModel: string;
  currentBid: string;
  startingPrice: string;
  bid: string;
  time: string;
  status: "pending" | "processing" | "success" | "failed";
  lastBid: string;
  auctionEndDate: string;
};

export const data: Bid[] = [
  {
    id: "1",
    carModel: "Toyota Camry",
    currentBid: "$15,000",
    startingPrice: "$12,000",
    bid: "$500",
    time: "2h 15m",
    status: "pending",
    lastBid: "July 29, 2024 14:30",
    auctionEndDate: "July 29, 2024 16:00",
  },
  {
    id: "2",
    carModel: "Honda Accord",
    currentBid: "$18,000",
    startingPrice: "$15,000",
    bid: "$600",
    time: "1h 45m",
    status: "processing",
    lastBid: "July 29, 2024 13:00",
    auctionEndDate: "July 29, 2024 15:00",
  },
  {
    id: "3",
    carModel: "Ford Focus",
    currentBid: "$12,000",
    startingPrice: "$10,000",
    bid: "$400",
    time: "3h 20m",
    status: "success",
    lastBid: "July 29, 2024 12:00",
    auctionEndDate: "July 29, 2024 17:00",
  },
];
