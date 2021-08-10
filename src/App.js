import "./App.css";
import { useState, useEffect } from "react";
import Searchbar from "./components/searchBar";
import { ImageGalleryList } from "./components/ImageGallery";
import { Button } from "./components/button";
import { photoApi } from "./services/photoApi";
import Modal from "./components/modal";
import { Loader } from "./components/loader";

const App = () => {
  const [SearchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [arrayPhotos, setArrayPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bigPicture, setBigPicture] = useState("");
  const [showModal, setShowModal] = useState(false);

  // const componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.SearchValue !== this.state.SearchValue) {
  //     this.addPagePhotos();
  //   }
  // };

  const addPagePhotos = () => {
    console.log(SearchValue, pageNumber);
    setLoading(true);

    photoApi(SearchValue, pageNumber)
      .then((value) => {
        setArrayPhotos([...arrayPhotos, ...value]);
        setPageNumber(pageNumber + 1);
      })
      .catch(setError(false))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (SearchValue === "") {
      return;
    }

    addPagePhotos();
  }, [SearchValue]);

  const getSearchValuee = (value) => {
    setSearchValue(value);
    setPageNumber(1);
    setArrayPhotos([]);
  };

  const openModal = (e) => {
    const { bigpicture } = e.currentTarget.dataset;

    setBigPicture(bigpicture);
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
  return (
    <div className="App">
      <Searchbar getSearchValuee={getSearchValuee} />
      {error && "oh something went wrong"}
      <ImageGalleryList ArrayApiPhoto={arrayPhotos} openModal={openModal} />
      {loading && <Loader />}

      {arrayPhotos.length > 0 && <Button onSubmit={addPagePhotos} />}

      {showModal && <Modal img={bigPicture} onClose={toggleModal}></Modal>}
    </div>
  );
};

export default App;
