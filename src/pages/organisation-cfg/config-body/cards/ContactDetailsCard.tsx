import { Card } from 'antd';
import { useContext } from 'react';
import { ConfigContext } from '../../../../ConfigContext';
import css from '../../organisation-configuration.module.css';

const ContactDetailsCard = () => {
  const { config, updateConfig, isFieldValid } = useContext(ConfigContext);

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
        <label htmlFor="emailAddress">Email Address:</label>
        <input
          type='text'
          name='emailAddress'
          value={config.contactDetails.emailAddress}
          onChange={handleInputChange}
          placeholder='Email Address'
          className={!isFieldValid('emailAddress') ? css.invalidInput : ''}
        />
        <label htmlFor="telephone">Telephone:</label>
        <input
          type='text'
          name='telephone'
          value={config.contactDetails.telephone}
          onChange={handleInputChange}
          placeholder='Telephone'
          className={!isFieldValid('telephone') ? css.invalidInput : ''}
        />
        {!isFieldValid('telephone') && (
          <p>Telephone number is not validated</p>
        )}
        <label htmlFor="website">Website:</label>
        <input
          type='text'
          name='website'
          value={config.contactDetails.website}
          onChange={handleInputChange}
          placeholder='Website'
          className={!isFieldValid('website') ? css.invalidInput : ''}
        />
      </div>
    </Card>
  );
};

export default ContactDetailsCard;
