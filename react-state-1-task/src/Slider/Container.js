import React, { useState } from "react";
import Slider from "./Slider";
const images = [
  {
    url: "https://static.yabl.ua/media/public/uploaded-files/goodomens_106_19958_2_fnl_1558023351.0.jpg",
    id: "1",
  },
  {
    url: "https://ambivert.club/wp-content/uploads/2019/06/image.jpg",
    id: "2",
  },
];
function Container(props) {
  const [img, setImg] = useState(1);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => (img <= 1 ? setImg(images.length) : setImg(img - 1))}
      >
        prev
      </button>
      {images.map((item) => {
        return item.id == img ? <Slider url={item.url} id={item.id} /> : null;
      })}

      <button
        className="btn btn-secondary btn-sm"
        onClick={() => (img > images.length - 1 ? setImg(1) : setImg(img + 1))}
      >
        next
      </button>
    </div>
  );
}

export default Container;
