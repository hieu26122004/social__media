import { EllipsisVertical, Sun } from "lucide-react";
import { FORECAST_DATA } from "../constants";

const WeatherCard = () => {
  return (
    <article className="bg-weather bg-no-repeat bg-cover bg-center bg-[#5596e6] rounded-xl text-white p-4">
      <header className="flex items-end justify-end">
        <EllipsisVertical aria-hidden="true" className="size-5" />
      </header>

      <section className="py-2">
        <h1 className="text-4xl font-medium text-center">71°F</h1>
        <div className="flex flex-col items-center mt-2">
          <Sun className="size-11" />
          <h4 className="text-[1.4rem] font-medium">Sunny</h4>
        </div>
        <div className="flex items-center justify-center text-sm mt-2 gap-4">
          <span
            className="overflow-hidden whitespace-nowrap text-ellipsis max-w-[100px] md:max-w-[120px]"
            title="Real Feel: 78°"
          >
            Real Feel: 78°
          </span>
          <span
            className="overflow-hidden whitespace-nowrap text-ellipsis max-w-[100px] md:max-w-[120px]"
            title="Rain Chance: 5%"
          >
            Rain Chance: 5%
          </span>
        </div>
      </section>

      {/* <Forecast /> */}

      <Forecast />

      <footer className="flex flex-col items-center justify-center mb-5">
        <span className="text-base font-medium">Sunday, 18th 2018</span>
        <span className="text-xs">Los Angeles, CA</span>
      </footer>
    </article>
  );
};

const Forecast = () => {
  const forecastItemClass = "text-xs text-center";

  return (
    <aside className="my-5 p-4 flex items-center justify-between bg-[#ffffff33] rounded-lg overflow-hidden">
      {FORECAST_DATA.map(({ day, icon: Icon, temp }) => (
        <div key={day} className={forecastItemClass}>
          <span className="uppercase text-[0.6rem] font-medium">{day}</span>
          <Icon className="size-5 m-1" aria-hidden="true" />
          <span>{temp}°</span>
        </div>
      ))}
    </aside>
  );
};

export default WeatherCard;
