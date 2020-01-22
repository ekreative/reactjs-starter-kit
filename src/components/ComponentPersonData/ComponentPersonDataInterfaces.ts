export interface IPropsData {
  data: {
    name: string
  };
  value: number;
  increment: () => void;
  decrement: () => void;
}

export interface IElement {
  name: string;
  url: string;
}
