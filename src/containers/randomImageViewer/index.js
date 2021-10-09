import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomImage } from 'store/actions/imagesActions';
import { RandomImager, Description, ApproveRejectButtons } from 'components';

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
      <RandomImager />
      <ApproveRejectButtons />
      {!randomImage && (
        <Description>
          Click on the <span>+</span> in order to get image recommendations.
        </Description>
      )}
    </>
  );
}
