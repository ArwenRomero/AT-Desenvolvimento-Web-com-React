import { createContext, useState, ReactNode } from "react";

interface Alert {
  message: string;
  type: "success" | "error";
  visible: boolean;
}

interface AlertContextProps {
  alert: Alert;
  showAlert: (message: string, type: "success" | "error") => void;
  hideAlert: () => void;
}

export const AlertContext = createContext<AlertContextProps>({} as AlertContextProps);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<Alert>({ message: "", type: "success", visible: false });

  const showAlert = (message: string, type: "success" | "error") => {
    setAlert({ message, type, visible: true });
    setTimeout(() => setAlert({ ...alert, visible: false }), 3000);
  };

  const hideAlert = () => setAlert({ ...alert, visible: false });

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
