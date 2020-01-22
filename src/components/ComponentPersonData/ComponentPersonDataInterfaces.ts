export interface IPropsData {
  swPeoplePage: number
  id: number;
  element: {
    name: string;
    url: string;
  };
  value: number;
  increment: () => void;
  decrement: () => void;
}

export interface IElement {
  name: string;
  url: string;
}
