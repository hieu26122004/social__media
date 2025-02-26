import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/carousel";
import LazyImage from "@/components/lazy-image";
import { Image } from "@/types/post";
import React from "react";

type Props = {
  images?: Image[];
};

const PostImages: React.FC<Props> = (props) => {
  const { images } = props;

  if (!images) return null;

  return (
    <main className="flex-1">
      <div className="w-full h-full flex items-center justify-center px-4">
        <Carousel className="w-full relative isolate">
          <CarouselContent>
            {images.map((item) => (
              <CarouselItem key={item.uuid}>
                <div className="h-full flex items-center justify-center">
                  <LazyImage
                    className="max-w-full rounded-lg"
                    src={item.url}
                    alt="image"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </main>
  );
};

export default PostImages;
