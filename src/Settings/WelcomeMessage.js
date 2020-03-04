import React from 'react';
import { AppContext } from '../App/AppProvider';

export default function({ firstVisit }) {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            Welcome to cryptoDash, please select your facorite coins to begin.{' '}
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
}
