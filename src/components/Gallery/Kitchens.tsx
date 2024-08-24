import KitchenImg1 from "../../assets/Rectangle K5.png";
import KitchenImg2 from "../../assets/Rectangle K6.png";
import KitchenImg3 from "../../assets/Rectangle K7.png";
import KitchenImg4 from "../../assets/Rectangle K8.png";
import KitchenImg5 from "../../assets/Rectangle K9.png";
import KitchenImg6 from "../../assets/Rectangle K10.png";
import KitchenImg7 from "../../assets/Rectangle K11.png";
import KitchenImg8 from "../../assets/Rectangle K12.png";
import KitchenImg9 from "../../assets/Rectangle K13.png";
import KitchenImg10 from "../../assets/Rectangle K14.png";
import KitchenImg11 from "../../assets/Rectangle K15.png";
import KitchenImg12 from "../../assets/Rectangle K16.png";
import KitchenImg13 from "../../assets/Rectangle K17.png";
import KitchenImg14 from "../../assets/Rectangle K18.png";
import Title from "./Title";
import Images from "./Images";

const Kitchens = () => {
    const kitchenImgs = [
        KitchenImg1,
        KitchenImg2,
        KitchenImg3,
        KitchenImg4,
        KitchenImg5,
        KitchenImg6,
        KitchenImg7,
        KitchenImg8,
        KitchenImg9,
        KitchenImg10,
        KitchenImg11,
        KitchenImg12,
        KitchenImg13,
        KitchenImg14,
    ]
  return (
    <section className="py-8 bg-primary">
        <div className="w-[90%] mx-auto">
            <Title subTitle="Kitchens" />
            <Images images={kitchenImgs} />
        </div>
    </section>
  );
};

export default Kitchens;