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
    <button onClick={addRipple} className={className} style={{ ...rest }}>
      {children}
      {ripples}
    </button>
  );
};
