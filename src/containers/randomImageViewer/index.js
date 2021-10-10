import React from 'react';
import { useSelector } from 'react-redux';
import { RandomImager, Description, ApproveRejectButtons } from 'components';

export default function RandomImageViewer() {
  const { data: randomImage } = useSelector((state) => state.images);

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
