import React from 'react';
import {  useWindowSize } from '@react-hook/window-size';

import Header from './Header';
import BottomNavTabs from './BottomNavTabs';

export default function Layout({ children }) {
  const [width, height] = useWindowSize()
  const breakPoint = 767;

  return (
    <>
      <Header />
      {children}
      {width < breakPoint && <BottomNavTabs />}

    </>
  );
}
