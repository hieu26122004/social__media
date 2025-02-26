import React from "react";
import { cn } from "@/lib/utils";
import { Link, LinkProps } from "react-router-dom";

type ImageComponent = React.ReactElement<{ src: string; alt?: string }>;

export type ImageLinkProps = {
  postId: number;
  children: ImageComponent | ImageComponent[];
  imageId?: string;
} & Omit<LinkProps, "to"> &
  React.HTMLAttributes<HTMLAnchorElement>;

export type ImageLayoutProps = {
  id: number;
  children: ImageComponent | ImageComponent[];
};

const ImageLink: React.FC<ImageLinkProps> = ({
  postId,
  children,
  className,

  ...rest
}) => {
  return (
    <Link
      to={`/post/${postId}`}
      className={cn(
        "block [&>img]:w-full [&>img]:h-full [&>img]:rounded-lg [&>img]:object-cover",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};

export const OneImage: React.FC<ImageLayoutProps> = ({ id, children }) => {
  return (
    <div className="w-full" role="region" aria-label="Single post image">
      <ImageLink postId={id} className="[&>img]:aspect-video">
        {children}
      </ImageLink>
    </div>
  );
};

export const TwoImage: React.FC<ImageLayoutProps> = ({ id, children }) => {
  const images = React.Children.toArray(children) as ImageComponent[];
  return (
    <div
      className="w-full flex gap-2"
      role="region"
      aria-label="Two post images"
    >
      <ImageLink postId={id} className="flex-1 aspect-square">
        {images[0] || null}
      </ImageLink>
      <ImageLink postId={id} className="flex-1 aspect-square">
        {images[1] || null}
      </ImageLink>
    </div>
  );
};

export const ThreeImage: React.FC<ImageLayoutProps> = ({ id, children }) => {
  const images = React.Children.toArray(children) as ImageComponent[];
  return (
    <div
      className="w-full flex flex-col gap-2"
      role="region"
      aria-label="Three post images"
    >
      <div className="w-full flex gap-2">
        <ImageLink postId={id} className="flex-1 aspect-video">
          {images[0] || null}
        </ImageLink>
        <ImageLink postId={id} className="flex-1 aspect-video">
          {images[1] || null}
        </ImageLink>
      </div>
      <ImageLink postId={id} className="[&>img]:max-h-[230px]">
        {images[2] || null}
      </ImageLink>
    </div>
  );
};

export const FourImage: React.FC<ImageLayoutProps> = ({ id, children }) => {
  const images = React.Children.toArray(children) as ImageComponent[];

  return (
    <div
      className="grid grid-cols-2 grid-rows-2 gap-2 w-full max-h-[360px]"
      role="region"
      aria-label="Four post images"
    >
      {images.map((image, index) => (
        <ImageLink
          key={image.props.src || index}
          postId={id}
          className="[&>img]:aspect-square"
        >
          {image}
        </ImageLink>
      ))}
    </div>
  );
};

export const FiveImage: React.FC<ImageLayoutProps> = ({ id, children }) => {
  const images = React.Children.toArray(children) as ImageComponent[];

  return (
    <div
      className="w-full max-h-[450px] flex gap-1.5"
      role="region"
      aria-label="Five post images"
    >
      <div className="flex flex-col gap-1.5 flex-1 basis-[60%]">
        <ImageLink postId={id} className="[&>img]:h-[180px]">
          {images[0] || null}
        </ImageLink>
        <ImageLink postId={id} className="[&>img]:h-[180px]">
          {images[1] || null}
        </ImageLink>
      </div>
      <div className="flex flex-col gap-1.5 flex-1 basis-[40%]">
        <ImageLink postId={id} className="[&>img]:h-[120px]">
          {images[2] || null}
        </ImageLink>
        <ImageLink postId={id} className="[&>img]:h-[120px]">
          {images[3] || null}
        </ImageLink>
        <ImageLink postId={id} className="[&>img]:h-[120px]">
          {images[4] || null}
        </ImageLink>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const IMAGES_LAYOUT: Record<
  number,
  | typeof OneImage
  | typeof TwoImage
  | typeof ThreeImage
  | typeof FourImage
  | typeof FiveImage
> = {
  1: OneImage,
  2: TwoImage,
  3: ThreeImage,
  4: FourImage,
  5: FiveImage,
} as const;
