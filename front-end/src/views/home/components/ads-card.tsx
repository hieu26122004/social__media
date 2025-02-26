import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import { EllipsisVertical, Gift } from "lucide-react";

const AdsCard = () => {
  const buttonClass =
    "bg-[#151A23] text-xs py-3 px-6 rounded-lg hover:bg-[#1e293b] mt-6";

  return (
    <article className="w-full bg-birthday bg-no-repeat bg-cover bg-center bg-[#41d6c3] rounded-xl text-white p-4">
      <header className="flex items-end justify-between">
        <Gift aria-hidden="true" className="size-6" />
        <EllipsisVertical
          aria-hidden="true"
          className="size-5 cursor-pointer"
        />
      </header>

      <section className="w-full flex flex-col justify-center items-center my-12 overflow-hidden">
        <Avatar className="size-11 mb-4">
          <AvatarFallback>NHH</AvatarFallback>
          <AvatarImage
            src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
            alt="Dan's avatar"
          />
        </Avatar>
        <h1 className="font-medium text-lg">Dan turns 31 today!</h1>
        <p className="text-sm font-normal text-center max-w-[28ch] text-ellipsis overflow-hidden whitespace-nowrap">
          Send him your best wishes by leaving something on his wall.
        </p>
        <button
          type="button"
          className={buttonClass}
          aria-label="Write a message for Dan's birthday"
        >
          Write Message
        </button>
      </section>
    </article>
  );
};

export default AdsCard;
