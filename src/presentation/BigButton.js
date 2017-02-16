import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const BigButton = (props) => (
  <div>
    <RaisedButton label={props.label} secondary={true} style={style} />
  </div>
);

export default BigButton
