import React from 'react';
import './Buttons.scss';

function Button({children, size}){
    return (
        <button className={['Button',size].join(' ')}>{children}</button>
    );
}
/**
 * 클래스이름 동적으로 넣기 
 * className={['Button', size].join(' ')}
 * or
 * className={`Button ${size}`}
 * 
 * 위에꺼가 더멋진듯 ㅋ.ㅋ 
 * 
 */
Button.defaultProps = {
    size : 'medium'
}


export default Button;