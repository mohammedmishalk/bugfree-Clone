import React, { useState, useEffect } from "react";
import Subnav from "./Subnav";
function Navbar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "pm" : "am";

      hours = hours % 12 || 12;

      setCurrentTime(`${hours}:${minutes}:${seconds} ${ampm}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="DivSiteHeaderTop w-[1897px] h-24 px-[348.50px] py-4 bg-gray-800 justify-center items-start inline-flex" style={{ position: 'sticky', top: '0', zIndex: '100' }}>
  <div className="DivContainer grow shrink basis-0 h-16 px-[15px] justify-start items-center flex">
        <div className="Link justify-start items-start flex">
          <img
            className="PictureLogoWebp w-[157px] h-14 relative"
            src="https://s3-alpha-sig.figma.com/img/dc38/586c/aa0970f249ddfd7078c685e9029ce7f4?Expires=1694390400&Signature=R9k-csQG7dsQ59Cl1XEoPjoCM9c8Vj-IJLsBhUXDteWDZxwjgUdhDr487K-TclpcZ65KBlrC5qTNmqGzIUvASj4S--dTgr1EHIYICAX2XDyE4o~BazO0ZUZ7RTNnidmo69tfwm5nYV3eYdsAuHYUyLbAKtaZx2R4texlWsHwV4SdTe5iuyTgH1Z9ffI6sb5A6BvtxKZO92YZv61uRIMCQ1loAQza9pABMSIibU0Cu7D58qKn1hzeGk1mFeDwg1DR226IBtWhEk0gBMjB5DcH2bL9QCtpSbrwi~7r9dp8C7BS4X8XNkXPcQJmv3X21gTFJjTJEHe5RPF0EFnPAwGaXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
        </div>
        <div className="DivPy2Margin grow shrink basis-0 h-[54.39px] pl-[200.86px] pt-2 justify-center items-center flex">
          <div className="DivPy2 pl-[11px] pr-2 pt-[7px] pb-2 bg-black justify-center items-center flex">
            <div className="0505Pm text-white text-sm font-normal">
              {" "}
              {currentTime}
            </div>
            <div className="DivMx3Margin pl-4 pr-[14.78px] pb-[0.39px] justify-start items-start flex">
              <div className=" text-green-800 text-[13px] font-normal leading-[30.40px]">
                ⬤
              </div>
            </div>
            <div className="DivH2d6feca57f pr-[3.13px] pb-[0.39px] justify-start items-start flex">
              <div className="WeReOpen text-white text-base font-normal leading-[30.40px]">
                We're Open!
              </div>
            </div>
          </div>
        </div>
        <div className="LinkMargin pl-6 justify-start items-start flex">
          <div className="Link w-[160.61px] h-[30.39px] relative">
            <div className="Img w-5 h-5 left-[-0px] top-[7px] absolute justify-start items-start inline-flex">
              <img
                src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693218103/Vector_x9ixpy.png"
                alt="Image"
                className="w-full h-full"
              />
            </div>
            <div className="StrongRequestCallBack left-[28.39px] top-[-1px] absolute text-white text-base font-bold leading-[30.40px]">
              Request Call Back
            </div>
          </div>
        </div>
        <div className="DivDNoneMargin pl-6 pt-[19px] pb-6 justify-start items-start flex">
          <div className="Link w-24 h-[21px] relative bg-gray-800">
            <img
              className="YoutubePng w-24 h-16 left-0 top-[-19px] absolute"
              src="https://s3-alpha-sig.figma.com/img/ffd9/3e9c/11a2f0bf286f4084f01b2e5458c21347?Expires=1694390400&Signature=P0YaK7Lfs9QHTu6xPna7Zx3rfjlqNkFjRXexwhvClDU~ptaWSvjTGf5Y27PKcnfHgD28LMLF-KSz3y-LdATeXobtfufMwSXYOvUXIOaxqwZkKlBLrwf9eNUiglyffyT2W3eV875DCtc~Cv~ur-DC4JDYYvmQydpX076iTdHOAG1C78OXj0MZnaAa1hQPd7uL-bMGjVCjWqKg2soAqDl~vvSi0HaULAXQxXhvyrUkfcoY9ezvEmMstrU2K7hIlpsjhGVEftX0FmUclIo9PC2aS78FaLYxPwZkMbRZUOM1LGsde~yYS8yokr5B7HB81jsJ1o2z3EUHHL1HyXDNs51nnQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
          </div>
        </div>
        <div className="LinkMargin pl-12 justify-start items-start flex">
          <div className="Link pr-[0.83px] pt-[2.59px] justify-start items-center gap-[8.39px] flex">
            <div className="Img w-5 h-5 px-[3.75px] justify-start items-start flex">
              {/* You can replace 'your-image-url' with the actual URL of the image you want to display */}
              <img
                src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693218103/Vector_1_lghs6y.png"
                alt="Call Photo"
                className="w-full h-full"
              />
            </div>
            <div className="Strong1300855548 text-white text-[22px] font-semibold leading-7">
              1300 855 548
            </div>
          </div>
        </div>
        <div className="LinkMargin pl-4 pt-[3px] justify-start items-start flex">
          <img
            className="LinkEmailWebp w-7 h-7 relative"
            src="https://s3-alpha-sig.figma.com/img/c58a/fb45/a72e8f5ac5a9aadb7da0f9253be08f11?Expires=1694390400&Signature=nhegqxlwJuB0TmMoj96AoW6iyPOD8jk7wzBekKRIpd3dnACSFLFvAMic90yA-mP0OTHeA4f4BUn0on~WSg3EVJXjdi2ROFEbrDjsTO08Xy1MVlz~b5vOUczMKczYEQ2Rh0zwOs5-PXIpEAz1Re47e4YyAgItelCDQrhgaS2mxuEuFhJuErdngM2TjIw3HZg132vb3zCI7POeL2pyDVctQYxFJEJ2asjtJ-QT4KBkrz4V~GE0XkOyibDVuE4KFXo8GyBWKWYnX4qp8ICEriugtyvfoYs~ozVbYn1qg5gHprAVcL5nOp8Hqk4nY30WLyfiSwbH5WVJEKQeNnTM0KnS5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
        </div>
      </div>
      
    </div>
 {/* subnav */}

 <div className="DivSubnavSticky" style={{ position: 'sticky', top: '80px', zIndex: '100' }}>
        <Subnav />
      </div>
 {/* subnav */}



    {/* <Subnav/> */}
   </>
  );
}

export default Navbar;
