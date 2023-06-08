import './App.css';
import { ConfigProvider } from './ConfigContext';
import OrganisationConfiguration from './pages/organisation-cfg/OrganisationConfiguration';

const App = () => {
  return (
    <div className='App'>
      <ConfigProvider>
        <OrganisationConfiguration />
      </ConfigProvider>
    </div>
  );
};

export default App;
