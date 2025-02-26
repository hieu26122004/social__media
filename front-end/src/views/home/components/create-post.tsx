import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import { Textarea } from "@/components/common/textarea";
import { getShortName } from "@/helpers/name";
import { ACTION_BUTTONS } from "../constants";
import { Button } from "@/components/common/button";
import useCreatePost from "../hooks/use-create-post";
import { useAppSelector } from "@/store/hook";

const DEFAULT_DESCRIPTION = "";
const DEFAULT_IMAGES: File[] = [];

const CreatePost = () => {
  const { user } = useAppSelector((state) => state.user);
  const [description, setDescription] = React.useState(DEFAULT_DESCRIPTION);
  const [images, setImages] = React.useState<File[]>(DEFAULT_IMAGES);
  const { mutate: createPost, isPending } = useCreatePost();

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileImages = Array.from(e.target.files);
      setImages((prev) => [...prev, ...fileImages]);
    }
  };

  const handleImageRemove = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPost({ description, images });
    setDescription(DEFAULT_DESCRIPTION);
    setImages(DEFAULT_IMAGES);
  };

  const actionButtonClass =
    "inline-flex items-center justify-center bg-transparent hover:bg-muted p-2 rounded-lg cursor-pointer";

  return (
    <article className="w-full bg-primary rounded-lg overflow-hidden">
      <section className="px-4 divide-y my-4">
        <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
          <div className="flex items-start gap-5">
            <Avatar>
              <AvatarFallback>{getShortName(user)}</AvatarFallback>
              <AvatarImage src={user!.profilePicture} alt={user!.lastName} />
            </Avatar>
            <Textarea
              rows={3}
              placeholder="Share your thoughts..."
              className="py-2 text-sm border-none shadow-none resize-none focus-visible:ring-0"
              aria-label="Post content"
              required
              value={description}
              onChange={handleContentChange}
            />
          </div>

          {images.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index}`}
                    className="size-20 md:size-24 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleImageRemove(index)}
                    className="absolute top-1 right-1 bg-destructive text-white rounded-full size-5 flex items-center justify-center"
                    aria-label="Remove image"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex-grow flex items-center gap-4">
              {ACTION_BUTTONS.map((item) =>
                item.label === "upload-image" ? (
                  <label
                    key={item.id}
                    htmlFor={item.label}
                    className={actionButtonClass}
                    aria-label={`${item.label} upload`}
                  >
                    <input
                      id={item.label}
                      type="file"
                      className="hidden"
                      multiple
                      onChange={handleImagesChange}
                    />
                    <item.Icon aria-hidden="true" className="size-6 stroke-1" />
                  </label>
                ) : (
                  <button
                    key={item.id}
                    type="button"
                    className={actionButtonClass}
                    aria-label={item.label}
                    onClick={() => console.log(`Action: ${item.label}`)}
                  >
                    <item.Icon aria-hidden="true" className="size-6 stroke-1" />
                  </button>
                )
              )}
            </div>

            <Button disabled={isPending}>
              {isPending ? "Posting" : "Post"}
            </Button>
          </div>
        </form>
      </section>
    </article>
  );
};

export default CreatePost;
