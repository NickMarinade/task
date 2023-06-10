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
  isFieldValid: (fieldName: string) => boolean;
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
  isFieldValid: () => true,
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

  const isFieldValid = (fieldName: string) => {
    const { config } = contextValue;
    const isTouched = touched || config[fieldName as keyof OrganizationConfigType] !== initialConfig[fieldName as keyof OrganizationConfigType];
    
    if (!isTouched) {
      return true;
    }
    
    if (fieldName === 'emailAddress') {
      return config.contactDetails.emailAddress.trim() !== '';
    } else if (fieldName === 'telephone') {
      const isValid = config.contactDetails.telephone.trim().length > 6 && config.contactDetails.telephone.trim().length <= 11;
      return isValid;
    } else if (fieldName === 'website') {
      return config.contactDetails.website.trim() !== '';
    } else if (fieldName === 'streetName') {
      return config.address.streetName.trim() !== '';
    } else if (fieldName === 'streetNumber') {
      return config.address.streetNumber !== 0;
    } else if (fieldName === 'postalCode') {
      return config.address.postalCode !== 0;
    } else if (fieldName === 'city') {
      return config.address.city.trim() !== '';
    } else if (fieldName === 'country') {
      return config.address.country.trim() !== '';
    } else if (fieldName === 'code') {
      return config.code.trim() !== '';
    } else if (fieldName === 'description') {
      return config.description.trim() !== '';
    } else if (fieldName === 'bankAccount') {
      return config.bankAccount.trim() !== '';
    } else if (fieldName === 'vatAccountNumber') {
      return config.vatAccountNumber.trim() !== '';
    } else if (fieldName === 'companyAccountNumber') {
      return config.companyAccountNumber.trim() !== '';
    }

    return true;
  };

  const contextValue = {
    config,
    updateConfig,
    resetConfig,
    touched,
    isFieldValid,
  };

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
};
