import React from "react";
import html2canvas from "html2canvas";

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
        // console.log(image);
        document.getElementById(
          "viewCaptured"
        ).innerHTML = `<img src="${image}" alt="" />`;
        localStorage.setItem("img", image);
        // let a = document.createElement("a");
        // a.href = image;
        // a.download = "/images/Capture.png";
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
