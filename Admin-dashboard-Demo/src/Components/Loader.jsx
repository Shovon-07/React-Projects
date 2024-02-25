import React, { useRef } from "react";

export default function Loader() {
  let loader = useRef();

  function showLoader() {
    loader.classList.remove("d-none");
  }
  function hideLoader() {
    loader.classList.add("d-none");
  }

  return (
    <div
      id="loader"
      ref={(startLoader) => (loader = startLoader)}
      class="LoadingOverlay d-none"
    >
      <div className="Line-Progress">
        <div className="indeterminate"></div>
      </div>
    </div>
  );
}
