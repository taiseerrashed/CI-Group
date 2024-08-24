import MainImg from "../../assets/home.jpeg";

const Main = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen relative" 
      style={{ backgroundImage: `url(${MainImg})` }}
    >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-40"></div>
        {/* Content */}
        <div className="absolute z-10 w-[90%] md:w-[80%] p-5 md:p-10 top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] text-center">
            {/* Title */}
            <div className="mb-5 md:mb-10">
                <h1 className="font-[700] text-[36px] md:text-[60px] lg:text-[80px] leading-[48px] md:leading-[80px] lg:leading-[120px] tracking-wide">
                    <span className="text-mainColor">CI Group</span> Is With You From Start To Finish
                </h1>
            </div>
            {/* Subtitle */}
            <div className="mb-5 md:mb-10">
                <p className="font-[700] text-[18px] md:text-[28px] lg:text-[35px] capitalize leading-[28px] md:leading-[40px] lg:leading-[50px]">
                    the planing and design must reflect attention to the details that will help create a sense of trust and comfort
                </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5">
                <button className="bg-mainColor rounded p-3 text-white text-base md:text-lg">Learn More</button>
                <button className="bg-mainColor rounded p-3 text-white text-base md:text-lg">Contact Us</button>
            </div>
        </div>
    </div>
  );
};

export default Main;
