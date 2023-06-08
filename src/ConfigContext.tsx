import React, { createContext, useState } from 'react';
import { OrganizationConfigType } from './types/organisation-config';

interface ConfigProviderProps {
  children: React.ReactNode;
}

export const ConfigContext = createContext<{
  config: OrganizationConfigType;
  updateConfig: (newConfig: OrganizationConfigType) => void;
  resetConfig: () => void;
  touched: boolean;
}>({
  config: {
    migrationMode: false,
    code: '',
    description: '',
    bankAccount: '',
    vatAccountNumber: '',
    companyAccountNumber: '',
    contactDetails: {
      emailAddress: '',
      telephone: '',
      website: '',
    },
    address: {
      streetName: '',
      streetNumber: 0,
      postalCode: 0,
      city: '',
      country: '',
    },
  },
  updateConfig: () => {},
  resetConfig: () => {},
  touched: false,
});

export const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
  const initialConfig: OrganizationConfigType = {
    migrationMode: false,
    code: '',
    description: '',
    bankAccount: '',
    vatAccountNumber: '',
    companyAccountNumber: '',
    contactDetails: {
      emailAddress: '',
      telephone: '',
      website: '',
    },
    address: {
      streetName: '',
      streetNumber: 0,
      postalCode: 0,
      city: '',
      country: '',
    },
  };

  const [config, setConfig] = useState<OrganizationConfigType>(initialConfig);
  const [touched, setTouched] = useState<boolean>(false);

  const updateConfig = (newConfig: OrganizationConfigType) => {
    setConfig(newConfig);
    setTouched(true);
  };

  const resetConfig = () => {
    setConfig(initialConfig);
    setTouched(false);
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig, resetConfig, touched }}>
      {children}
    </ConfigContext.Provider>
  );
};
