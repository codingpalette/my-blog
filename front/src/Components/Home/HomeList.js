import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const ListUl = styled.ul`
  li {
    margin-bottom: 15px;
  }
`;

const TitleLink = styled(Link)`
  display: block;
  font-size: 20px;
  text-align: center;
`;

const CreateDate = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  opacity: 0.75;
  p {
    margin-left: 5px;
  }
`;

const TextBox = styled.div`
  font-size: 14px;
`;

const HomeList = ({ title, link, date, text }) => {
  return (
    <>
      <ListUl>
        <li className="content_box">
          <h2>
            <TitleLink to={link}>{title}</TitleLink>
          </h2>
          <CreateDate>
            <FontAwesomeIcon icon={faCalendar} />
            <p>
              작성일 <span>{date}</span>
            </p>
          </CreateDate>

          <TextBox>{text}</TextBox>
        </li>
      </ListUl>
    </>
  );
};

export default HomeList;
