import Image from "./image";
import { useState } from "react";
import axios from "axios";

const MainPage = ({ images, setImages, config }) => {
  const [page, setPage] = useState(1);
  let imageList;
  const nextPage = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/photos?page=${page + 1}&per_page=20`,
      config
    );
    setPage(page + 1);
    setImages(res.data);
  };
  const prevPage = async () => {
    if (page < 2) return;

    const res = await axios.get(
      `https://api.unsplash.com/photos?page=${page - 1}&per_page=20`,
      config
    );
    setPage(page - 1);
    setImages(res.data);
  };
  if (images.length < 1) {
    imageList = <div className="text-center mt-5 fs-1">Loading . . . . .</div>;
  } else {
    imageList = (
      <>
        <div className="container d-flex flex-wrap justify-content-center">
          {images.map((image) => (
            <Image key={image.id} image={image} />
          ))}
        </div>
        <div className="d-flex flex-row justify-content-between fs-4 mb-3 mt-3">
          <div className="c-link ms-5" onClick={prevPage}>
            Prev
          </div>
          <div>{page}</div>
          <div className="c-link me-5" onClick={nextPage}>
            Next
          </div>
        </div>
      </>
    );
  }
  return  imageList;
};

export default MainPage;
