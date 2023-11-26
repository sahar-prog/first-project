export interface House {
  animal: string;
  commonRoom: string;
  element: string;
  founder: string;
  ghost: string;
  heads: Head[];
  houseColours: string;
  id: string;
  name: string;
  traits: Trait[];
}

export interface Head {
  firstName: string;
  id: string;
  lastName: string;
}

export interface Trait {
  id: string;
  name: string;
}
