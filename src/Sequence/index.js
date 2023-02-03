import React,{forwardRef} from "react";
import {Skeleton}from "../Skeleton"
import ImageArray from "./ImageArray"

const ImageSequence = forwardRef(({ progress }, ref) => {
    const newImages = ImageArray();
  
    let index = Math.round(progress * 1 * (newImages.length - 1));
  
    if (newImages[index][1] !== undefined) {
      if (newImages[index][1] === "loading") {
        return <Skeleton width="100%" height="100%" />;
      } else {
        <h1>this change is carozal</h1>
        return newImages.map((item, i) => (
          <span
            ref={ref}
            key={i}
            style={{
              display: i !== index ? "none" : "block",
              height: "60vh",
              width: "30%",
              margin:"auto",
              marginTop:"100px",
              backgroundImage: `url('${item[0] ? item[0].src : null}')`,
              backgroundSize: "cover",
              backgroundRepeat:'no-repeat',
              backgroundPosition: "center",
            }}
          />
        ));
      }
    }
  });
  
  export default ImageSequence;