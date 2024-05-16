import StoreLink, { BtnTypes } from "../components/StoreLink";
import Phone from "../assets/mockup.svg";
import HeroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[85vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
      <div className="sm:w-full md:w-3/6">
        <h1 className="mx-auto mb-8 w-[12ch] text-center text-4xl font-semibold text-gray-800 sm:text-5xl md:mx-0 md:text-left">
          Start spending the smart way
        </h1>
        <p className="m-auto w-[34ch] text-center text-gray-500 md:m-0 md:text-left">
          Take Control of Your Finances Anytime, Anywhere with Kobodrop.
          Discover the Smart Way to Use Your Money!
        </p>
        <StoreLink type={BtnTypes.Primary} />
      </div>
      <div className="md:w-3/6 xl:mb-12 xl:overflow-hidden">
        <img
          src={Phone}
          alt="Phone Image"
          className="right-0 m-auto w-72 xl:absolute xl:left-6 xl:right-0 xl:mt-32 xl:w-80"
        />
        <img
          src={HeroImage}
          alt="Hero Image"
          className="hidden rounded-2xl object-contain xl:flex"
        />
      </div>
    </section>
  );
}
