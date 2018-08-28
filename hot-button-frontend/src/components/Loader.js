import { css } from 'react-emotion';
import {BeatLoader} from 'react-spinners';
import React from 'react'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const Loader = ({ loading, color }) => {
  return (
    <div style={{ paddingTop: 65}}>
    <BeatLoader
        className={override}
        sizeUnit={"px"}
        size={150}
        color={color}
        loading={loading}
      />
    </div>)
}

export default Loader
