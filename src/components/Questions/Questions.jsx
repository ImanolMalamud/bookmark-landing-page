import arrow from "../../assets/images/icon-arrow.svg";

const Questions = () => {
  return (
    <div className="px-5 md:px-32">
      <h2 className="mt-[148px] mb-[21px] text-center text-[24px] font-bold text-very-dark-blue md:text-[32px]">
        Frequently Asked Questions
      </h2>
      <p className="md:text-normal mx-auto max-w-[736px] text-center text-very-dark-blue/50">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>

      <div className="mx-auto mt-[56px] mb-[50px] max-w-[540px]">
        <details className="border-t border-very-dark-blue/50">
          <summary className="bg-very-light-gray md:text-normal flex w-full cursor-pointer items-center justify-between rounded-md py-[19px] font-medium tracking-[-0.32px] text-very-dark-blue transition duration-300 hover:text-soft-red md:pr-[21px]">
            What is bookmark?
            <img
              src={arrow}
              alt=""
              aria-hidden="true"
              className="transition-all duration-300 ease-in-out"
              width={18}
              height={10}
            />
          </summary>
          <p className="px-5 py-4 text-very-dark-blue/50 transition-all duration-500 ease-in-out md:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </details>
        <details className="border-t border-very-dark-blue/50">
          <summary className="bg-very-light-gray md:text-normal flex w-full cursor-pointer items-center justify-between rounded-md pt-[19px] pb-[22px] font-medium tracking-[-0.16px] text-very-dark-blue transition duration-300 hover:text-soft-red md:pr-[21px]">
            How can I request a new browser?
            <img
              src={arrow}
              alt=""
              aria-hidden="true"
              className="transition-all duration-300 ease-in-out"
              width={18}
              height={10}
            />
          </summary>
          <p className="px-5 py-4 text-very-dark-blue/50 md:text-[16px]">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </details>
        <details className="border-t border-very-dark-blue/50">
          <summary className="bg-very-light-gray md:text-normal flex w-full cursor-pointer items-center justify-between rounded-md pt-[22px] pb-[16px] font-medium tracking-[-0.32px] text-very-dark-blue transition duration-300 hover:text-soft-red md:pr-[21px]">
            Is there a mobile app?
            <img
              src={arrow}
              alt=""
              aria-hidden="true"
              className="transition-all duration-300 ease-in-out"
              width={18}
              height={10}
            />
          </summary>
          <p className="px-5 py-4 text-very-dark-blue/50 md:text-[16px]">
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </p>
        </details>
        <details className="border-y border-very-dark-blue/50">
          <summary className="bg-very-light-gray md:text-normal flex w-full cursor-pointer items-center justify-between rounded-md py-[21px] font-medium tracking-[-0.32px] text-very-dark-blue transition duration-300 hover:text-soft-red md:pr-[21px]">
            What about other Chromium browsers?
            <img
              src={arrow}
              alt=""
              aria-hidden="true"
              className="transition-all duration-300 ease-in-out"
              width={18}
              height={10}
            />
          </summary>
          <p className="px-5 py-4 text-very-dark-blue/50 md:text-[16px]">
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
        </details>
      </div>

      <div className="mt-32 flex justify-center">
        <a
          href="#"
          className="rounded-md border-[3px] border-soft-blue bg-soft-blue py-[10px] px-[24px] text-[14px] font-medium text-white transition duration-300 hover:bg-white hover:text-soft-blue"
        >
          More info
        </a>
      </div>
    </div>
  );
};

export default Questions;
