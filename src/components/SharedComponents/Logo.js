import React from 'react';
import { Image, Icon, keyframes, usePrefersReducedMotion } from '@chakra-ui/react';
import logo from 'Images/logo.svg';
import { FcGlobe } from 'react-icons/fc';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Logo = props => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  return <Icon as={FcGlobe} boxSize={10} animation={animation} src={logo} {...props} />;
};
