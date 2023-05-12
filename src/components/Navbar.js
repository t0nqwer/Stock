import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// import avatar from "../data/avatar.jpg";
import { Notification, UserProfile } from ".";
import { useAppContext } from "../contexts/AppContext";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const [greeding, setGreeding] = useState("");
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useAppContext();
  let now = new Date();

  let isMorning = now.getHours() > 5 && now.getHours() <= 12;
  let isAfternoon = now.getHours() > 12 && now.getHours() <= 18;
  let isEvening = now.getHours() > 18 && now.getHours() <= 22;
  let isNight = now.getHours() > 22 || now.getHours() <= 5;

  function callEveryHour() {
    setInterval(() => {
      console.log(1);
      if (isMorning) return setGreeding("อรุณสวัสดิ์");
      if (isAfternoon) return setGreeding("สวัสดียามบ่าย");
      setGreeding("สวัสดียามเย็น");
    }, 1000 * 60 * 60);
  }
  let nextDate = new Date();
  if (nextDate.getMinutes() === 0) {
    callEveryHour();
  } else {
    nextDate.setHours(nextDate.getHours() + 1);
    nextDate.setMinutes(0);
    nextDate.setSeconds(0); // I wouldn't do milliseconds too ;)

    const difference = nextDate - new Date();
    setTimeout(callEveryHour, difference);
  }
  useEffect(() => {
    if (isMorning) return setGreeding("อรุณสวัสดิ์");
    if (isAfternoon) return setGreeding("สวัสดียามบ่าย");
    setGreeding("สวัสดียามเย็น");
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between w-full px-10 py-3 md:ml-4 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <p>
              <span className="text-gray-400 text-14">{greeding},</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
