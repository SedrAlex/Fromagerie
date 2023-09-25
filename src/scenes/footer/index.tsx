import Logo from "@/assets/Footer.png";

const Footer = () => {
  return (
    <footer className="bg-gray-20 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Our creameries are where the artistry happens.
          Here, our cheesemakers turn fresh, local milk into award-winning cheese.
          </p>
          <p>© Fromagerie All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-green-800">Sponsors</h4>
          <br />

          <a href="https://cabotcreamery.com/">CabotCreamery.Co</a>
          <br />
          <br />
          <a href=">https://www.greendirtfarm.com/">Green Dirt Farm </a>
          <br />
          <br />
          <a href="https://nicolaufarms.com/">Nicolau Farms</a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-green-800">Contact Us</h4>
          <p className="my-5">Saint German, Paris, France</p>
          <p>(333) 214-741-4072</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;