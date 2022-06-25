import styled from 'styled-components';
import useRipple from 'useripple';

export const RippleButton = ({
  color,
  onClickEvent,
  children,
  className,
  ...rest
}) => {
  const [addRipple, ripples] = useRipple({ background: color });

  return (
    <RippleButtonStyle
      onClick={addRipple}
      className={className}
      style={{ ...rest }}
    >
      {children}
      {ripples}
    </RippleButtonStyle>
  );
};

export const RippleButtonStyle = styled.button`
  position: relative;

  .clickable {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    /* background-color: var(--ocean-green); */
    opacity: 0.1;
  }
`;
