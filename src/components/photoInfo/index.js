import React from 'react';
import styled from 'styled-components';
import { Box, Image } from 'ui';

function PhotoInfo({ data }) {
  const { profile_image, name } = data;
  return (
    <InfoContainer className="info-container">
      <Info>
        <Image src={profile_image.small} height={32} width={32} />
        <Box>{name}</Box>
      </Info>
    </InfoContainer>
  );
}

const Info = styled(Box)`
  display: flex;
  align-items: center;
`;

const InfoContainer = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: flex-end;
  position: absolute;
  padding: 0 0 1rem 1rem;
  top: 32px;
  bottom: 32px;
  border-radius: 10px;
  height: ${window.innerHeight - 350};
  width: 100%;
  opacity: 0;
  background-color: rgba(59, 85, 228, 0.7);
  color: #fff;
  & img {
    display: block;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.1);
    margin-right: 5px;
  }

  transition: opacity 700ms;
`;

PhotoInfo.defaultProps = {
  data: [],
};

export default PhotoInfo;
