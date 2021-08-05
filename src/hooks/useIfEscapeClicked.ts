import React from 'react';

type EffectCallback = () => void;

export const useIfEscapeClicked = (handler: () => void): ReturnType<EffectCallback> => {
  React.useEffect(() => {
    const handleOnEscClick = () => {
      if (!document.fullscreenElement) {
        handler();
      }
    };

    window.addEventListener('fullscreenchange', handleOnEscClick);

    return () => {
      window.removeEventListener('fullscreenchange', handleOnEscClick);
    };
  }, []);
};
