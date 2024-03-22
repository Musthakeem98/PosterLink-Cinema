export default function Movies(): JSX.Element {
  const data = [
    {
      image: "./assets/Image3.png",
      title: "Batman Returns",
      dis: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…",
    },
    {
      image: "./assets/Image1.png",
      title: "Wild Wild West",
      dis: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…",
    },
    {
      image: "./assets/Image2.png",
      title: "The Amazing Spiderman",
      dis: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut…",
    },
  ];

  return (
    <div className="pt-20 grid lg:grid-cols-3 gap-1 pb-20 md:grid-cols-2 sm:grid-cols-1">
      {data.map((item, index) => (
        <div key={index} className="bg-[#1D1D1D] flex flex-col pr-5 pb-7">
          <img src={item.image} alt="" className="h-3/4 object-cover" />
          <div className="bg-[#3C3C3C] flex flex-col justify-center pl-4 h-1/4">
            <p className="text-3xl font-bold text-white pb-3">{item.title}</p>
            <p className="text-xl text-white pr-20">{item.dis}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
