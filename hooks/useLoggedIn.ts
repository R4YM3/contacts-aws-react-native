import { useState } from 'react';

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return {
    isLoggedIn,
    setIsLoggedIn
  }
}
