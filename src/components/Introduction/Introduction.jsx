import hero from "../../assets/images/illustration-hero.svg";

const Introduction = () => {
  return (
    <div className="mx-auto mt-[60px] flex flex-col items-center justify-center md:flex-row-reverse md:justify-between md:gap-16">
      <div className="width-fill-available banner-1 flex-[1.08]">
        <img
          src={hero}
          alt=""
          aria-hidden="true"
          width={657}
          height={466}
          className="mx-auto lg:max-w-[125%]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-[26px] text-center md:text-left">
        <h1 className="mt-8 text-[24px] font-[500] leading-[1.05] text-very-dark-blue md:mt-0 md:text-[48px]">
          A Simple Bookmark Manager
        </h1>
        <p className="md:text-normal text-very-dark-blue/50">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-[12px] md:my-[9px] md:flex-row md:justify-start">
          <a
            href="#"
            className="rounded-md border-[3px] border-soft-blue bg-soft-blue py-[10px] px-[24px] text-[14px] font-medium text-white transition duration-300 hover:bg-white hover:text-soft-blue"
          >
            Get it on Chrome
          </a>
          <a
            href="#"
            className="rounded-md border-[3px] border-white bg-white py-[10px] px-[24px] text-[14px] font-medium text-gray-700 shadow-2xl transition duration-300 hover:border-very-dark-blue"
          >
            Get it on Firefox
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
