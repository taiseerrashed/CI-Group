import IneriorImg1 from "../../assets/Rectangle I5.jpg";
import IneriorImg2 from "../../assets/Rectangle I6.jpg";
import IneriorImg3 from "../../assets/Rectangle I7.png";
import IneriorImg4 from "../../assets/Rectangle I8.png";
import IneriorImg5 from "../../assets/Rectangle I9.png";
import IneriorImg6 from "../../assets/Rectangle I10.png";
import IneriorImg7 from "../../assets/Rectangle I11.png";
import Images from "./Images";
import Title from "./Title";

const InteriorDesign = () => {
    const interiorImages = [IneriorImg1, IneriorImg2, IneriorImg3, IneriorImg4, IneriorImg5, IneriorImg6, IneriorImg7]
  return (
    <section className="py-8 bg-primary">
        <div className="w-[90%] mx-auto">
            <Title subTitle="Interior Design" />
            <Images images={interiorImages} />
        </div>
    </section>
  )
}

export default InteriorDesign