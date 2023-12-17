import React, { useEffect, useState } from 'react';

export type IconProps = {
  id: string;
  width?: string;
  height?: string;
};

const Icon: React.FC<IconProps> = ({ id, ...props }) => {
  return (
    <svg {...props}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
};

export default Icon;
