import React from 'react';
import PostView from '../Components/Post/PostView';
import TagList from '../Components/Post/TagList';

const PostViewLayout = () => {
  return (
    <>
      <div className="content_box">
        <PostView />
        <TagList />
      </div>
    </>
  );
};

export default PostViewLayout;
