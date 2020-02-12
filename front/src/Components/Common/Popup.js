import React from 'react';
import styled from 'styled-components';

const PopupBox = styled.div`
  position: flex;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;
`;

const Popup = () => {
  return (
    <>
      <PopupBox>aasd</PopupBox>
    </>
  );
};

export default Popup;
