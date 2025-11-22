import type { CSSProperties, ReactNode } from "react";
import "./IconButton.scss";
import { Link } from "react-router-dom";

type IconButtonProps = {
  // asset: string; // asset source
  alt: string; // alt Text
  to: string; // destination URL
  external: boolean; // use Link vs Anchor
  height: number;  // height in pixels
  style?: CSSProperties;
  children: ReactNode
}

const IconButton = (props: IconButtonProps) => {
  const { style, to, external, children } = props;

  return (
    <div
      className="icon-btn d-flex a-i-center j-c-center"
      style={style}
    >
      {
        external
        ? (<a href={to}>
            {children}
          </a>)
        : (<Link to={to}>
          {children}
        </Link>)
      }
    </div>
  )
}
 
export default IconButton;