import React from 'react';
import './Buttons.scss';
import className from 'classnames';

function Button({children, size, color, outLine, fullWidth}){
    return (
        <button className={className('Button', size, color, {outLine, fullWidth})}>{children}</button>
    );
}

/**
 * className 사용하지않고 
 * 
 * <button className={['Button',size].join(' ')}>{children}</button>
 */
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
    size : 'medium',
    color: 'blue'
}


export default Button;