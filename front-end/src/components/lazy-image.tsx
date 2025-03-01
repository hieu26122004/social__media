import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

const LazyImage: React.FC<Props> = ({ src, alt = "", ...rest }) => {
  const placeholderRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (placeholderRef.current)
            observer.unobserve(placeholderRef.current);
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    const currentRef = placeholderRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return isVisible ? (
    <img src={src} alt={alt} loading="lazy" {...rest} />
  ) : (
    <div
      ref={placeholderRef}
      aria-hidden="true"
      className="h-[180px] w-full animate-pulse bg-muted"
    />
  );
};

export default LazyImage;
