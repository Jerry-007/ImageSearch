import axios from "axios";
const Search = ({ setImages, config }) => {
  const Searchit = async (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      return;
    }
    let res = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${e.target.value}`,
      config
    );
    setImages(res.data.results);
  };
  const submitted = async (e) => {
    e.preventDefault();
    let res = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${e.target[0].value}`,
      config
    );
    setImages(res.data.results);
    e.target[0].value = "";
  };
  return (
    <div className="container">
      <form
        className="d-flex mt-3 mb-3 justify-content-center"
        onSubmit={submitted}
      >
        <input
          type="text"
          className="form-control w-75 me-3"
          id="query"
          placeholder="Search Images Here . . ."
          onChange={Searchit}
        ></input>
        <button className="btn c-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
