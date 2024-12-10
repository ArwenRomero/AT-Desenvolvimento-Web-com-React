import React, { createContext, useState, ReactNode } from 'react';

interface BabyInfo {
  name: string;
  weight: string;
  length: number;
}

interface BabyInfoContextType {
  babyInfo: BabyInfo;
  setBabyInfo: React.Dispatch<React.SetStateAction<BabyInfo>>;
}

export const BabyInfoContext = createContext<BabyInfoContextType | undefined>(undefined);

interface BabyInfoProviderProps {
  children: ReactNode;
}

export const BabyInfoProvider: React.FC<BabyInfoProviderProps> = ({ children }) => {
  const [babyInfo, setBabyInfo] = useState<BabyInfo>({
    name: 'Lucas',
    weight: '2,34 Kg',
    length: 60,
  });

  return (
    <BabyInfoContext.Provider value={{ babyInfo, setBabyInfo }}>
      {children}
    </BabyInfoContext.Provider>
  );
};
