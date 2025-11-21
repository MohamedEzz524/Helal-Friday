import { useEffect, useState } from "react";

const WHATSAPP_LINK =
  "https://chat.whatsapp.com/KxbLoI3YCo40TEsNFB24rc?mode=wwt";

// Target date: Thursday, November 28, at 12:01 PM
const TARGET_DATE = new Date("2025-11-28T12:01:00");

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set header height for spacing
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      const height = header.offsetHeight;
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`
      );
    }
  }, [timeLeft]);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const target = TARGET_DATE.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md transition-all duration-300">
      <div className="container-padding py-3 md:py-4 flex flex-row items-start md:items-center justify-between gap-3 md:gap-0">
        <div className="text-xs md:text-sm font-medium leading-tight">
          THIS OFFER WILL BE AVAILABLE FOR{" "}
          <span className="font-mono text-[#df1124] whitespace-nowrap">
            {timeLeft.days} {timeLeft.days === 1 ? "DAY" : "DAYS"} LEFT
          </span>{" "}
          IN:
          <span className="ml-2 font-mono">
            {formatTime(timeLeft.days)}D {formatTime(timeLeft.hours)}H{" "}
            {formatTime(timeLeft.minutes)}M {formatTime(timeLeft.seconds)}S
          </span>
        </div>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#df1124] to-[#f03d4e] text-white px-4 md:px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap text-sm md:text-base flex-shrink-0"
        >
          <span className="block md:inline">JOIN THE GROUP</span>
        </a>
      </div>
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#df1124] to-transparent opacity-50" />
    </header>
  );
}
