import { useState } from "react";
// abc was appended before id of modals so that query selector does not give error
const Image = ({ image }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        type="button"
        className="card"
        data-bs-toggle="modal"
        data-bs-target={`#abc${image.id}`}
      >
        <img
          src={image.urls.raw + "&h=300"}
          className="card-img"
          alt={image.alt_discription}
        />
        <div
          className="card-img-overlay d-flex flex-column justify-content-end p-0"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {show ? (
            <div className="card-text d-flex justify-content-between align-items-center overflow-auto">
              <span>{image.user.username}</span>
              <span className="ms-auto me-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-hand-thumbs-up-fill mb-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.964.22.817.533 2.512.062 4.51a9.84 9.84 0 0 1 .443-.05c.713-.065 1.669-.072 2.516.21.518.173.994.68 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.162 3.162 0 0 1-.488.9c.054.153.076.313.076.465 0 .306-.089.626-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.826 4.826 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.616.849-.231 1.574-.786 2.132-1.41.56-.626.914-1.279 1.039-1.638.199-.575.356-1.54.428-2.59z" />
                </svg>
              </span>
              <span>{image.likes}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className="modal fade"
        id={`abc${image.id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="staticBackdropLabel">
                {image.user.name}
              </h4>
              <p className="ms-2 mb-0 mt-2">{image.user.location}</p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-center">
              <a type="button" href={image.links.download + "?force=true"}>
                <img
                  src={image.urls.raw + "&h=480"}
                  alt={image.alt_discription}
                ></img>
              </a>
            </div>
            <div className="modal-footer container d-flex justify-content-start">
              <div className="d-flex w-100 flex-column fs-5">
                <div className="d-flex flex-row align-items-center fs-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    fill="currentColor"
                    className="bi bi-hand-thumbs-up-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.964.22.817.533 2.512.062 4.51a9.84 9.84 0 0 1 .443-.05c.713-.065 1.669-.072 2.516.21.518.173.994.68 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.162 3.162 0 0 1-.488.9c.054.153.076.313.076.465 0 .306-.089.626-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.826 4.826 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.616.849-.231 1.574-.786 2.132-1.41.56-.626.914-1.279 1.039-1.638.199-.575.356-1.54.428-2.59z" />
                  </svg>
                  <span className="ms-2">
                    <b>{image.likes}</b>
                  </span>
                </div>
                <div className="mt-2">
                  <em>{image.user.bio}</em>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <a
                    className="c-link fs-5 mt-auto"
                    href={image.user.portfolio_url}
                  >
                    Check out my Portfoilio
                  </a>
                  <button
                    type="button"
                    className="btn c-btn"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
