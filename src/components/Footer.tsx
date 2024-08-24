import FootrImg1 from "../assets/Untitled-1 3.png";
import FootrImg2 from "../assets/Asset 26 2.png";

const Footer = () => {
  return (
    <footer className="bg-secondColor py-8">
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Logo Section */}
            <div className="flex items-center gap-4 md:gap-8">
                <img src={FootrImg1} alt="Footer Logo1" className="h-12 md:h-16"/>
                <img src={FootrImg2} alt="Footer Logo2" className="h-12 md:h-16"/>
            </div>
            {/* Navigation and Social Icons */}
            <div className="flex flex-col items-center lg:items-end">
                <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-3">
                    <a href="#" className="text-teal-600 text-sm md:text-base hover:underline">Home</a>
                    <a href="#" className="text-teal-600 text-sm md:text-base hover:underline">About Us</a>
                    <a href="#" className="text-teal-600 text-sm md:text-base hover:underline">Gallery</a>
                </nav>
                <div className="flex justify-center gap-4 md:gap-8">
                    <a href="#" className="text-teal-600">
                        <i className="bx bxl-facebook-circle text-[24px] md:text-[30px]"></i>
                    </a>
                    <a href="#" className="text-teal-600">
                        <i className="bx bxl-instagram-alt text-[24px] md:text-[30px]"></i>
                    </a>
                    <a href="#" className="text-teal-600">
                        <i className="bx bxl-twitter text-[24px] md:text-[30px]"></i>
                    </a>
                    <a href="#" className="text-teal-600">
                        <i className="bx bxl-whatsapp text-[24px] md:text-[30px]"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
