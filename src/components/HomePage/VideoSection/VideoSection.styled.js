import styled from 'styled-components';

import { queries } from '@utils/rwd';

export const Section = styled.section``;

export const PlayButton = styled.button.attrs({ type: 'button' })`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  padding: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.getColor('accent')};
  transition: ${({ theme }) => theme.getTransitions([
    'opacity',
    'filter',
    'transform',
  ])};
  transform: ${({ isActive }) => (isActive ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)')};
  pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};

  > svg {
    fill: currentColor;
    width: 100%;
    height: auto;
  }

  @media ${queries.m} {
    width: 15vw;
    height: auto;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  margin-top: 6em;

  @media ${queries.m} {
    margin-top: 3em;
  }
`;

export const Video = styled.video`
  max-width: 100%;
  border-radius: ${({ theme }) => theme.getRadius('tiny')};
  cursor: pointer;

  :hover {
    + ${PlayButton} {
      filter: brightness(1.1) contrast(1.1);
    }
  }
`;
