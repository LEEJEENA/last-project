import styled, { css } from "styled-components";
// import { colors } from "../styles/color";

const Button = ({
  imgUrl,
  on,
  font,
  outline,
  border,
  margin,
  height,
  width,
  btnType,
  type,
  onClick,
  children,
  disabled,
  svgType,
  name,
  active,
  color,
  tab,
  backgroundColor = 'transparent',
  padding,
}) => {
  return (
    <StButton
      font={font}
      outline={outline}
      border={border}
      margin={margin}
      height={height}
      width={width}
      type={type}
      onClick={onClick}
      btnType={btnType}
      disabled={disabled}
      on={on}
      imgUrl={imgUrl}
      svgType={svgType}
      name={name}
      active={active}
      color={color}
      tab={tab}
      backgroundColor={backgroundColor}
      padding={padding}
    >
      {children}
    </StButton>
  );
};

export default Button;

const StButton = styled.button`
  cursor: pointer;
  color: black;
  ${(props) => {
    return (
      props.btnType === "submit" &&
      css`
        width: 90px;
        border: none;
        line-height: 36px;
        font-weight: 400;
        font-size: 14px;
        color: #fff;
        background-color: ${(props) => (props.on === "on" ? "#6C88FF" : "#2D4FDA")};
        cursor: pointer;
        border-radius: 30px;
        padding: 5px 10px;
      `
    );
  }}
  ${(props) => {
    return (
      props.btnType === "svg" &&
      css`
        height: 100%;
        background-color: ${(props) => props.backgroundColor};
        border: none;
        border-radius: 10px;
        color :${(props) => props.color}; 
        margin:${(props) => props.margin};
        padding :${(props) => props.padding};
        display: flex;
      `
    );
  }}
  ${(props) => {
    return (
      props.btnType === "modal" &&
      css`
      
      `
    );
  }}
  
  ${(props) => {
    return (
      props.btnType === "login" &&
      css`
        width: 100%;
        height: 60px;
        padding: 15px 0;
        box-sizing: border-box;

        background: #ffffff;
        border: 1px solid #b5b5b5;

        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        span {
          display: block;
          font-size: 16px;
          height: 16px;
          line-height: 0.9;
        }
        div {
          position: absolute;
          top: 50%;
          left: 15px;
          transform: translate(0, -50%);
          width: 28px;
          height: 28px;
          img {
            width: 100%;
          }
        }
      `
    );
  }}
  ${(props) => {
    return (
      props.btnType === "tabMenu" &&
      css`
        width: 100%;
        height: 44px;
        box-sizing: border-box;Participation
        font-weight: 600;
        font-size: 18px;
        box-sizing: border-box;
        border: none;
        background-color: ${({ active, name }) => (active === name ? "#2D4FDA" : "#F4F5F7")};
        /* border-bottom: ${({ active, name }) => (active === name ? "6px solid #2D4FDA" : "6px solid #f2f2f2")}; */
        color: ${({ active, name }) => (active === name ? "#fff" : "#A7ABBB")};
      `
    );
  }}
  
`;
