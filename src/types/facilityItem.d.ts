export type Facility = {
  name: string;
  text: string;
  mapPath: string;
  mapSize: Coordinate;
  clickAreaList: ClickArea[];
};

export type ClickArea = {
  name: string;
  areaType: string;
  coordinates: Coordinate[];
  photoPath: string;
};

export type Coordinate = number[];
