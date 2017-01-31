import React, { PropTypes } from 'react';

const Main = (props) => {
  const Props = props;
  console.log(Props);
  return (
    <div>
      <h1>Main</h1>
      {props.children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
