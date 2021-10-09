import React from 'react';
import { HorizontalImageScroller } from 'components';
import { useSelector } from 'react-redux';

function ApprovedImages() {
  const { data: approvedImages } = useSelector((state) => state.viewedImages);

  return <HorizontalImageScroller title="approved images" data={approvedImages} />;
}

export default ApprovedImages;
