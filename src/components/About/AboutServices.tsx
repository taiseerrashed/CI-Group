const AboutServices = () => {
  return (
    <div className=" bg-primary p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-x-8 md:gap-x-16 lg:gap-x-32 w-[95%] md:w-[90%] mx-auto">
            <div className="mb-8 md:mb-0">
                <h2 className="font-[700] text-[28px] md:text-[36px] lg:text-[45px] leading-[40px] md:leading-[50px] lg:leading-[60px] mb-4">About</h2>
                <div className="font-[500] text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[30px] lg:leading-[35px]">
                    <p>
                        Many services that you need during the construction and renovation periods like: A general contracting, including 
                        Plumping, Electricity, Partitions, Ceilings, Painting, Flooring, Gypsum Board, Doors, Windows, Lighting, 
                        Air conditioning, Decoration Accessory, Furniture, kitchens, dressing rooms...etc. <br/>
                        All work is done under the supervision of our architects to ensure we stick to quality and safety standards.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="font-[700] text-[28px] md:text-[36px] lg:text-[45px] leading-[40px] md:leading-[50px] lg:leading-[60px] mb-4">Why do you need us?</h2>
                <div className="font-[500] text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[30px] lg:leading-[35px]">
                    <p>
                        You can relax in the knowledge that your project is being managed by a team of experts who will plan out the space 
                        efficiently with meticulous attention to detail and personal service. <br/>
                        We understand the requirements of our customers and aim to make your home design reflects the sense of elegance and 
                        quality of execution.
                    </p>
                </div>
            </div>
        </div>

    </div>
  );
};

export default AboutServices;