import AccordionItem from "./accordian.compoent";
import DatePickerComponent from "./date-picker.component";
import LocationInputComponent from "./location-input";
import SearchInputComponent from "./search-input.component";
import TimeSliderPickerComponent from "./time-picker.component";
const HomeIcon = (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 16H14M9.0177 1.76401L2.23539 7.03914C1.78202 7.39176 1.55534 7.56807 1.39203 7.78887C1.24737 7.98446 1.1396 8.2048 1.07403 8.43907C1 8.70353 1 8.99071 1 9.56507V16.8C1 17.9201 1 18.4802 1.21799 18.908C1.40973 19.2843 1.71569 19.5903 2.09202 19.782C2.51984 20 3.07989 20 4.2 20H15.8C16.9201 20 17.4802 20 17.908 19.782C18.2843 19.5903 18.5903 19.2843 18.782 18.908C19 18.4802 19 17.9201 19 16.8V9.56507C19 8.99071 19 8.70353 18.926 8.43907C18.8604 8.2048 18.7526 7.98446 18.608 7.78887C18.4447 7.56807 18.218 7.39176 17.7646 7.03914L10.9823 1.76401C10.631 1.49076 10.4553 1.35413 10.2613 1.30162C10.0902 1.25528 9.9098 1.25528 9.73865 1.30162C9.54468 1.35413 9.36902 1.49076 9.0177 1.76401Z"
      stroke="#D0D5DD"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const SeekingIcon = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
      stroke="#D0D5DD"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17Z"
      stroke="#D0D5DD"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z"
      stroke="#D0D5DD"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const PricingIcon = (
  <svg
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3C12 4.10457 9.53757 5 6.5 5C3.46243 5 1 4.10457 1 3M12 3C12 1.89543 9.53757 1 6.5 1C3.46243 1 1 1.89543 1 3M12 3V7.45715C10.7785 7.82398 10 8.37893 10 9M1 3V15C1 16.1046 3.46243 17 6.5 17C7.82963 17 9.04906 16.8284 10 16.5429V9M1 7C1 8.10457 3.46243 9 6.5 9C7.82963 9 9.04906 8.82843 10 8.54285M1 11C1 12.1046 3.46243 13 6.5 13C7.82963 13 9.04906 12.8284 10 12.5429M21 9C21 10.1046 18.5376 11 15.5 11C12.4624 11 10 10.1046 10 9M21 9C21 7.89543 18.5376 7 15.5 7C12.4624 7 10 7.89543 10 9M21 9V17C21 18.1046 18.5376 19 15.5 19C12.4624 19 10 18.1046 10 17V9M21 13C21 14.1046 18.5376 15 15.5 15C12.4624 15 10 14.1046 10 13"
      stroke="#D0D5DD"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const LocationIcon = (
  <svg
    width="18"
    height="22"
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 11.5C10.6569 11.5 12 10.1569 12 8.5C12 6.84315 10.6569 5.5 9 5.5C7.34315 5.5 6 6.84315 6 8.5C6 10.1569 7.34315 11.5 9 11.5Z"
      stroke="#7F56D9"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 21C11 17 17 14.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 14.4183 7 17 9 21Z"
      stroke="#7F56D9"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ScheduleIcon = (
  <svg
    width="20"
    height="22"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 9H1M14 1V5M6 1V5M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
      stroke="#9E77ED"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const CareSchedule = () => {
  return (
    <>
      <div className="grid gap-2 pb-5">
        <label htmlFor="location-search" className="text-sm text-gray-600 ml-1">
          Date
        </label>
        <DatePickerComponent></DatePickerComponent>

        <DatePickerComponent></DatePickerComponent>
        <TimeSliderPickerComponent></TimeSliderPickerComponent>
      </div>
    </>
  );
};

const CareLocation = () => {
  return (
    <>
      <label htmlFor="location-search" className="text-sm text-gray-600 ml-1">
        Location
      </label>
      <LocationInputComponent />
    </>
  );
};

const LeftSideBarComponent = () => {
  return (
    <>
      <div class="card m-2 block  w-[30%] bg-purple-50 p-5">
        <SearchInputComponent></SearchInputComponent>
        <div className="flex justify-between gap-2 mt-2">
          <button className="flex bg-white items-center gap-2 px-4 py-2 font-semibold rounded-lg border">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 stroke-current"
            >
              <path
                d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
                stroke="#344054"
                stroke-width="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filters
          </button>

          <button className="flex  bg-white items-center gap-2 px-4 py-2 font-semibold rounded-lg border">
            Close
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 stroke-current"
            >
              <path
                d="M11 1L1 11M1 1L11 11"
                stroke="#475467"
                stroke-width="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* accordion */}

        <div className="mt-2 space-y-2">
          <AccordionItem
            icon={HomeIcon}
            title="Care Type"
            content="no content"
          />
          <AccordionItem
            icon={HomeIcon}
            title="Care Frequency"
            content="no content"
          />
          <AccordionItem
            icon={LocationIcon}
            title="Care Location"
            content={<CareLocation />}
            filter={1}
          />
          <AccordionItem
            icon={ScheduleIcon}
            title="Care Schedule"
            content={<CareSchedule />}
            filter={3}
          />
          <AccordionItem
            icon={PricingIcon}
            title="Care Pricing"
            content="no content"
          />{" "}
          <AccordionItem
            icon={SeekingIcon}
            title="Care Seeking"
            content="no content"
          />
        </div>
      </div>
    </>
  );
};

export default LeftSideBarComponent;
