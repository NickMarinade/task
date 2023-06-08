import { Card } from 'antd';
import { useContext } from 'react';
import { ConfigContext } from '../../../../ConfigContext';

const AddressCard = () => {
  const { config, updateConfig } = useContext(ConfigContext);

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
      <input
        type='text'
        name='streetName'
        value={config.address.streetName}
        onChange={handleInputChange}
        placeholder='Street Name'
      />
      <input
        type='number'
        name='streetNumber'
        value={config.address.streetNumber}
        onChange={handleInputChange}
        placeholder='Street Number'
      />
      <input
        type='number'
        name='postalCode'
        value={config.address.postalCode}
        onChange={handleInputChange}
        placeholder='Postal Code'
      />
      <input
        type='text'
        name='city'
        value={config.address.city}
        onChange={handleInputChange}
        placeholder='City'
      />
      <input
        type='text'
        name='country'
        value={config.address.country}
        onChange={handleInputChange}
        placeholder='Country'
      />
    </Card>
  );
};

export default AddressCard;
