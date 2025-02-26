export const timeToNow = (dateString: string) => {
  const date = new Date(dateString);

  const formatterDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formatterTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${formatterDate.format(date)}, ${formatterTime.format(date)}`;
};

const rtf = new Intl.RelativeTimeFormat("en-US", {
  style: "long",
  numeric: "auto",
});

type Divisions = {
  amount: number;
  name: Intl.RelativeTimeFormatUnit;
};

const DIVISIONS: Divisions[] = [
  { amount: 60, name: "second" },
  { amount: 60, name: "minute" },
  { amount: 24, name: "hour" },
  { amount: 7, name: "day" },
  { amount: 4.3, name: "week" },
  { amount: 12, name: "month" },
  { amount: 365, name: "year" },
];

export const formatTimeAgo = (date: string) => {
  let diff = Math.abs((Date.now() - new Date(date).getTime()) / 1000);

  for (let i = 0; i < DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (diff < division.amount) {
      return rtf.format(-Math.round(diff), division.name);
    }
    diff /= division.amount;
  }
};
