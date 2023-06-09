import { Card } from 'antd';
import { useContext } from 'react';
import { ConfigContext } from '../../../../ConfigContext';
import css from '../../organisation-configuration.module.css';

const OrganizationDetailsCard = () => {
  const { config, updateConfig } = useContext(ConfigContext);

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
      />
      <input
        type='text'
        name='description'
        value={config.description}
        onChange={handleInputChange}
        placeholder='Description'
      />
      <input
        type='text'
        name='bankAccount'
        value={config.bankAccount}
        onChange={handleInputChange}
        placeholder='Bank Account'
      />
      <input
        type='text'
        name='vatAccountNumber'
        value={config.vatAccountNumber}
        onChange={handleInputChange}
        placeholder='VAT Account Number'
      />
      <input
        type='text'
        name='companyAccountNumber'
        value={config.companyAccountNumber}
        onChange={handleInputChange}
        placeholder='Company Account Number'
      />
      </div>
    </Card>
  );
};

export default OrganizationDetailsCard;
