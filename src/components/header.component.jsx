import React from "react";

const HeaderComponent = () => {
  return (
    <header className="w-full  p-3 text-gray-700 shadow-md body-font">
      <div className="container flex flex-col items-center items-start justify-between mx-auto md:flex-row">
        <span className="flex items-center font-medium  gap-5">
          <img src="./logo.png" className="h-[30px]" alt="" />
          <span className="text-purple-600  text-lg">Logo</span>
        </span>
        <nav className="flex gap-10 pl-24 text-base ">
          <a href="#_" className="font-medium hover:text-purple-600">
            Home
          </a>
          <a href="#_" className="font-medium hover:text-purple-600">
            My Visit
          </a>
          <a href="#_" className="font-medium hover:text-purple-600">
            My Favorite
          </a>
        </nav>
        <div className="items-center flex gap-3">
          <span className="font-medium hover:text-gray-900">
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.09436 10.2288C5.03221 9.82823 4.99996 9.41786 4.99996 9C4.99996 4.58172 8.60525 1 13.0526 1C17.4999 1 21.1052 4.58172 21.1052 9C21.1052 9.99807 20.9213 10.9535 20.5852 11.8345C20.5154 12.0175 20.4804 12.109 20.4646 12.1804C20.4489 12.2512 20.4428 12.301 20.4411 12.3735C20.4394 12.4466 20.4493 12.5272 20.4692 12.6883L20.8717 15.9585C20.9153 16.3125 20.9371 16.4895 20.8782 16.6182C20.8266 16.731 20.735 16.8205 20.6211 16.8695C20.4911 16.9254 20.3146 16.8995 19.9617 16.8478L16.7765 16.3809C16.6101 16.3565 16.527 16.3443 16.4512 16.3448C16.3763 16.3452 16.3245 16.3507 16.2511 16.3661C16.177 16.3817 16.0823 16.4172 15.893 16.4881C15.0097 16.819 14.0524 17 13.0526 17C12.6344 17 12.2237 16.9683 11.8227 16.9073M6.63158 21C9.59648 21 12 18.5376 12 15.5C12 12.4624 9.59648 10 6.63158 10C3.66668 10 1.26316 12.4624 1.26316 15.5C1.26316 16.1106 1.36028 16.6979 1.53955 17.2467C1.61533 17.4787 1.65322 17.5947 1.66566 17.6739C1.67864 17.7567 1.68091 17.8031 1.67608 17.8867C1.67145 17.9668 1.65141 18.0573 1.61134 18.2383L1 21L3.9948 20.591C4.15827 20.5687 4.24 20.5575 4.31137 20.558C4.38652 20.5585 4.42641 20.5626 4.50011 20.5773C4.5701 20.5912 4.67416 20.6279 4.88227 20.7014C5.43059 20.8949 6.01911 21 6.63158 21Z"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="font-medium hover:text-gray-900">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.79514 17.5C7.38275 18.0186 8.15462 18.3333 9 18.3333C9.84537 18.3333 10.6172 18.0186 11.2048 17.5M14 6.66666C14 5.34057 13.4732 4.0688 12.5355 3.13112C11.5978 2.19344 10.3261 1.66666 9 1.66666C7.67391 1.66666 6.40214 2.19344 5.46446 3.13112C4.52678 4.0688 4 5.34057 4 6.66666C4 9.24181 3.35039 11.005 2.62472 12.1712C2.0126 13.1549 1.70654 13.6467 1.71777 13.784C1.73019 13.9359 1.76238 13.9938 1.88481 14.0846C1.99538 14.1667 2.49382 14.1667 3.49071 14.1667H14.5093C15.5062 14.1667 16.0046 14.1667 16.1152 14.0846C16.2376 13.9938 16.2698 13.9359 16.2822 13.784C16.2934 13.6467 15.9874 13.1549 15.3753 12.1712C14.6496 11.005 14 9.24181 14 6.66666Z"
                stroke="#667085"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span>
            <div className="flex gap-2 items-center">
              <img
                src="./1.jpg"
                className="h-[35px] w-[35px] object-cover  rounded-full"
                alt=""
              />
              <div className="grid">
                <span className="text-sm font-semibold">Client Rhye</span>
                <span className="text-sm font-light">test@caredirect.com</span>
              </div>
            </div>
          </span>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
