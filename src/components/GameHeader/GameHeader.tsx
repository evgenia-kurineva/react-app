import React from 'react';
import ImageIcon from '../ImageIcon/ImageIcon';
import soundImg from '../../assets/img/volume.svg';
// import muteImg from '../../assets/img/mute.svg';
import notFullscreenImg from '../../assets/img/notfullscreen.svg';
import fullscreenImg from '../../assets/img/fullscreen.svg';
import CloseBtn from '../CloseBtn/CloseBtn';
import { Colors, Sizes } from '../../types/types';
import { useIfEscapeClicked } from '../../hooks/useIfEscapeClicked';

import styles from './GameHeader.module.scss';

const GameHeader = (): JSX.Element => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  React.useEffect(() => {
    if (!isFullscreen) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    } else {
      document.documentElement.requestFullscreen().catch((error) => {
        // eslint-disable-next-line no-console
        console.log(`Error attempting to enable full-screen mode: ${error.message} (${error.name})`);
      });
    }
  }, [isFullscreen]);

  useIfEscapeClicked(() => setIsFullscreen(false));

  const onVolumeBtnClick = () => {
    // if (soundVolume === volume) {
    //   dispatch(setSoundsVolume(0));
    // } else {
    //   dispatch(setSoundsVolume(volume));
    // }
  };

  const onFullscreenBtnClick = () => {
    setIsFullscreen((isFullScreen) => !isFullScreen);
  };

  return (
    <header className={styles.header}>
      <div role="button" tabIndex={0} onClick={onVolumeBtnClick}>
        <ImageIcon src={soundImg} alt="громкость" size={Sizes.SMALL} color={Colors.BLACK} />
      </div>
      <div className={styles.container}>
        <div className={styles.volume} tabIndex={0} role="button" onClick={onFullscreenBtnClick}>
          {isFullscreen ? (
            <ImageIcon src={notFullscreenImg} alt="экран" size={Sizes.SMALL} color={Colors.BLACK} />
          ) : (
            <ImageIcon src={fullscreenImg} alt="экран" size={Sizes.SMALL} color={Colors.BLACK} />
          )}
        </div>
        <CloseBtn />
      </div>
    </header>
  );
};

export default GameHeader;
