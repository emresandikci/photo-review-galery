import React from 'react';
import styled from 'styled-components';
import { Button, Box } from 'ui';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getRandomImage } from 'store/actions/imagesActions';
import { approveImage, rejectImage } from 'store/actions/viewedImagesActions';
import { IconCheck, IconPlus, Spinner } from 'icons';

export default function ApproveRejectButtons() {
  const { data: randomImage, isLoading: isRandomImageLoading } = useSelector(
    (state) => state.images
  );

  const { data: viewedImages, isLoading: isViewedImagesLoading } = useSelector(
    (state) => state.viewedImages
  );

  const dispatch = useDispatch();

  const onApproved = () => {
    if (viewedImages.some(({ id, isApproved }) => id === randomImage.id && isApproved))
      return getRandomImage(dispatch);

    approveImage(randomImage, dispatch);
  };

  const onRejected = () => {
    if (viewedImages.some(({ id, isRejected }) => id === randomImage.id && isRejected))
      return getRandomImage(dispatch);

    rejectImage(randomImage, dispatch);
  };

  return (
    <ApproveRejectButtonsContainer hasRandomImage={randomImage}>
      <Button
        secondary
        onClick={onRejected}
        disabled={isViewedImagesLoading || isRandomImageLoading}
      >
        {(isViewedImagesLoading || isRandomImageLoading) && <Spinner className="spinner" />}
        {!(isViewedImagesLoading || isRandomImageLoading) && <IconPlus className="icon-reject" />}
      </Button>
      <Button onClick={onApproved} disabled={isViewedImagesLoading || isRandomImageLoading}>
        {(isViewedImagesLoading || isRandomImageLoading) && <Spinner className="spinner" />}
        {!(isViewedImagesLoading || isRandomImageLoading) && <IconCheck className="icon-check" />}
      </Button>
    </ApproveRejectButtonsContainer>
  );
}

const ApproveRejectButtonsContainer = styled(Box)`
  margin-top: 1rem;
  padding: 1rem 0;
  display: ${({ hasRandomImage }) => (hasRandomImage ? 'flex' : 'none')};
  display: flex;
  justify-content: space-around;
  & > button {
    width: 100%;
    max-width: 280px;
    margin: 0 5px;
  }
  & > button .spinner {
    width: 42px;
    height: 42px;
    background: transparent !important;
    rect {
      fill: #fff;
    }
  }
  & > button .icon-reject,
  .icon-check {
    fill: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 25px;
  }
`;
