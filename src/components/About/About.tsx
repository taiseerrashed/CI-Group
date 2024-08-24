import AboutImg from "../../assets/services.jpeg"
const About = () => {
  return (
    <section>
        {/* Title */}
        <div className="bg-primary px-6 md:px-10 lg:px-20 py-6">
            <h2 className="text-secondary font-[600] text-[30px] md:text-[40px] lg:text-[45px]">About Us</h2>
        </div>
        {/* Content */}
        <div className="bg-cover bg-center bg-no-repeat relative py-6 md:py-8 lg:py-12" style={{backgroundImage: `url(${AboutImg})`}}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-white opacity-50"></div>
            {/* Wrapper */}
            <div className="relative z-10 w-[95%] md:w-[90%] mx-auto px-4 md:px-6 lg:px-10">
                <h2 className="text-center text-[24px] md:text-[28px] lg:text-[32px] font-[700] leading-[32px] md:leading-[40px] lg:leading-[48px] mb-4 md:mb-5">
                    We are CI Group (Comprehensive International Group) with over 18 years of experience in general contracting and construction.
                </h2>
                <div className="font-[500] text-[18px] md:text-[20px] lg:text-[24px] leading-[28px] md:leading-[30px] lg:leading-[36px]">
                    <p>
                        The General Manager of (CI) Group, Engineer Islam Adel graduated from Higher Technological Institute in 2002. 
                        He established this company in 2004 after careful study and with great ambition and determination.<br/>
                        Since 2004, our company is one of the largest companies in Egypt specialized in the design and implementation of all 
                        general contracting works, as well as the supply and installation of all requirements for villas, apartments, 
                        and private offices.<br/>
                        CI Group is much more than a typical supplying or designing company. Our experts elevate the experience of creation 
                        and implementation to higher levels that leave a perfect impression on all visitors to your place.<br/>
                        The planning and design must reflect attention to the details that will help create a sense of trust and comfort.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
