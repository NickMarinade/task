import { Alert, Button, Space } from 'antd';
import { useContext, useState } from 'react';
import { ConfigContext } from '../../../ConfigContext';

const TopSection = () => {
  const { config, updateConfig, resetConfig, touched, isFieldValid } = useContext(ConfigContext);
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(false);
  const [cancelButtonDisabled, setCancelButtonDisabled] = useState(false);

  const handleSave = () => {
    // Perform save operation using config object
    updateConfig(config);
    console.log(config);
    setSaveButtonDisabled(true);
    setCancelButtonDisabled(true);
  };

  const handleCancel = () => {
    resetConfig();
  };

  const isFormValid = () => {
    const {
      migrationMode,
      code,
      description,
      bankAccount,
      vatAccountNumber,
      companyAccountNumber,
    } = config;

    // Perform validation checks
    const isContactDetailsValid =
      isFieldValid('emailAddress') &&
      isFieldValid('telephone') &&
      isFieldValid('website');

    const isAddressValid =
      isFieldValid('streetName') &&
      isFieldValid('streetNumber') &&
      isFieldValid('postalCode') &&
      isFieldValid('city') &&
      isFieldValid('country');

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
    <Space direction='horizontal'>
      {touched && !isFormValid() && <Alert message='Form invalid' type='error' />}
      {touched && (
        <Button type='text' onClick={handleCancel} disabled={cancelButtonDisabled}>
          Cancel
        </Button>
      )}
      <Button
        type='primary'
        onClick={handleSave}
        disabled={!touched || !isFormValid() || saveButtonDisabled}
      >
        Save
      </Button>
    </Space>
  );
};

export default TopSection;
