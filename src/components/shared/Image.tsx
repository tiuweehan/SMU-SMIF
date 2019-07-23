import * as React from 'react';
import { Fade } from '@material-ui/core';

interface Props {
  className?: any;
  src: string;
  alt: string;
  transitionTime: number;
}

const Image: React.FC<Props> = ({ src, alt, className, transitionTime }) => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  return (
    <Fade in={isLoaded} timeout={transitionTime}>
      <img className={className} src={src} alt={alt} onLoad={() => setIsLoaded(true)} />
    </Fade>
  );
};

export default Image;
