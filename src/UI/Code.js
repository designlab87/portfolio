import React from 'react';

import Highlight from 'react-highlight'

const Code = (props) => {
  return (
    <Highlight className="javascript animate">
      {props.code}
    </Highlight>
  )
};

export default Code;