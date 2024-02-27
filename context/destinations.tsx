"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { City, Destination, WITH_WHOM } from "@/types";
import { useUser } from "@clerk/nextjs";

type DestinationsContextType = {
  // Destination
  destinations: Destination[];
  addDestination: () => void;
  deleteDestination: (id: number) => void;
  updateDestination: (id: number, destination: string, cityId: number) => void;
  updateStartDate: (id: number, startDate: Date) => void;
  updateEndDate: (id: number, endDate: Date) => void;

  getAllCities: (city: string) => void;
  updateCity: (city: City) => void;
  cities: City[];
  city: City | undefined;

  email?: string;
  updateEmail: (email: string) => void;

  people: number;
  updatePeople: (isPlus: string) => void;

  withWhom?: WITH_WHOM | undefined;
  updateRelation: (withWhom: WITH_WHOM | undefined) => void;

  budget?: string;
  updateBudget: (budget: string) => void;
};

const initialDestinations = [
  {
    id: Math.floor(Math.random() * 1000),
    cityId: undefined,
    items: undefined,
    tripId: undefined,
    destination: "",
    startDate: undefined,
    endDate: undefined,
  },
];

//create context
const DestinationsContext = createContext<DestinationsContextType | undefined>(
  undefined
);

//Providers wrap app
export const DestinationsProvider = ({ children }: { children: ReactNode }) => {
  const [destinations, setDestinations] =
    useState<Destination[]>(initialDestinations);

  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [people, setPeople] = useState(1);
  const [withWhom, setWithWhom] = useState<WITH_WHOM | undefined>(undefined);
  const [cities, setCities] = useState<City[]>([]);
  const [city, setCity] = useState<City | undefined>(undefined);
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const addDestination = () => {
    setDestinations((prev) => {
      return [
        ...prev,
        {
          id: Math.floor(Math.random() * 1000),
          destination: "",
          cityId: undefined,
          items: undefined,
          tripId: undefined,
          startDate: undefined,
          endDate: undefined,
        },
      ];
    });
  };

  const deleteDestination = (id: number) => {
    if (destinations.length === 1) return;
    setDestinations((prev) => prev.filter((dest) => dest.id !== id));
  };

  const updateDestination = (
    id: number,
    destination: string,
    cityId: number
  ) => {
    setDestinations((prevDestinations) => {
      return prevDestinations.map((dest) => {
        if (dest.id === id) {
          return {
            ...dest,
            destination,
            cityId,
          };
        }
        return dest;
      });
    });
  };

  const updateStartDate = (id: number, startDate: Date) => {
    setDestinations((prevDestinations) => {
      return prevDestinations.map((dest) => {
        if (dest.id === id) {
          return {
            ...dest,
            startDate,
          };
        }
        return dest;
      });
    });
  };

  const updateEndDate = (id: number, endDate: Date) => {
    setDestinations((prevDestinations) => {
      return prevDestinations.map((dest) => {
        if (dest.id === id) {
          return {
            ...dest,
            endDate,
          };
        }
        return dest;
      });
    });
  };

  const updateEmail = (email: string) => {
    setEmail(email);
  };

  const updateBudget = (budget: string) => {
    setBudget(budget);
  };

  const updatePeople = (isPlus: string) => {
    if (isPlus === "plus") {
      setPeople((prev) => prev + 1);
    } else {
      setPeople((prev) => prev - 1);
    }
  };

  const updateRelation = (withWhom: WITH_WHOM | undefined) => {
    setWithWhom(withWhom);
  };

  const getAllCities = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/cities`);
      return response.data;
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const updateCity = (city: City) => {
    setCity(city);
  };

  useEffect(() => {
    const fetchCities = async () => {
      const cities = await getAllCities();
      if (cities) setCities(cities);
    };
    fetchCities();
  }, []);

  //export functions
  const providerValue = {
    destinations,
    addDestination,
    deleteDestination,
    updateDestination,
    updateStartDate,
    updateEndDate,
    updateEmail,
    email,
    updateBudget,
    budget,
    getAllCities,
    updateCity,
    cities,
    city,
    people,
    withWhom,
    updateRelation,
    updatePeople,
  };

  return (
    <DestinationsContext.Provider value={providerValue}>
      {children}
    </DestinationsContext.Provider>
  );
};

//export custom hooks
export const useDestinations = () => {
  const context = useContext(DestinationsContext);
  if (!context) {
    throw new Error(
      "useDestinations must be used within a DestinationsProvider"
    );
  }
  return context;
};
