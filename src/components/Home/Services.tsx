import ServiceImg from "../../assets/services.jpeg";

const Services = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat relative text-center p-8" 
      style={{backgroundImage: `url(${ServiceImg})`}}
    >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-60"></div>
        {/* Content */}
        <div className="relative z-10 w-[90%] md:w-[80%] mx-auto text-center">
            <h2 className="leading-[40px] md:leading-[50px] lg:leading-[60px] text-[24px] md:text-[32px] lg:text-[40px] font-[400] mb-4">
                We have the power to make your vision at reality by
            </h2>
            <div className="flex flex-col lg:flex-row justify-between text-left text-[24px] md:text-[28px] lg:text-[35px] font-[400] leading-[40px] md:leading-[50px] lg:leading-[60px] p-4 gap-6">
                <div >
                    <p>Efficient solutions.</p>
                    <p>Innovative designs.</p>
                    <p>Excellent engineering.</p>
                </div>
                <ul className="list-disc">
                    <li>Delivery on time.</li>
                    <li>Fitting within budget.</li>
                    <li>High health and safety standards.</li>
                </ul>
            </div>
        </div>

    </div>
  );
};

export default Services;
