import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const ListBox = styled.div`
  margin-bottom: 15px;
  h2 {
    font-size: 20px;
    text-align: center;
  }
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

const HomeList = ({ title, category, name, date, description }) => {
  return (
    <>
      <Link to={`/post/${category}/${name}`}>
        <ListBox className="content_box">
          <div>
            <h2>{title}</h2>
            <CreateDate>
              <FontAwesomeIcon icon={faCalendar} />
              <p>
                작성일 <span>{date}</span>
              </p>
            </CreateDate>

            <TextBox>{description}</TextBox>
          </div>
        </ListBox>
      </Link>
    </>
  );
};

export default HomeList;
