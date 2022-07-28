import React, { JSXElementConstructor } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { Fade } from "@mui/material";

export const ModalTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<
      JSX.Element,
      string | JSXElementConstructor<any>
    >;
  },
  ref: React.Ref<JSX.Element>
) {
  return <Fade ref={ref} {...props} />;
});
