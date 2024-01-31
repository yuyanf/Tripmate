'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

export type Destination = {
  id: number;
  destination: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
};

type DestinationsContextType = {
  // Destination
  destinations: Destination[];
  addDestination: () => void;
  deleteDestination: (id: number) => void;
  updateDestination: (id: number, destination: string) => void;
  updateStartDate: (id: number, startDate: Date) => void;
  updateEndDate: (id: number, endDate: Date) => void;

  // People & Relationship

  email?: string;
  updateEmail: (email: string) => void;

  budget?: string;
  updateBudget: (budget: string) => void;
};

const initialDestinations = [
  {
    id: Math.floor(Math.random() * 1000),
    destination: '',
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

  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');

  const addDestination = () => {
    setDestinations((prev) => {
      return [
        ...prev,
        {
          id: Math.floor(Math.random() * 1000),
          destination: '',
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

  const updateDestination = (id: number, destination: string) => {
    setDestinations((prevDestinations) => {
      return prevDestinations.map((dest) => {
        if (dest.id === id) {
          return {
            ...dest,
            destination,
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
      'useDestinations must be used within a DestinationsProvider'
    );
  }
  return context;
};
