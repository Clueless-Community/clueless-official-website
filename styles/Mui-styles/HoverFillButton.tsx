import * as React from 'react';
import ButtonUnstyled, {
  ButtonUnstyledProps,
  buttonUnstyledClasses,
} from '@mui/base/ButtonUnstyled';
import { styled, Theme } from '@mui/system';
import { green } from '@mui/material/colors';

const ButtonRoot = React.forwardRef(function ButtonRoot(
  props: React.PropsWithChildren<{}>,
  ref: React.ForwardedRef<any>,
) {
  const { children, ...other } = props;

  return (
    <svg width="200" height="50" {...other} ref={ref}>
      <polygon points="0,50 0,0 200,0 200,50" className="bg" />
      <polygon points="0,50 0,0 200,0 200,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="200" height="50">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  800: '#004C99',
  900: '#1955CA',
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }: { theme: Theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${theme.palette.mode === 'light' ? green[600] : green[100]};
  --hover-color: ${theme.palette.mode === 'light' ? green[200] : green[900]};
  --active-color: ${theme.palette.mode === 'light' ? green[100] : green[800]};

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 3;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: 2px solid ${theme.palette.mode === 'dark' ? green[400] : green[200]};
    outline-offset: 2px;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      line-height: 1.5;
      font-weight: 900;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      text-transform: uppercase;
    }
    & .content:hover{
        color: #fffff
    }

    & svg {
      margin: 0 5px;
    }
  }`,
);

export const SvgButton = React.forwardRef(function SvgButton(
  props: ButtonUnstyledProps,
  ref: React.ForwardedRef<any>,
) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});
