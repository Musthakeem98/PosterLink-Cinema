import MovieList from "@/components/MovieScreen/MovieList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full">
        <img
          src="/assets/banner.png"
          alt="home_image"
          className="mt-40 w-full"
        />
      </div>
      <div className="bg-[#0F0F0F] pl-10 lg:pl-20 pt-20 w-full">
        <p className="text-white text-3xl font-bold font-mono pb-3">
          MOVIE LIBRARY
        </p>
        <p className="text-base text-white pb-10">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br /> sed
          diam nonumy eirmod tempor invidunt ut labore et <br /> dolore magna
          aliquyam erat, sed diam voluptua.{" "}
        </p>
      </div>
      <div className="bg-[#1D1D1D] w-full pt-20">
        <MovieList />
      </div>
    </main>
  );
}
