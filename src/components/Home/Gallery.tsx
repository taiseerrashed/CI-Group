import { useNavigate } from "react-router-dom";
import GalleryImg1 from "../../assets/Ellipse 1.png";
import GalleryImg2 from "../../assets/Ellipse 2.png";
import GalleryImg3 from "../../assets/Ellipse 3.png";
import GalleryImg4 from "../../assets/Ellipse 4.png";

interface GProps {
    background: string,
    color: string
}
const Gallery = ({background, color}: GProps) => {
    const images = [
        {src: GalleryImg1, title: "Doors", link: "/doors"}, 
        {src: GalleryImg2, title: "Dressing Room", link: "/dressing-room"}, 
        {src: GalleryImg3, title: "Interior Design", link: "/interior-design"}, 
        {src: GalleryImg4, title: "Kitchens", link: "/kitchens"}
    ];
    const navigate = useNavigate();

    const nvigateToLink = (link: string):void => {
        navigate(link);
    }
    
  return (
    <section className={`${background} py-8`}>
        <div className="w-[90%] md:w-[80%] mx-auto flex flex-col lg:flex-row gap-y-10 lg:gap-x-20 items-start lg:items-start">
            <h2 
              className={`${color} 
              text-[36px] 
              md:text-[44px] 
              lg:text-[50px] 
              leading-[45px] 
              md:leading-[60px] 
              lg:leading-[75px] 
              font-[700] 
              mt-4 
              lg:mt-8 
              mb-6 
              lg:mb-0`}
            >
                Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 lg:gap-x-24 gap-y-8">
                {images.map((item, index)=> {
                    return(
                        <div
                          key={index}
                          className="relative w-[250px] h-[250px] md:w-[323px] md:h-[323px] cursor-pointer group" 
                          onClick={() => nvigateToLink(item.link)}
                        >
                            <img 
                              src={item.src} 
                              alt={`Gallery Image ${index +1}`} 
                              className="w-full h-full object-cover rounded-full transition-opacity duration-300 ease-in-out " 
                            />
                            <div 
                                className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-0 rounded-full group-hover:bg-opacity-60 transition-opacity duration-300 ease-in-out"
                            >
                                <span 
                                    className="text-black text-[24px] md:text-[28px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                                >
                                    {item.title}
                                </span>
                            </div>
                        </div>
                    )
                })};
            </div>
        </div>
    </section>
  );
};

export default Gallery;
