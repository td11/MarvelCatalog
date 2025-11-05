import React, { useState } from "react";

interface Props {
  src: string;
  alt: string;
  width: number;
}

export function MarvelImage({ src, alt, width }: Props) {
  const genericImage = "/images/generic_marvel_image.jpg"; // Asume que tienes esta imagen en public

  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  const onError = () => {
    if (!error) {
      setImgSrc(genericImage);
      setError(true);
    }
  };

  return <img src={imgSrc} alt={alt} width={width} onError={onError} />;
}
