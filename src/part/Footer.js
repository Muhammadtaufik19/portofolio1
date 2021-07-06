import React from "react";

export default function Footer() {
  return (
    <div class="bg-footer">
      <div class="container ">
        <div class="row ">
          <p class="text-center " style={{ height: 10 }}>
            Creadated <i>by</i> <a>Moh Taufik</a>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </p>
          <p>Email : muhammadtaufik433@gmail.com</p>
          <p>Phone : 085745441176</p>
        </div>
      </div>
    </div>
  );
}
