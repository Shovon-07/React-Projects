import html2canvas from "html2canvas";
import React from "react";

const GetScreenShoot = (props) => {
  const { btnTitle } = props;

  let image = "";
  // let imageUrl = image;
  const GetScreenShoot = () => {
    let capture = document.getElementById("capture");
    // console.log(capture);
    html2canvas(capture)
      .then((canvas) => {
        image = canvas.toDataURL("image/jpeg/png");
        console.log(image);
        document.getElementById(
          "viewCaptured"
        ).innerHTML = `<img src="${image}" alt="" />`;
        // let a = document.createElement("a");
        // a.href = image;
        // a.download = "Capture.png";
        // a.click();
      })
      .catch((err) => {
        console.error("We can't capture" + err);
      });
  };

  return (
    <>
      <button className="button genImgBtn" onClick={GetScreenShoot}>
        {btnTitle}
      </button>
      {/* <div id="viewCaptured"></div> */}
    </>
  );
};

export default GetScreenShoot;
// export { imageUrl };
