import React from "react";

const MIN_LOADING_TIME = 3000;

const useLoading = (isLoading: boolean) => {
  const lastTimeLoaded = React.useRef(0);
  const [visibleLoading, setVisibleLoading] = React.useState(false);

  React.useEffect(() => {
    if (isLoading && !visibleLoading) {
      setVisibleLoading(true);
      lastTimeLoaded.current = Date.now();
    }

    if (visibleLoading) {
      const diff = Date.now() - lastTimeLoaded.current;
      const restTime = MIN_LOADING_TIME - diff;

      if (!isLoading && diff < MIN_LOADING_TIME) {
        const timeout = setTimeout(() => {
          setVisibleLoading(false);
        }, restTime);
        return () => clearTimeout(timeout);
      } else if (!isLoading && diff >= MIN_LOADING_TIME) {
        setVisibleLoading(false);
      }
    }
  }, [isLoading, visibleLoading]);

  return { visibleLoading };
};

export default useLoading;
