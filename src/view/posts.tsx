import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

type DataType = {
  id: string;
  name: string;
  trips: number;
  airline: {
    id: number;
    name: string;
    country: string;
    logo: string;
    slogan: string;
    headquarters: string;
    website: string;
    established: string;
  };
  key: string;
};

const Posts = () => {
  const [data, setData] = useState<any | {}>({});
  const [size] = useState(30);
  const [page, setPage] = useState(1);
  const [has_more, setHasMore] = useState(true);

  const fetchMoreData = async () => {
    let url = `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`;

    const getMoreData = async () => {
      try {
        const res = await axios.get(url);
        console.log(res);
        const { data: newData } = res.data;
        console.log("newData", newData);
        console.log("data", data);
        if (data.length === 0) return setData(newData);
        setData(data.concat(newData));
      } catch (error) {
        console.log(error);
        if (error) {
          <h4 className="font-medium text-center font-poppins">
            Oops! Something went wrong..
          </h4>;
        }
      }
    };
    await getMoreData();

    if (page >= 1) {
      setPage(page + 1);
      setHasMore(true);
    }

    if (size >= 292) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchMoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-center w-screen my-3 md:w-full">
      <InfiniteScroll
        dataLength={data.data !== undefined ? data.data.length : 0}
        next={fetchMoreData}
        hasMore={has_more}
        loader={<CircularProgress color="secondary" />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="flex flex-col flex-wrap items-center w-screen md:justify-center md:flex-row font-poppins">
          {data.map(({ key, id, name, trips, airline }: DataType) => {
            return (
              <div className="w-4/5 m-3 transition-shadow delay-75 border border-gray-100 rounded shadow-md hover:shadow-xl lg:w-1/5">
                <div className="leading-8" key={key}>
                  <div
                    className="flex px-4 py-1 space-x-2 text-2xl font-medium text-gray-900 md:text-xl"
                    id={id}
                  >
                    <span className="font-bold ">Passenger:</span> <p>{name}</p>
                  </div>
                  <div className="">
                    <p className="px-4 py-1 text-sm">{trips}</p>
                    <p className="px-4 py-1 text-sm">{airline.name}</p>
                    <img
                      className="px-4 py-1 text-sm"
                      src={airline.logo}
                      alt=""
                    />
                    <p className="px-4 py-1 text-sm">{airline.country}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Posts;
