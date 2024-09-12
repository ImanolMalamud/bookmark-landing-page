import CardExtension from "./CardExtension/CardExtension";
import chromeLogo from "../../assets/images/logo-chrome.svg";
import firefoxLogo from "../../assets/images/logo-firefox.svg";
import operaLogo from "../../assets/images/logo-opera.svg";

const Extension = () => {
  return (
    <div className="px-4 md:px-8">
      <h2 className="mt-[43px] mb-[19px] text-center text-[24px] font-bold text-very-dark-blue md:text-[32px]">
        Download the extension
      </h2>
      <p className="md:text-normal mx-auto max-w-[816px] text-center text-very-dark-blue/50">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div className="mt-[64px] flex flex-col justify-center gap-[33px] md:flex-row">
        <CardExtension
          icon={chromeLogo}
          title="Add to Chrome"
          description="Minimum version 62"
        />
        <CardExtension
          icon={firefoxLogo}
          title="Add to Firefox"
          description="Minimum version 55"
          className="self-center md:mt-[43px] lg:self-start"
        />
        <CardExtension
          icon={operaLogo}
          title="Add to Opera"
          description="Minimum version 46"
          className="self-end md:mt-[76px] lg:self-start"
        />
      </div>
    </div>
  );
};

export default Extension;
