import React from "react";
import useLoading from "@/hooks/use-loading";

type Props = {
  loading: boolean;
};

const Loading: React.FC<Props> = (props) => {
  const { loading } = props;
  const { visibleLoading } = useLoading(loading);

  if (visibleLoading) {
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

export default Loading;
