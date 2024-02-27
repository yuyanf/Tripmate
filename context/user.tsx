"use client";

import { User } from "@/types";
import { useUser as useClerkUser } from "@clerk/nextjs";
import { Prisma, PrismaClient } from "@prisma/client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type UserContextType = {
  user: User | undefined;
};

//create context
const UserContext = createContext<UserContextType | undefined>(undefined);

//Providers wrap app
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(undefined);

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const { user: clerkUser } = useClerkUser();

  useEffect(() => {
    const prisma = new PrismaClient();

    const fetchDBUsers = async () => {
      try {
        const userData = await prisma.user.findUnique({
          where: {
            email: clerkUser?.primaryEmailAddress?.emailAddress,
          },
        });

        console.log(userData);
      } catch (e) {
        console.log(e);
      }
    };

    fetchDBUsers();
  }, []);

  //export functions
  const providerValue = {
    user,
  };

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

//export custom hooks
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
