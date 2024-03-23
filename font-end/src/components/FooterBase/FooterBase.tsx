import Form from "./Partials/Form";
import GoogleMaps from "./Partials/GoogleMap";
import BottomBar from "./Partials/BottomBar";

export const FooterBase = (): JSX.Element => {
  return (
    <footer className="flex flex-col bg-black">
      <a id="footer" />
      <div className="flex flex-col items-left bg-black rounded-lg pl-20 p-10 ">
        <h2 className="text-3xl font-semibold text-white leading-[4.25rem]">
          How to reach us
        </h2>
        <p className="text-white text-left text-primary-text">
          The customer is very happy, he will be settled.
        </p>
        <div className=" grid grid-cols-2 gap-20 py-10">
          <div className="col-span-2 lg:col-span-1">
            <Form />
          </div>
          <div className="col-span-2 lg:col-span-1 lg:w-auto">
            <GoogleMaps />
          </div>
        </div>
      </div>
      <div>
        <BottomBar />
      </div>
    </footer>
  );
};
