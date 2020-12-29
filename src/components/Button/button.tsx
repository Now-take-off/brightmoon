import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import classnames from 'classnames'
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
};
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
};
 interface BaseButtonProps {
  children: React.ReactNode,
  className?:string,
  size?:ButtonSize,
  btnType?:ButtonType,
  disabled?:boolean,
  href?:string
};
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button:React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    size,
    btnType,
    disabled,
    href,
    ...restProps
  } = props
  const classes = classnames('btn',className,{
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]:size,
    'disabled':(btnType === ButtonType.Link && disabled)
  });
  if(btnType === ButtonType.Link && href) {
      return (
        <a 
          className={classes}
          href={href}
          {...restProps}
        >
          {children}
        </a>
      )
  } else {
    return (
      <button 
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}
Button.defaultProps =  {
  btnType: ButtonType.Default,
  disabled:false
};
export default Button