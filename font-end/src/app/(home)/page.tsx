import MovieList from "@/components/MovieScreen/MovieList";
import Slideshow from "@/components/SlidShow/Slideshow";

export default function Home() {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.png",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full pt-40 md:">
        <Slideshow images={images} />
      </div>
      <div className="bg-[#0F0F0F] pl-10 lg:pl-20 pt-20 w-full">
        <h1 className="text-white text-3xl font-bold font-mono pb-3 uppercase">
          Movie Library
        </h1>
        <p className="text-base text-white pb-10">
          The pain itself is very important, the sadipscing elitr <br />
          but they envy the home of the nonumy as much time as labor <br /> it
          was a great pain for some, but it was a pleasure.
        </p>
      </div>
      <div className="bg-[#1D1D1D] w-full pt-20">
        <MovieList />
      </div>
    </main>
  );
}
