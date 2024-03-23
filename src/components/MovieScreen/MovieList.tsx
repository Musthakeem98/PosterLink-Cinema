"use client";
import { SetStateAction, useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

export default function MovieList(): JSX.Element {
  const [data, setData] = useState([
    {
      image: "./assets/Image3.png",
      title: "Batman Returns",
      dis: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…",
      link: "https://www.tvmaze.com/shows/481/the-batman",
      isClicked: false,
    },
    {
      image: "./assets/Image1.png",
      title: "Wild Wild West",
      dis: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…",
      link: "https://www.tvmaze.com/shows/3515/the-wild-wild-west",
      isClicked: false,
    },
    {
      image: "./assets/Image2.png",
      title: "The Amazing Spiderman",
      dis: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut…",
      link: "https://www.tvmaze.com/shows/1611/spider-man",
      isClicked: false,
    },
  ]);
  const [isInputEntered, setInputEntered] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);

  const [searchValue, setSearchValue] = useState(
    "Search title and add to grid"
  );

  useEffect(() => {
    if (isInputEntered) {
      // Fetch data from the TVMaze API based on search value
      axios
        .get(`http://api.tvmaze.com/search/shows?q=${searchValue}`)
        .then((response) => {
          // Extract relevant information from the response
          const modifiedData = response.data.map((item) => ({
            image: item.show.image.medium,
            title: item.show.name,
            dis: truncateDescription(item.show.summary),
            link: item.show.url,
            isClicked: false,
          }));
          console.log("responce: ", modifiedData);
          // Set the modified data into state
          setData(modifiedData);
        })
        .catch((error) => {
          console.error("Error fetching data from TVMaze API:", error);
        });
    }
  }, [searchValue]);

  const handleButtonClick = (index: number) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index].isClicked = true;
      return newData;
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setInputEntered(true);
  };

  const truncateDescription = (description: string): string => {
    const maxLength = 150; // Maximum length of the description
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "..."; // Truncate description
    }
    return description; // Return full description if it's not too long
  };

  return (
    <div>
      <a id="movie"></a>
      <div className="grid grid-cols-1 gap-6 pl-10 lg:pl-20 lg:grid-cols-2">
        <div className="">
          <p className="text-4xl font-[Alternate] text-white font-bold justify-self-start pb-5">
            Collect Your Favourites
          </p>
        </div>
        <div className="justify-self-start pr-10 lg:justify-self-end flex items-center">
          <div className="flex items-center border rounded-md overflow-hidden">
            <svg
              className="w-6 h-6 text-gray-400 mr-2 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-5.2-5.2m-8.8 0a8 8 0 1 1 8.8-8.8 8 8 0 0 1-8.8 8.8z"
              />
            </svg>
            <input
              type="text"
              className="py-2 px-4 bg-transparent text-white w-full outline-none"
              placeholder={searchValue}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="m-10 lg:ml-20 border-t-2 border-[#fff] border-solid  ">
        <div className="pt-20 grid lg:grid-cols-3 gap-1 pb-20 md:grid-cols-2 sm:grid-cols-1">
          {data.map((item, index) => (
            <div key={index} className="bg-[#1D1D1D] flex flex-col pr-5 pb-7">
              <img src={item.image} alt="" className="h-3/4 object-cover" />
              <div className="bg-[#3C3C3C] flex flex-col justify-center pt-5 pl-4 h-1/4">
                <p className="text-3xl font-bold text-white pb-3">
                  {item.title}
                </p>
                <div
                  className="text-sm text-white pb-6 pr-3"
                  dangerouslySetInnerHTML={{ __html: item.dis }}
                />
                <div className="flex justify-center items-center">
                  {!item.isClicked && (
                    <Button
                      variant="contained"
                      size="large"
                      href={item.link}
                      onClick={() => handleButtonClick(index)}
                      endIcon={<VisibilityIcon />}
                      style={{
                        backgroundColor: "#A52A2A",
                        width: "80%",
                        justifyContent: "center",
                      }}
                    >
                      Watch now
                    </Button>
                  )}
                  {item.isClicked && (
                    <LoadingButton
                      loading
                      loadingPosition="start"
                      startIcon={<SaveIcon />}
                      variant="outlined"
                      style={{
                        backgroundColor: "#A52A2A",
                        width: "80%",
                        justifyContent: "center",
                        color: "#fff",
                      }}
                    >
                      Loading
                    </LoadingButton>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
