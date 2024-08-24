interface TProps {
    subTitle: string;
}
const Title = ({ subTitle}: TProps) => {
  return (
    <h2 className="text-[30px] sm:text-[36px] text-mainColor md:text-[44px] lg:text-[50px] leading-[45px] md:leading-[60px] lg:leading-[75px] font-[600] mb-6 lg:mb-0 flex items-center">
        Gallery
        <i className='bx bx-right-arrow-alt'></i>
        <span className="text-black">{subTitle}</span>
    </h2>
  );
};

export default Title;