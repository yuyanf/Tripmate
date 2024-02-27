export enum WITH_WHOM {
  COUPLE = "couple",
  FRIENDS = "friends",
  FAMILY = "family",
}

export enum TRIP_STATUS {
  CREATED = "created",
  DELETED = "deleted",
  ARCHIVED = "archived",
}

export type Trip = {
  id: number;
  title: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  items: Destination[];
  userId: number;
  img?: number;
  numberOfPeople: number;
  relationship?: string;
  totalBudget?: string;
  editors: string[];
  status: TRIP_STATUS;
};

export type Destination = {
  id: number;
  cityId: number | undefined;
  destination: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  items: undefined;
  tripId: number | undefined;
};

export type Itinerary = {
  id: number;
  date: Date | undefined;
  items: ItineraryItem[];
  checkList?: JSON;
  destinationId: number | undefined;
};

export type ItineraryItem = {
  id: number;
  order: number;
  title: string;
  description?: string;
  startTime?: Date;
  endTime?: Date;
  address?: string;
  reservation: JSON;
  itineraryId: number | undefined;
  tags: string[];
  img?: number;
};

export type City = {
  id: number;
  name: string;
  lat: string;
  lng: string;
  country: string | undefined;
  countryCode: string | undefined;
  population: number | undefined;
  items: Destination[];
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  items: Trip[];
};
