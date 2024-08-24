import DressingImg1 from "../../assets/Rectangle D5.png";
import DressingImg2 from "../../assets/Rectangle D6.png";
import DressingImg3 from "../../assets/Rectangle D7.png";
import DressingImg4 from "../../assets/Rectangle D8.png";
import DressingImg5 from "../../assets/Rectangle D9.png";
import DressingImg6 from "../../assets/Rectangle D10.png";
import DressingImg7 from "../../assets/Rectangle D11.png";
import DressingImg8 from "../../assets/Rectangle D12.png";
import DressingImg9 from "../../assets/Rectangle D13.png";
import DressingImg10 from "../../assets/Rectangle D14.png";
import DressingImg11 from "../../assets/Rectangle D15.png";
import Title from "./Title";
import Images from "./Images";

const DressingRoom = () => {
    const dressingImgs = [
        DressingImg1,
        DressingImg2,
        DressingImg3,
        DressingImg4,
        DressingImg5,
        DressingImg6,
        DressingImg7,
        DressingImg8,
        DressingImg9,
        DressingImg10,
        DressingImg11,
    ];

  return (
    <section className="py-8 bg-primary">
        <div className="w-[90%] mx-auto">
            <Title subTitle="Dressing Room" />
            <Images images={dressingImgs} />
        </div>
    </section>
  );
};

export default DressingRoom;
