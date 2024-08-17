// CountryContext.tsx

import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';

type Country = {
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
};

interface CountryContextType {
  countries: Country[];
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,idd");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <CountryContext.Provider value={{ countries }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = (): CountryContextType => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountryContext must be used within a CountryProvider");
  }
  return context;
};
