import HeaderComponent from "../components/header.component";
import LeftSideBarComponent from "../components/left-side-bar.component";
import MiddleComponent from "../components/middle.component";
import PaginationComponent from "../components/pagination.compoenent";
const data = [
  {
    Name: "Product A",
    Price: 20.99,
    Rating: 4,
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ProfileImage: "/1.jpg",
  },
  {
    Name: "Product B",
    Price: 15.49,
    Rating: 3,
    Description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ProfileImage: "/2.jpg",
  },
  {
    Name: "Product C",
    Price: 30.0,
    Rating: 4,
    Description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    ProfileImage: "/3.jpg",
  },
  {
    Name: "Product D",
    Price: 12.99,
    Rating: 4,
    Description:
      "Duis aute irure dolor in reprehenderit in voluptate fugiat nulla pariatur.",
    ProfileImage: "/4.jpg",
  },
];
const DashboardPage = () => {
  return (
    <>
      <div>
        <HeaderComponent></HeaderComponent>
        <div className="flex gap-2">
          <LeftSideBarComponent></LeftSideBarComponent>
          <div className="grid w-full gap-2 items-center">
            <MiddleComponent data={data}></MiddleComponent>
            <PaginationComponent
              totalPages={20}
              currentPage={1}
            ></PaginationComponent>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardPage;
