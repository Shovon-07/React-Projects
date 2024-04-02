import html2canvas from "html2canvas";
import React from "react";

//___ Additional utility ___//

const GetScreenShoot = (props) => {
  const { btnTitle } = props;

  let image = "";
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
      <div id="viewCaptured"></div>
      <button className="button genImgBtn" onClick={GetScreenShoot}>
        {btnTitle}
      </button>
    </>
  );
};

export default GetScreenShoot;
// export { imageUrl };
