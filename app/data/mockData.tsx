import { ReactNode } from "react";
import {
  Home,
  LayoutGrid,
  Package,
  Users,
  ShoppingCart,
  Boxes,
  Settings,
  LogOut,
} from "lucide-react";

interface NavigationItem {
  name: string;
  icon: ReactNode;
}

interface DropdownItem {
  name: string;
}

interface TableItem {
  id: number;
  product: string;
  order: string;
  status: string;
  Qty: string;
  price: string;
  color: string;
  image: string;
  customer: string;
}

interface ProductItem {
  product: string;
  price: string;
  unit: string;
  revenue: string;
  rating: string;
  image: string;
}

interface MessageItem {
  image: string;
  name: string;
  message: string;
  alt: string;
}

interface CardItem {
  type: string;
  percentage: string;
  arrow: string;
  graph: string;
  price: string;
}

export const navigationList: NavigationItem[] = [
  {
    name: "Home",
    icon: <Home />,
  },
  {
    name: "Dashboard",
    icon: <LayoutGrid />,
  },
  {
    name: "Products",
    icon: <Package />,
  },
  {
    name: "Customer",
    icon: <Users />,
  },
  {
    name: "Order",
    icon: <ShoppingCart />,
  },
  {
    name: "Documents",
    icon: <Boxes />,
  },
];

export const footerNavigation: NavigationItem[] = [
  {
    name: "Settings",
    icon: <Settings />,
  },
  {
    name: "Log out",
    icon: <LogOut />,
  },
];


export const people: DropdownItem[] = [
  { name: "This weekly" },
  { name: "This monthly" },
  { name: "This yearly" },
];

export const graphDropdown: DropdownItem[] = [
  { name: "Daily" },
  { name: "Weekly" },
  { name: "Monthly" },
  { name: "Yearly" },
];

export const resultDropdown: DropdownItem[] = [
  { name: "Full Result" },
  { name: "Quarterly Results" },
];

export const TableData: TableItem[] = [
  {
    id: 12809,
    product: "Apple Macbook Pro...",
    order: "20/03/2023,01:10",
    status: "Waiting Payment",
    Qty: "x1",
    price: "$4.012",
    color: "#DD6107",
    image: "/user2.png",
    customer: "Omar Griffith",
  },
  // ... other table data
];

export const productData: ProductItem[] = [
  {
    product: "Apple Macbook Pro...",
    price: "450",
    unit: "$120",
    revenue: "$51,440",
    rating: "4.82",
    image: "/apple.png",
  },
  // ... other product data
];

export const chatImages: string[] = [
  "/user10.png",
  "/user11.png",
  "/user12.png",
  "/user13.png",
  "/user14.png",
];

export const messages: MessageItem[] = [
  {
    image: "/user2.png",
    name: "Omar Griffith",
    message: "Great service by Dominik... ",
    alt: "user2",
  },
  // ... other messages
];

export const cardData: CardItem[] = [
  {
    type: "Total Profit",
    percentage: "50.43%",
    arrow: "/uparrow.svg",
    graph: "/graph1.svg",
    price: "$ 329.50",
  },
  // ... other card data
];

export const pieChartOptions = {
  chart: {
    type: "pie",
    height: 120,
    width: 128,
  },
  title: false,
  series: [
    {
      name: "Data",
      data: [[23], [13], [62]],
    },
  ],
  // ... other options
};

export const columnChartOptions = {
  chart: {
    type: "column",
    height: 150,
  },
  // ... other options
};
