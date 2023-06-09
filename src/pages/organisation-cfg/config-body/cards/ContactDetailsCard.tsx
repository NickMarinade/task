import { Card } from 'antd';
import { useContext } from 'react';
import { ConfigContext } from '../../../../ConfigContext';
import css from '../../organisation-configuration.module.css';

const ContactDetailsCard = () => {
  const { config, updateConfig } = useContext(ConfigContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateConfig({
      ...config,
      contactDetails: {
        ...config.contactDetails,
        [name]: value,
      },
    });
  };

  return (
    <Card title='Contact Details'>
      <div className={css['inputs']}>
      <input
        type='text'
        name='emailAddress'
        value={config.contactDetails.emailAddress}
        onChange={handleInputChange}
        placeholder='Email Address'
      />
      <input
        type='text'
        name='telephone'
        value={config.contactDetails.telephone}
        onChange={handleInputChange}
        placeholder='Telephone'
      />
      <input
        type='text'
        name='website'
        value={config.contactDetails.website}
        onChange={handleInputChange}
        placeholder='Website'
      />
      </div>
    </Card>
  );
};

export default ContactDetailsCard;
