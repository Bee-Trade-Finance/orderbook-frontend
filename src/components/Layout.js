import React from 'react';
import {  useWindowSize } from '@react-hook/window-size';

import Header from './Header';
import BottomNavTabs from './BottomNavTabs';

export default function Layout({ children }) {
  const [width, height] = useWindowSize()
  const breakPoint = 767;

  return (
    <div style={{paddingBottom: 50}}>
      <Header />
      {children}
      {width < breakPoint && <BottomNavTabs />}

    </div>
  );
}
