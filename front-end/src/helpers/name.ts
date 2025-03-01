import { COUNTRIES } from "@/constants/country";
import { User } from "@/types/user";

export const getFullName = (user: User | null) => {
  if (!user || !user.firstName || !user.lastName) {
    return "N/A";
  }

  const capitalizeWords = (str: string) =>
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  return `${capitalizeWords(user.firstName)} ${capitalizeWords(user.lastName)}`;
};

export const getShortName = (user: User | null) => {
  if (!user || !user.firstName || !user.lastName) {
    return "N/A";
  }
  const firstInitial = user.firstName.charAt(0).toUpperCase();
  const lastInitial = user.lastName.charAt(0).toUpperCase();

  return `${firstInitial}${lastInitial}`;
};

export const getFlag = (user: User | null) => {
  const defaultCountry = COUNTRIES.find(
    (country) => country.code === "VN"
  )!.flag;

  if (!user || !user.profile || !user.profile.country) {
    return defaultCountry;
  }

  const country = COUNTRIES.find(
    (country) => country.code === user.profile.country
  );
  return country ? country.flag : defaultCountry;
};
