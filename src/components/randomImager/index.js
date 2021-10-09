import React, { useEffect } from 'react';
import { Box, Image } from 'ui';
import { NoImage, PhotoInfo } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomImage } from 'store/actions/imagesActions';
import styled from 'styled-components';

export default function RandomImager() {
  const {
    data: randomImage,
    isLoading: isImagesLoading,
    error: randomImageError,
  } = useSelector((state) => state.images);

  const { data: viewedImages } = useSelector((state) => state.viewedImages);

  const dispatch = useDispatch();

  const onRequestRandomImage = () => getRandomImage(dispatch);

  useEffect(() => {
    const isRejectedImage =
      !isImagesLoading &&
      viewedImages?.some((img) => img?.id === randomImage?.id && img?.isRejected);

    if (isRejectedImage) {
      getRandomImage(dispatch);
    }
  }, []);

  if (!randomImage)
    return (
      <RandomImageViewerContainer>
        <NoImage
          isLoading={isImagesLoading}
          height={`${window.innerHeight - 350}px`}
          width="100%"
          iconSize={'64px'}
          hasError={randomImageError}
          onClick={onRequestRandomImage}
        />
      </RandomImageViewerContainer>
    );

  const { urls, alt_description, user } = randomImage;

  return (
    <RandomImageViewerContainer hasImage={urls?.regular}>
      <Image
        src={urls?.regular}
        alt={alt_description}
        height={window.innerHeight - 350}
        width={'100%'}
      />
      <PhotoInfo data={user} />
    </RandomImageViewerContainer>
  );
}

const RandomImageViewerContainer = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  width: 500px;
  margin: 0 auto;
  cursor: ${({ hasImage }) => (!hasImage ? 'pointer' : 'initial')};
  :hover {
    .info-container {
      opacity: 1;
    }
  }
`;
