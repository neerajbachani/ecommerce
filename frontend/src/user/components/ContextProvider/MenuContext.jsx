import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MenuContext = createContext();

export const useMenu = () => {
  return useContext(MenuContext);
};

export const MenuProvider = ({ children }) => {
  const location = useLocation();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 640);
  const [isOpen, setIsOpen] = useState(location.pathname === '/' && window.innerWidth >= 640);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsLargeScreen(width >= 640);

      if (location.pathname === '/') {
        setIsOpen(width >= 640);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location.pathname]);

  return (
    <MenuContext.Provider value={{ isOpen, toggleDropdown }}>
      {children}
    </MenuContext.Provider>
  );
};

  
  