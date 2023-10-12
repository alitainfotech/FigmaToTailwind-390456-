import RatingComponent from "./rating.component";

const MiddleComponent = ({ data }) => {
  return (
    <>
      <div className="grid w-full p-5">
        <div className="flex gap-2 items-center justify-end">
          <span>sort By</span>
          <select
            id="small"
            class="block p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-purple-500 focus:border-purple-500"
          >
            <option selected value="Relevance">
              Relevance
            </option>
          </select>
        </div>
        <div className="grid gap-3 p-8 container">
          {data.map((d, i) => (
            <>
              <div className="group  card flex bg-purple-50 rounded-lg justify-between hover:bg-purple-100 border hover:border-purple-500 cursor-pointer ">
                <div className="p-1 flex gap-2" key={i}>
                  <div>
                    <img
                      src={d.ProfileImage}
                      alt="Profile Picture"
                      class="rounded-full border-4 border-white bg-cover	object-cover h-[100px] w-[100px]"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-lg font-semibold">{d.Name}</h3>
                    <div className="flex gap-4 items-center">
                      <h3 className="text-lg w-[100px] font-semibold">
                        ${d.Price}/<span className="text-sm">Hr</span>
                      </h3>
                      <span>
                        <RatingComponent rating={d.Rating}></RatingComponent>
                      </span>
                    </div>
                    <p className="text-sm font-normal	">{d.Description}</p>
                  </div>
                </div>
                <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-purple-600 rounded-r-lg flex w-[60px] justify-center items-center ">
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 13V29M13 21H29M41 21C41 32.0457 32.0457 41 21 41C9.9543 41 1 32.0457 1 21C1 9.95427 9.9543 0.999969 21 0.999969C32.0457 0.999969 41 9.95427 41 21Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default MiddleComponent;
