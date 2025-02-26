import React from "react";
import { Image } from "@/types/post";
import { IMAGES_LAYOUT } from "./layouts/image-layout";
import LazyImage from "../lazy-image";

type Props = {
  description: string;
  images?: Image[];
  id: number;
};

const PostCardBody: React.FC<Props> = (props) => {
  const { description, images, id } = props;
  const ImageLayoutComponent = images ? IMAGES_LAYOUT[images.length] : null;
  return (
    <div className="w-full py-4">
      <p className="text-sm mb-3">{description}</p>
      {ImageLayoutComponent && (
        <ImageLayoutComponent id={id}>
          {images!.map((image, index) => (
            <LazyImage key={index} src={image.url} />
          ))}
        </ImageLayoutComponent>
      )}
    </div>
  );
};

export default PostCardBody;
