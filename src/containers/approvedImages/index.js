import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Box, Image } from 'ui';

const images = [
  'https://images.unsplash.com/photo-1632888710957-1b9ec1c41dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ4NDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzMyMTY3NDU&ixlib=rb-1.2.1&q=80&w=200',
  'https://images.unsplash.com/photo-1632854820682-2a7c40e0d3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ4NDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzMyMTY3NDE&ixlib=rb-1.2.1&q=80&w=200',
  'https://images.unsplash.com/photo-1632888710957-1b9ec1c41dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ4NDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzMyMTY3NDU&ixlib=rb-1.2.1&q=80&w=200',
  'https://images.unsplash.com/photo-1632854820682-2a7c40e0d3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ4NDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzMyMTY3NDE&ixlib=rb-1.2.1&q=80&w=200',
  'https://images.unsplash.com/photo-1632888710957-1b9ec1c41dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ4NDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzMyMTY3NDU&ixlib=rb-1.2.1&q=80&w=200',
  'https://images.unsplash.com/photo-1632854820682-2a7c40e0d3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ4NDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzMyMTY3NDE&ixlib=rb-1.2.1&q=80&w=200',
  'https://images.unsplash.com/photo-1632888710957-1b9ec1c41dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ4NDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzMyMTY3NDU&ixlib=rb-1.2.1&q=80&w=200',
  'https://images.unsplash.com/photo-1632854820682-2a7c40e0d3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ4NDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzMyMTY3NDE&ixlib=rb-1.2.1&q=80&w=200',
  'https://images.unsplash.com/photo-1632888710957-1b9ec1c41dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ4NDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzMyMTY3NDU&ixlib=rb-1.2.1&q=80&w=200',
  'https://images.unsplash.com/photo-1632854820682-2a7c40e0d3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ4NDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzMyMTY3NDE&ixlib=rb-1.2.1&q=80&w=200',
  'https://images.unsplash.com/photo-1632888710957-1b9ec1c41dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ4NDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzMyMTY3NDU&ixlib=rb-1.2.1&q=80&w=200',
  'https://images.unsplash.com/photo-1632854820682-2a7c40e0d3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ4NDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzMyMTY3NDE&ixlib=rb-1.2.1&q=80&w=200',
  'https://images.unsplash.com/photo-1632888710957-1b9ec1c41dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ4NDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzMyMTY3NDU&ixlib=rb-1.2.1&q=80&w=200',
  'https://images.unsplash.com/photo-1632854820682-2a7c40e0d3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ4NDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzMyMTY3NDE&ixlib=rb-1.2.1&q=80&w=200',
  'https://images.unsplash.com/photo-1631283795769-084cf3e90924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ4NDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzMyMTcxMjE&ixlib=rb-1.2.1&q=80&w=400',
];

export default function ApprovedImages({ title, ...props }) {
  const { data: approvedImages } = useSelector((state) => state.viewedImages);

  const scrollRef = useRef(null);

  // const onGoRight = () => {
  //   scrollRef.current.scrollTo((scrollRef.current.scrollLeft += 125), 0);
  // };

  // const onGoLeft = () => {
  //   scrollRef.current.scrollTo((scrollRef.current.scrollLeft -= 125), 0);
  // };

  return (
    <ScrollableImageContainer {...props}>
      <Box as="h5">
        {title} {approvedImages?.filter((f) => f.isApproved).length}
      </Box>
      <HorizontalScrollContainer ref={scrollRef}>
        {/* {approvedImages
          ?.filter((f) => f.isApproved)
          ?.map((img, i) => (
            <Image key={i} src={img.urls.thumb} />
          ))} */}

        {images.map((img, i) => (
          <Image key={i} src={img} />
        ))}
      </HorizontalScrollContainer>
    </ScrollableImageContainer>
  );
}

const HorizontalScrollContainer = styled(Box)`
  overflow-y: hidden;
  overflow-x: auto;
  position: relative;
  display: flex;
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

const ScrollableImageContainer = styled(Box)`
  padding: 2rem 0 0 0;
  & > h5 {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;

ApprovedImages.defaultProps = {
  title: 'approved images',
};
