import type { CSSProperties } from "react";
import "./IconButton.scss";
import { Link } from "react-router-dom";

type IconButtonProps = {
  asset: string; // asset source
  alt: string; // alt Text
  to: string; // destination URL
  external: boolean; // use Link vs Anchor
  height: number;  // height in pixels
  style?: CSSProperties;
}

const IconButton = (props: IconButtonProps) => {
  const { alt, asset, style, height, to, external } = props;

  const Icon = (
    <div>
      <img
        src={asset}
        alt={alt}
        height={height}
        style={style}
      />
    </div>
  );

  // const Icon = (
  //   <svg>
      
  //   </svg>
  // );
  return (
    <div className="icon-btn d-flex">
      {
        external
        ? (<a href={to}>
            {Icon}
          </a>)
        : (<Link to={to}>
          {Icon}
        </Link>)
      }
    </div>
  )
}
 
export default IconButton;