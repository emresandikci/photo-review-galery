import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button, Image } from 'ui';
import { IconCheck, IconPlus, Spinner } from 'icons';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomImage } from 'store/actions/imagesActions';
import { approveImage, rejectImage } from 'store/actions/viewedImagesActions';

export default function RandomImageViewer() {
  const dispatch = useDispatch();

  const { data: randomImage } = useSelector((state) => state.images);

  const { data: viewedImages, isLoading: isViewedImagesLoading } = useSelector(
    (state) => state.viewedImages
  );

  useEffect(() => {
    if (!isViewedImagesLoading && viewedImages.length > 0) getRandomImage(dispatch);
  }, [viewedImages]);

  return (
    <>
      <RandomImageViewerContainer>{<EmptyImage />}</RandomImageViewerContainer>
      {randomImage && <ApproveRejectButtons />}
      {!randomImage && (
        <Description>
          Click on the <span>+</span> in order to get image recommendations.
        </Description>
      )}
    </>
  );
}

const ApproveRejectButtons = () => {
  const { data: randomImage, isloading: isRandomImageLoading } = useSelector(
    (state) => state.images
  );
  const { isLoading: isViewedImagesLoading } = useSelector((state) => state.viewedImages);
  const dispatch = useDispatch();

  const onApproved = () => approveImage(randomImage, dispatch);

  const onRejected = () => rejectImage(randomImage, dispatch);

  return (
    <ApproveRejectButtonsContainer>
      <Button
        secondary
        onClick={onRejected}
        disabled={isViewedImagesLoading || isRandomImageLoading}
      >
        {(isViewedImagesLoading || isRandomImageLoading) && <Spinner />}
        {!(isViewedImagesLoading || isRandomImageLoading) && <IconPlus className="icon-plus" />}
      </Button>
      <Button onClick={onApproved} disabled={isViewedImagesLoading || isRandomImageLoading}>
        {(isViewedImagesLoading || isRandomImageLoading) && <Spinner />}
        {!(isViewedImagesLoading || isRandomImageLoading) && <IconCheck className="icon-check" />}
      </Button>
    </ApproveRejectButtonsContainer>
  );
};

const EmptyImage = () => {
  const {
    data: randomImage,
    isLoading: isImagesLoading,
    error: randomImageError,
  } = useSelector((state) => state.images);

  const dispatch = useDispatch();

  const onRequestRandomImage = () => getRandomImage(dispatch);

  if (!randomImage)
    return (
      <EmptyImageContainer onClick={onRequestRandomImage}>
        {!isImagesLoading && !randomImageError && <IconPlus />}
        {!isImagesLoading && !randomImage && randomImageError}
        {isImagesLoading && <Spinner />}
      </EmptyImageContainer>
    );

  const { urls, alt_description } = randomImage;

  return (
    <Image
      src={urls?.regular}
      alt={alt_description}
      height={window.innerHeight - 350}
      width={'100%'}
    />
  );
};

const ApproveRejectButtonsContainer = styled(Box)`
  margin-top: 1rem;
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
  & > button {
    width: 100%;
    max-width: 280px;
    margin: 0 5px;
  }
  & > button .icon-plus,
  .icon-check {
    fill: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 25px;
  }
  .icon-plus {
    transform: rotate(45deg);
  }
`;

const Description = styled(Box)`
  margin: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  & > span {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const RandomImageViewerContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const EmptyImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  height: calc(100vh - 350px);
  width: 100%;
  max-width: 500px;
  cursor: pointer;
  & > svg {
    width: 100%;
    height: 150px;
    fill: ${({ theme }) => theme.colors.darkGray};
  }
  @media (max-width: 400px) {
    & > svg {
      width: 100%;
      height: 100px;
      fill: ${({ theme }) => theme.colors.darkGray};
    }
  }
`;
