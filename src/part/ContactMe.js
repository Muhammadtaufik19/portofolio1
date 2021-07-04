import React from "react";

export default function ContactMe() {
  return (
    <div class="bg-contact">
      <div class="container">
        <h5 class="text-center">Contact Me</h5>
        <form>
          <div className="mb-3 col-6">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-6">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-6">
            <label for="exampleInputEmail1" class="form-label">
              Phone Number
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="col-6 mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Message
            </label>
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
              <label for="floatingTextarea2">Comments</label>
            </div>
          </div>
        </form>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e2edff"
          fill-opacity="1"
          d="M0,320L80,304C160,288,320,256,480,250.7C640,245,800,267,960,266.7C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
