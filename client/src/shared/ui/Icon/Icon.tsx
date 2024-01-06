import React from 'react'
import cn from 'classnames'

export type IconProps = {
  name: string;
  size?: string | number;
  width?: string | number;
  height?: string | number;
  fill?: string;
  className?: string;
};

const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { name, size, width, height, fill, className } = props

  return (
    <svg
      width={size || width || '100%'}
      height={size || height || '100%'}
      style={{ fill }}
      className={cn('icon', `icon-${name}`, className)}
    >
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
