import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

//khong can lam cai styles vs sizes nay nhung trong cac projet lon co nhieu kieu button khac nhau thi dung rat hay

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];


export default function Button(props) {
  const {children,type,onClick,buttonStyle,buttonSize} = props;

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}
