export default function BottomBar(): JSX.Element {
  return (
    <div className="bg-[#1D1D1D] pl-20 pr-10 p-5">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center lg:justify-between pb-4">
        <div className="flex-grow md:lg:flex-grow-0 lg:flex-grow-0 justify-center text-center lg:mr-8 lg:text-left md:text-left">
          <p className="text-white">IT Group</p>
          <p className="text-white text-xs"> C. Salvador de Madariaga, 1 </p>
          <p className="text-white text-xs">28027 Madrid</p>
          <p className="text-white text-xs"> Spain</p>
        </div>
        <div className="flex items-center lg:items-end justify-center lg:justify-end">
          <p className="text-white pr-4 lg:pr-8">Follow us on</p>
          <div className="flex flex-raw ">
            <a href="" className="mr-1 lg:mr-5 lg:ml-0 lg:mt-2">
              <img
                src="/assets/icons/x.svg"
                alt="Twitter"
                className="w-6 h-6 fill-current text-white hover:opacity-75 cursor-pointer transition-opacity duration-300"
              />
            </a>
            <a href="" className="ml-5 lg:ml-0 lg:mt-2">
              <img
                src="/assets/icons/youtube.svg"
                alt="YouTube"
                className="w-6 h-6 fill-current text-white hover:opacity-75 cursor-pointer transition-opacity duration-300"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between md:flex-row  lg:flex-row flex-col border-t-2 border-[#363636] border-solid">
        <div className="pt-5 flex items-center justify-center md:items-start lg:items-start">
          <p className="text-[#B7B7B7] text-xs text-center">
            Copyright © 2022 IT Hotels. All rights reserved.
          </p>
        </div>
        <div className="pt-5 flex items-center justify-center lg:items-end md:items-start">
          <p className="text-[#B7B7B7] text-xs text-center">
            Photos by Felix Mooneeram{" "}
            <a className="underline"> Serge Kutuzov </a> on Unsplash
          </p>
        </div>
      </div>
    </div>
  );
}
