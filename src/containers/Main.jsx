import React from 'react';

const Main = (props) => {
  console.log(props.children);
  return (
    <div>
      <h1>Main</h1>
      {props.children}
    </div>
  );
};

export default Main;
