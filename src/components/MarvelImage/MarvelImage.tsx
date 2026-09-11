import React, { useState, useEffect } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

export function MarvelImage({ src, alt, className = "", width, height, style }: Props) {
  const genericImage = "/images/generic_marvel_image.jpg";
  const [imgSrc, setImgSrc] = useState<string>(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={style}
      loading="lazy"
      onError={() => {
        if (imgSrc !== genericImage) {
          setImgSrc(genericImage);
        }
      }}
    />
  );
}

