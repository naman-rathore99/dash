export interface CardItem {
  type: string;
  percentage: string;
  arrow: string;
  graph: string;
  price: string;
}

export interface ChartProps {
  options: any;
}

export interface TableProps {
  data: any[];
}

export interface DropdownProps {
  list: { name: string }[];
}
