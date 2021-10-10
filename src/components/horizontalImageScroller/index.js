import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowButton, IconContainer, NoImage } from 'components';
import { Box, Image } from 'ui';
import { IconCheck, IconPlus } from 'icons';
import { removeImage } from 'store/actions/viewedImagesActions';
import { useDispatch } from 'react-redux';

export default function HorizontalImageScroller({ title = '', data = [], ...props }) {
  const [approvedCount, setApprovedCount] = useState(data?.filter((d) => d.isApproved).length);

  const scrollRef = useRef(null);

  const dispatch = useDispatch();
  useEffect(() => {
    setApprovedCount(data?.filter((d) => d.isApproved).length);
  }, [data]);

  const onGoRight = () => {
    scrollRef.current.scrollTo((scrollRef.current.scrollLeft += 125), 0);
  };

  const onGoLeft = () => {
    scrollRef.current.scrollTo((scrollRef.current.scrollLeft -= 125), 0);
  };

  const onRemove = (id) => dispatch(removeImage(id));

  return (
    <ScrollableImageContainer {...props}>
      <Box as="h5">
        {title} ({approvedCount})
      </Box>
      {approvedCount === 0 && <NoImage />}
      <HorizontalScrollContainer>
        {approvedCount > 0 && <ArrowButton onClick={onGoLeft} />}
        <HorizontalScrollContainer.Scroller ref={scrollRef}>
          {data
            ?.filter((d) => d.isApproved)
            .map((img, i) => (
              <React.Fragment key={i}>
                <ImageContainer>
                  <Image src={img.urls.thumb} />
                  <IconContainer>
                    <IconCheck className="icon-check" />
                  </IconContainer>
                  <RemoveImageContainer className="remove-image">
                    <IconContainer onClick={() => onRemove(img?.id)} top={null} right={null}>
                      <IconPlus className="icon-reject" />
                    </IconContainer>
                  </RemoveImageContainer>
                </ImageContainer>
              </React.Fragment>
            ))}
        </HorizontalScrollContainer.Scroller>
        {approvedCount > 0 && <ArrowButton direction={'right'} onClick={onGoRight} />}
      </HorizontalScrollContainer>
    </ScrollableImageContainer>
  );
}

const RemoveImageContainer = styled(Box)`
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  height: auto;
  max-height: 70px;
  min-width: 125px;
  max-width: 125px;
  margin: 0 2.5px;
`;

const HorizontalScrollContainer = styled(Box)`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
`;

HorizontalScrollContainer.Scroller = styled(Box)`
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  width: 100%;
`;

const ScrollableImageContainer = styled(Box)`
  padding: 2rem 0 0 0;
  margin-bottom: 2rem;
  & > h5 {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;

const ImageContainer = styled(Box)`
  position: relative;
  :hover {
    .remove-image {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(59, 85, 228, 0.7);
    }
  }
  & > img {
    display: block;
    margin: 0 2.5px;
    object-fit: cover;
    width: 100%;
    height: auto;
    max-height: 70px;
    min-width: 125px;
    max-width: 125px;
    border: 1px solid ${({ theme }) => theme.colors.darkGray};
  }
`;
