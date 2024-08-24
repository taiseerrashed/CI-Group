import DoorImg1 from "../../assets/Rectangle 5.png";
import DoorImg2 from "../../assets/Rectangle 6.jpeg";
import DoorImg3 from "../../assets/Rectangle 7.png";
import DoorImg4 from "../../assets/Rectangle 8.png";
import DoorImg5 from "../../assets/Rectangle 9.png";
import DoorImg6 from "../../assets/Rectangle 10.png";
import DoorImg7 from "../../assets/Rectangle 11.png";
import DoorImg8 from "../../assets/Rectangle 12.jpeg";
import Title from "./Title";
import Images from "./Images";

const Doors = () => {
    const doorImgs = [DoorImg1, DoorImg2, DoorImg3, DoorImg4, DoorImg5, DoorImg6, DoorImg7, DoorImg8 ];

  return (
    <section className="py-8 bg-primary">
        <div className="w-[90%] mx-auto">
            <Title subTitle="Doors" />
            <Images images={doorImgs} />
        </div>
    </section>
  );
};

export default Doors;
