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
  isFormValid: () => boolean; // Add the isFormValid function to the context
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
  isFormValid: () => false, // Set a default implementation for the function
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

  const isFormValid = () => {
    const {
      migrationMode,
      code,
      description,
      bankAccount,
      vatAccountNumber,
      companyAccountNumber,
      contactDetails,
      address,
    } = config;

    // Perform validation checks
    const isContactDetailsValid =
      contactDetails.emailAddress.trim() !== '' &&
      contactDetails.telephone.trim() !== '' &&
      contactDetails.website.trim() !== '';

    const isAddressValid =
      address.streetName.trim() !== '' &&
      address.streetNumber !== 0 &&
      address.postalCode !== 0 &&
      address.city.trim() !== '' &&
      address.country.trim() !== '';

    // Determine overall form validity
    const isFormValid =
      migrationMode &&
      code.trim() !== '' &&
      description.trim() !== '' &&
      bankAccount.trim() !== '' &&
      vatAccountNumber.trim() !== '' &&
      companyAccountNumber.trim() !== '' &&
      isContactDetailsValid &&
      isAddressValid;

    return isFormValid;
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig, resetConfig, touched, isFormValid }}>
      {children}
    </ConfigContext.Provider>
  );
};
