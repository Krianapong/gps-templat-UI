import Card_Container from "./Card_Container";

const MonitoringPage = () => {
  return (
    <div className="flex p-1 text-white h-full w-full">
      <div className="flex flex-col justify-center w-full bg-[#263242] p-2 mx-2">
        <h1 className="text-xl font-bold text-center mb-4">All</h1>
        <Card_Container />
      </div>
      <div className="hidden md:flex w-60 bg-[#263242] ml-1"></div>
    </div>
  );
};

export default MonitoringPage;
