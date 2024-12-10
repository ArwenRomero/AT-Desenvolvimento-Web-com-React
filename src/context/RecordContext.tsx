import React, { createContext, useState, ReactNode, useContext } from 'react';

interface FraldaRecord {
  estado: string;
  horario: null | Date;
  observacoes: string;
}

interface SonoRecord {
  inicio: Date | null;
  fim: Date | null;
  observacoes: string;
}

interface AmamentacaoRecord {
  tipo: 'mamadeira' | 'peito';
  quantidade?: number;
  lado?: string;
  inicio: Date | null;
  fim: Date | null;
  observacoes: string;
}

interface Records {
  fralda: FraldaRecord[];
  sono: SonoRecord[];
  amamentacao: AmamentacaoRecord[];
}

export interface RecordContextType {
  records: Records;
  addRecord: (type: keyof Records, record: FraldaRecord | SonoRecord | AmamentacaoRecord) => void;
}

// Prover um valor inicial vazio para evitar conflitos de tipo
export const RecordContext = createContext<RecordContextType | undefined>(undefined);

interface RecordProviderProps {
  children: ReactNode;
}

export const RecordProvider: React.FC<RecordProviderProps> = ({ children }) => {
  const [records, setRecords] = useState<Records>({
    fralda: [],
    sono: [],
    amamentacao: [],
  });

  const addRecord = (
    type: keyof Records,
    record: FraldaRecord | SonoRecord | AmamentacaoRecord
  ) => {
    setRecords((prevRecords) => ({
      ...prevRecords,
      [type]: [...prevRecords[type], record],
    }));
  };

  return (
    <RecordContext.Provider value={{ records, addRecord }}>
      {children}
    </RecordContext.Provider>
  );
};

export const useRecordContext = (): RecordContextType => {
  const context = useContext(RecordContext);
  if (!context) {
    throw new Error('useRecordContext must be used within a RecordProvider');
  }
  return context;
};
