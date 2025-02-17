import { AudioLines, DollarSign, TrendingUp, Users } from "lucide-react";

export const mockDashboardData = {
  totalUsers: {
    label: "Total Users",
    icon: <Users />,
    value: 13000,
  },
  activeUsers: {
    label: "Active Users",
    icon: <TrendingUp />,
    value: 2800,
  },
  totalStreams: {
    label: "Total Streams",
    icon: <AudioLines />,
    value: 300000,
  },
  revenue: {
    label: "Revenue",
    icon: <DollarSign />,
    value: "$45,000",
  },
  topArtist: {
    label: "Top Artist",
    icon: (
      <img
        src="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
        className="w-full h-full object-cover"
        alt="The Weeknd"
      />
    ),
    value: "The Weeknd",
  },
};

export const mockChartsData = {
  userGrowth: [
    { month: "Jan", total: 2000, active: 500 },
    { month: "Feb", total: 2500, active: 600 },
    { month: "Mar", total: 3000, active: 800 },
    { month: "Apr", total: 3500, active: 1000 },
    { month: "May", total: 4200, active: 1200 },
    { month: "Jun", total: 5000, active: 1400 },
    { month: "Jul", total: 6000, active: 1600 },
    { month: "Aug", total: 7200, active: 1800 },
    { month: "Sep", total: 8500, active: 2000 },
    { month: "Oct", total: 10000, active: 2200 },
    { month: "Nov", total: 11500, active: 2500 },
    { month: "Dec", total: 13000, active: 2800 },
  ],

  revenueDistribution: [
    { source: "Subscriptions", value: 50000 },
    { source: "Ads", value: 25000 },
    { source: "Sponsorships", value: 10000 },
  ],

  topSongs: [
    { name: "Blinding Lights", artist: "The Weeknd", streams: 50000 },
    { name: "Shape of You", artist: "Ed Sheeran", streams: 45000 },
    { name: "Save Your Tears", artist: "The Weeknd", streams: 40000 },
    { name: "Levitating", artist: "Dua Lipa", streams: 35000 },
    { name: "Peaches", artist: "Justin Bieber", streams: 30000 },
  ],
};

export const mockTableData = [
  {
    songName: "Blinding Lights",
    artist: "The Weeknd",
    dateStreamed: "2025-02-10",
    streamCount: 12000,
    userId: "U123",
    cover: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
  },
  {
    songName: "Shape of You",
    artist: "Ed Sheeran",
    dateStreamed: "2025-02-12",
    streamCount: 15000,
    userId: "U456",
    cover: "https://i.scdn.co/image/ab67616d0000b27383e9b06ccd219248b5301264",
  },
  {
    songName: "Save Your Tears",
    artist: "The Weeknd",
    dateStreamed: "2025-02-14",
    streamCount: 11000,
    userId: "U789",
    cover: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
  },
  {
    songName: "Stay",
    artist: "The Kid LAROI",
    dateStreamed: "2025-02-11",
    streamCount: 13000,
    userId: "U321",
    cover: "https://i.scdn.co/image/ab67616d0000b27341e31d6ea1d493dd77933ee5",
  },
  {
    songName: "Bad Habits",
    artist: "Ed Sheeran",
    dateStreamed: "2025-02-13",
    streamCount: 10500,
    userId: "U654",
    cover: "https://i.scdn.co/image/ab67616d0000b273006d456ac41a8dc73a0b67cc",
  },
];
