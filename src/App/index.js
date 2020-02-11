import React from 'react';
import './App.css';
import styled, { css } from 'styled-components';
import WelcomeMessage from './WelcomeMessage';
import AppLayout from './AppLayout';

function App() {
  return (
    <div className='App'>
      <AppLayout>
        <WelcomeMessage />
      </AppLayout>
    </div>
  );
}

export default App;
