export interface IPropsData {
  swPeoplePage: number;
  id: number;
  element: {
    name: string;
    url: string;
  };
  value: number;
  getOnePersonData: Function;
}

export interface IElement {
  name: string;
  url: string;
}
