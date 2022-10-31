import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Routes from './Routes';
import {AuthProvider} from './AuthProvider';

const Providers = () => {
  return (
    <PaperProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </PaperProvider>
  );
};

export default Providers;
