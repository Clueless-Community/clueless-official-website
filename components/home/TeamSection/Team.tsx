/* eslint-disable @next/next/no-img-element */
import React from 'react';

type cardProps = {
  photo_url: string;
};
const Card: React.FC<cardProps> = ({ photo_url }) => {
  return (
    <img className="rounded-full grayscale mx-auto" src={photo_url} alt="" />
  );
};

export default Card;
