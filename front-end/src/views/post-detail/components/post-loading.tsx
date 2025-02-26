import React from "react";

type Props = {
  loading: boolean;
};

const MIN_LOADING_TIME = 3000;

const PostLoading: React.FC<Props> = (props) => {
  const { loading } = props;
  const lastTimeLoaded = React.useRef(0);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (loading && !isLoading) {
      setIsLoading(true);
      lastTimeLoaded.current = Date.now();
    }

    if (isLoading) {
      const timeDiff = Date.now() - lastTimeLoaded.current;
      const remainingTime = MIN_LOADING_TIME - timeDiff;

      if (!loading && timeDiff < MIN_LOADING_TIME) {
        const timeout = setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
        return () => clearTimeout(timeout);
      } else if (!loading && timeDiff >= MIN_LOADING_TIME) {
        setIsLoading(false);
      }
    }
  }, [isLoading, loading]);

  if (isLoading) {
    return (
      <div
        className="absolute inset-0 z-10 flex items-center justify-center bg-primary bg-opacity-75"
        aria-live="polite"
        aria-label="Loading post content"
      >
        <div className="size-14 bg-transparent rounded-full border-4 border-transparent border-t-accent animate-spin" />
      </div>
    );
  }
  return null;
};

export default PostLoading;
