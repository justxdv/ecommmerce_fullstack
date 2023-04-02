import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      
      <div className="col">
        <div className="row">
          <img src="https://i.pinimg.com/736x/2c/19/98/2c199842855d409dabd22eef217c72c7.jpg" />
          <button>
            <Link className="link" to="/products/6">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          {" "}
          <img src="https://i.pinimg.com/564x/92/e0/db/92e0db19ef7ef262c5366a3edfcd8395.jpg" />
          <button>
            <Link className="link" to="/products/2">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img src="https://i.pinimg.com/564x/4a/4a/9e/4a4a9e78410f8257e2477e955a0dc141.jpg" />
          <button>
            <Link className="link" to="/products/1">
              Men
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              {" "}
              <img src="https://www.rajeshkidswear.com/VendorAssets/1031/StoreImages/Large/11474890DENIM.jpg" />
              <button>
                <Link className="link" to="/products/3">
                  Children
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img src="https://i.pinimg.com/564x/b2/a9/9e/b2a99ec735886ecc458b0f497da84d8c.jpg" />
              <button>
                <Link className="link" to="/products/4">
                  Accesories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
          <img src="https://cdn.pixabay.com/photo/2019/01/29/14/51/shoes-3962520_1280.jpg" />
          <button>
            <Link className="link" to="/products/5">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Categories;
