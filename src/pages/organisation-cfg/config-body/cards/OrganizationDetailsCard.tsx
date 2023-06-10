import { Card } from 'antd';
import { useContext } from 'react';
import { ConfigContext } from '../../../../ConfigContext';
import css from '../../organisation-configuration.module.css';

const OrganizationDetailsCard = () => {
  const { config, updateConfig, isFieldValid } = useContext(ConfigContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    updateConfig({
      ...config,
      [name]: inputValue,
    });
  };

  return (
    <Card title='Organization Details'>
      <div className={css['inputs']}> 
      <div className={css['checkboxInput']}>
      <label>Migration Mode</label>
        <input
          type='checkbox'
          name='migrationMode'
          checked={config.migrationMode}
          onChange={handleInputChange}
        />
      </div>
      <input
        type='text'
        name='code'
        value={config.code}
        onChange={handleInputChange}
        placeholder='Code'
        className={!isFieldValid('code') ? css.invalidInput : ''}
      />
      <input
        type='text'
        name='description'
        value={config.description}
        onChange={handleInputChange}
        placeholder='Description'
        className={!isFieldValid('description') ? css.invalidInput : ''}
      />
      <input
        type='text'
        name='bankAccount'
        value={config.bankAccount}
        onChange={handleInputChange}
        placeholder='Bank Account'
        className={!isFieldValid('bankAccount') ? css.invalidInput : ''}
      />
      <input
        type='text'
        name='vatAccountNumber'
        value={config.vatAccountNumber}
        onChange={handleInputChange}
        placeholder='VAT Account Number'
        className={!isFieldValid('vatAccountNumber') ? css.invalidInput : ''}
      />
      <input
        type='text'
        name='companyAccountNumber'
        value={config.companyAccountNumber}
        onChange={handleInputChange}
        placeholder='Company Account Number'
        className={!isFieldValid('companyAccountNumber') ? css.invalidInput : ''}
      />
      </div>
    </Card>
  );
};

export default OrganizationDetailsCard;
