import { ReactNode } from "react";

interface CProp{
    children :ReactNode;
    icon: string,
    onClick :() => void
}

const ContactItem = ( {children, icon , onClick}:CProp) => {

  return (
    <div onClick={onClick} className="cursor-pointer flex flex-col justify-center items-center p-4 rounded-full bg-white w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px]">
        <i className={`${icon} text-[24px] sm:text-[30px] lg:text-[35px] mb-2`}></i>
        <p className="text-secondary text-[18px] sm:text-[20px] lg:text-[24px]">{children}</p>
    </div>
  );
};

export default ContactItem;
