import { Card } from 'antd';
import { useContext } from 'react';
import { ConfigContext } from '../../../../ConfigContext';
import css from '../../organisation-configuration.module.css';

const AddressCard = () => {
  const { config, updateConfig, isFieldValid } = useContext(ConfigContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateConfig({
      ...config,
      address: {
        ...config.address,
        [name]: value,
      },
    });
  };

  return (
    <Card title='Address'>
      <div className={css['inputs']}>
      <input
        type='text'
        name='streetName'
        value={config.address.streetName}
        onChange={handleInputChange}
        placeholder='Street Name'
        className={!isFieldValid('streetName') ? css.invalidInput : ''}
      />
      <input
        type='number'
        name='streetNumber'
        value={config.address.streetNumber}
        onChange={handleInputChange}
        placeholder='Street Number'
        className={!isFieldValid('streetNumber') ? css.invalidInput : ''}
      />
      <input
        type='number'
        name='postalCode'
        value={config.address.postalCode}
        onChange={handleInputChange}
        placeholder='Postal Code'
        className={!isFieldValid('postalCode') ? css.invalidInput : ''}
      />
      <input
        type='text'
        name='city'
        value={config.address.city}
        onChange={handleInputChange}
        placeholder='City'
        className={!isFieldValid('city') ? css.invalidInput : ''}
      />
      <input
        type='text'
        name='country'
        value={config.address.country}
        onChange={handleInputChange}
        placeholder='Country'
        className={!isFieldValid('country') ? css.invalidInput : ''}
      />
      </div>
    </Card>
  );
};

export default AddressCard;
