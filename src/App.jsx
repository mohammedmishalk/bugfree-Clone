import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Description from "./components/Description";
import "./App.css";
import BannerSecond from "./components/BannerSecond";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-[100px] h-[2500px] pb-[290.55px] bg-white flex-col  inline-flex">
        <div className="w-[1500px] h-[1694.45px] ">
          <div className="w-[1500px] h-[788px] left-0 top-0 absolute">
            <Navbar />

            <Banner />
          </div>

          <div className="w-[1170px] h-[1000.45px] pt-12 pb-[47px] left-[386px] top-[741px] absolute bg-red-700 flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-16 h-16 p-4 bg-red-700 rounded-[32px] justify-center items-center inline-flex">
              <div className="w-8 h-8 px-[2.35px] py-[7.72px] justify-start items-start flex" />
            </div>
            <div className="w-[1170px] h-[76px] relative">
              <div className="left-[345.82px] top-[-100px] absolute text-center text-white text-[39px] font-extrabold leading-[76px] italic">
                30 SECOND{" "}
              </div>
              <img
                className="w-8 h-[18.16px] left-[575.41px] top-[-90px] absolute"
                src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1693236732/Screenshot_2023-08-28_210012-removebg-preview_dveeey.png"
              />
              <div className="left-[577.83px] top-[-100px] absolute text-center text-white text-[39px] font-extrabold leading-[76px] italic">
                FREE QUOTE
              </div>
            </div>
            <div className="w-[1170px] px-5 justify-start items-start inline-flex">
              <div className="px-0.5 justify-center items-start gap-[1126px] flex">
               
              </div>
              <div className="pt-[5px] justify-center items-start flex">
               
                <div className="self-stretch px-2 flex-col justify-start items-start inline-flex">
                  <div className="p-[15px] bg-zinc-800 rounded justify-start items-start inline-flex">
                    <div className="pr-2.5 pb-px flex-col justify-start items-start gap-1.5 inline-flex">
                      <div className="pr-[231.66px] pb-[4.59px] justify-start items-start gap-px inline-flex">
                        <div className="pb-[1.06px] justify-start items-start flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_2_8978)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.14747 0.585951C8.26087 0.236031 8.58704 -0.000488281 8.95424 -0.000488281C9.32144 -0.000488281 9.64652 0.236031 9.75992 0.585951L11.1823 4.96857C11.2244 5.09709 11.3065 5.20941 11.4155 5.28933C11.5257 5.36925 11.6586 5.41246 11.7936 5.41246L16.4019 5.41029C16.7691 5.41029 17.0942 5.6468 17.2076 5.99672C17.321 6.34556 17.1968 6.7279 16.8998 6.9439L13.1716 9.65145C13.0615 9.73137 12.9794 9.84368 12.9373 9.9722C12.8951 10.1018 12.8962 10.2411 12.9373 10.3697L14.3629 14.7512C14.4763 15.1011 14.3521 15.4834 14.0551 15.6994C13.7581 15.9154 13.3552 15.9154 13.0582 15.6994L9.33225 12.9897C9.22209 12.9098 9.09032 12.8666 8.95424 12.8666C8.81816 12.8666 8.68639 12.9098 8.57623 12.9897L4.84917 15.6994C4.55217 15.9154 4.15038 15.9154 3.85338 15.6994C3.5553 15.4834 3.43113 15.1011 3.54561 14.7512L4.97013 10.3697C5.01225 10.2411 5.01225 10.1018 4.97013 9.9722C4.92909 9.84368 4.847 9.73137 4.73684 9.65145L1.00869 6.9439C0.711691 6.7279 0.5864 6.34556 0.6998 5.99672C0.81428 5.6468 1.13937 5.41029 1.50657 5.41029L6.11384 5.41246C6.24992 5.41246 6.38276 5.36925 6.49184 5.28933C6.602 5.20941 6.68409 5.09709 6.72513 4.96857L8.14747 0.585951Z"
                                fill="#F6BB06"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2_8978">
                                <rect
                                  width="17"
                                  height="15.9375"
                                  fill="white"
                                  transform="translate(0.659912)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="pb-[1.06px] justify-start items-start flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_2_8978)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.14747 0.585951C8.26087 0.236031 8.58704 -0.000488281 8.95424 -0.000488281C9.32144 -0.000488281 9.64652 0.236031 9.75992 0.585951L11.1823 4.96857C11.2244 5.09709 11.3065 5.20941 11.4155 5.28933C11.5257 5.36925 11.6586 5.41246 11.7936 5.41246L16.4019 5.41029C16.7691 5.41029 17.0942 5.6468 17.2076 5.99672C17.321 6.34556 17.1968 6.7279 16.8998 6.9439L13.1716 9.65145C13.0615 9.73137 12.9794 9.84368 12.9373 9.9722C12.8951 10.1018 12.8962 10.2411 12.9373 10.3697L14.3629 14.7512C14.4763 15.1011 14.3521 15.4834 14.0551 15.6994C13.7581 15.9154 13.3552 15.9154 13.0582 15.6994L9.33225 12.9897C9.22209 12.9098 9.09032 12.8666 8.95424 12.8666C8.81816 12.8666 8.68639 12.9098 8.57623 12.9897L4.84917 15.6994C4.55217 15.9154 4.15038 15.9154 3.85338 15.6994C3.5553 15.4834 3.43113 15.1011 3.54561 14.7512L4.97013 10.3697C5.01225 10.2411 5.01225 10.1018 4.97013 9.9722C4.92909 9.84368 4.847 9.73137 4.73684 9.65145L1.00869 6.9439C0.711691 6.7279 0.5864 6.34556 0.6998 5.99672C0.81428 5.6468 1.13937 5.41029 1.50657 5.41029L6.11384 5.41246C6.24992 5.41246 6.38276 5.36925 6.49184 5.28933C6.602 5.20941 6.68409 5.09709 6.72513 4.96857L8.14747 0.585951Z"
                                fill="#F6BB06"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2_8978">
                                <rect
                                  width="17"
                                  height="15.9375"
                                  fill="white"
                                  transform="translate(0.659912)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="pb-[1.06px] justify-start items-start flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_2_8978)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.14747 0.585951C8.26087 0.236031 8.58704 -0.000488281 8.95424 -0.000488281C9.32144 -0.000488281 9.64652 0.236031 9.75992 0.585951L11.1823 4.96857C11.2244 5.09709 11.3065 5.20941 11.4155 5.28933C11.5257 5.36925 11.6586 5.41246 11.7936 5.41246L16.4019 5.41029C16.7691 5.41029 17.0942 5.6468 17.2076 5.99672C17.321 6.34556 17.1968 6.7279 16.8998 6.9439L13.1716 9.65145C13.0615 9.73137 12.9794 9.84368 12.9373 9.9722C12.8951 10.1018 12.8962 10.2411 12.9373 10.3697L14.3629 14.7512C14.4763 15.1011 14.3521 15.4834 14.0551 15.6994C13.7581 15.9154 13.3552 15.9154 13.0582 15.6994L9.33225 12.9897C9.22209 12.9098 9.09032 12.8666 8.95424 12.8666C8.81816 12.8666 8.68639 12.9098 8.57623 12.9897L4.84917 15.6994C4.55217 15.9154 4.15038 15.9154 3.85338 15.6994C3.5553 15.4834 3.43113 15.1011 3.54561 14.7512L4.97013 10.3697C5.01225 10.2411 5.01225 10.1018 4.97013 9.9722C4.92909 9.84368 4.847 9.73137 4.73684 9.65145L1.00869 6.9439C0.711691 6.7279 0.5864 6.34556 0.6998 5.99672C0.81428 5.6468 1.13937 5.41029 1.50657 5.41029L6.11384 5.41246C6.24992 5.41246 6.38276 5.36925 6.49184 5.28933C6.602 5.20941 6.68409 5.09709 6.72513 4.96857L8.14747 0.585951Z"
                                fill="#F6BB06"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2_8978">
                                <rect
                                  width="17"
                                  height="15.9375"
                                  fill="white"
                                  transform="translate(0.659912)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="pb-[1.06px] justify-start items-start flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_2_8978)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.14747 0.585951C8.26087 0.236031 8.58704 -0.000488281 8.95424 -0.000488281C9.32144 -0.000488281 9.64652 0.236031 9.75992 0.585951L11.1823 4.96857C11.2244 5.09709 11.3065 5.20941 11.4155 5.28933C11.5257 5.36925 11.6586 5.41246 11.7936 5.41246L16.4019 5.41029C16.7691 5.41029 17.0942 5.6468 17.2076 5.99672C17.321 6.34556 17.1968 6.7279 16.8998 6.9439L13.1716 9.65145C13.0615 9.73137 12.9794 9.84368 12.9373 9.9722C12.8951 10.1018 12.8962 10.2411 12.9373 10.3697L14.3629 14.7512C14.4763 15.1011 14.3521 15.4834 14.0551 15.6994C13.7581 15.9154 13.3552 15.9154 13.0582 15.6994L9.33225 12.9897C9.22209 12.9098 9.09032 12.8666 8.95424 12.8666C8.81816 12.8666 8.68639 12.9098 8.57623 12.9897L4.84917 15.6994C4.55217 15.9154 4.15038 15.9154 3.85338 15.6994C3.5553 15.4834 3.43113 15.1011 3.54561 14.7512L4.97013 10.3697C5.01225 10.2411 5.01225 10.1018 4.97013 9.9722C4.92909 9.84368 4.847 9.73137 4.73684 9.65145L1.00869 6.9439C0.711691 6.7279 0.5864 6.34556 0.6998 5.99672C0.81428 5.6468 1.13937 5.41029 1.50657 5.41029L6.11384 5.41246C6.24992 5.41246 6.38276 5.36925 6.49184 5.28933C6.602 5.20941 6.68409 5.09709 6.72513 4.96857L8.14747 0.585951Z"
                                fill="#F6BB06"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2_8978">
                                <rect
                                  width="17"
                                  height="15.9375"
                                  fill="white"
                                  transform="translate(0.659912)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="pb-[1.06px] justify-start items-start flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_2_8978)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.14747 0.585951C8.26087 0.236031 8.58704 -0.000488281 8.95424 -0.000488281C9.32144 -0.000488281 9.64652 0.236031 9.75992 0.585951L11.1823 4.96857C11.2244 5.09709 11.3065 5.20941 11.4155 5.28933C11.5257 5.36925 11.6586 5.41246 11.7936 5.41246L16.4019 5.41029C16.7691 5.41029 17.0942 5.6468 17.2076 5.99672C17.321 6.34556 17.1968 6.7279 16.8998 6.9439L13.1716 9.65145C13.0615 9.73137 12.9794 9.84368 12.9373 9.9722C12.8951 10.1018 12.8962 10.2411 12.9373 10.3697L14.3629 14.7512C14.4763 15.1011 14.3521 15.4834 14.0551 15.6994C13.7581 15.9154 13.3552 15.9154 13.0582 15.6994L9.33225 12.9897C9.22209 12.9098 9.09032 12.8666 8.95424 12.8666C8.81816 12.8666 8.68639 12.9098 8.57623 12.9897L4.84917 15.6994C4.55217 15.9154 4.15038 15.9154 3.85338 15.6994C3.5553 15.4834 3.43113 15.1011 3.54561 14.7512L4.97013 10.3697C5.01225 10.2411 5.01225 10.1018 4.97013 9.9722C4.92909 9.84368 4.847 9.73137 4.73684 9.65145L1.00869 6.9439C0.711691 6.7279 0.5864 6.34556 0.6998 5.99672C0.81428 5.6468 1.13937 5.41029 1.50657 5.41029L6.11384 5.41246C6.24992 5.41246 6.38276 5.36925 6.49184 5.28933C6.602 5.20941 6.68409 5.09709 6.72513 4.96857L8.14747 0.585951Z"
                                fill="#F6BB06"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2_8978">
                                <rect
                                  width="17"
                                  height="15.9375"
                                  fill="white"
                                  transform="translate(0.659912)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div className="h-[81.19px] pr-[14.66px] justify-start items-start inline-flex">
                        <div className="text-white text-sm font-normal leading-tight">
                          My first experience with BugsFree was
                          <br />
                          amazing. Sasha’s customer service was beyond
                          <br />
                          good, she was knowledgeable, efficient and
                          <br />
                          understanding.. And those reviews on Stoy are
                        </div>
                      </div>
                    </div>
                    <div className="w-5 h-5 justify-center items-start flex">
                      <div className="w-5 h-5 relative">
                        <div className="w-[17.92px] h-[18.33px] left-[0.83px] top-[0.83px] absolute"></div>
                        <div className="w-[17.92px] h-[18.33px] left-[0.83px] top-[0.83px] absolute"></div>
                        <div className="w-[17.92px] h-[18.33px] left-[0.83px] top-[0.83px] absolute"></div>
                        <div className="w-[17.92px] h-[18.33px] left-[0.83px] top-[0.83px] absolute"></div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-[5px] pt-[15px] justify-start items-start gap-[15px] inline-flex">
                    <img
                      className="w-10 h-10 relative rounded-[30px]"
                      src="https://s3-alpha-sig.figma.com/img/8708/1ef8/165d928bfeee95866c5623fd24e4c5ee?Expires=1694390400&Signature=lICTfVnuhMVmljKKjh7uZm~NEQybndoFuOOPilj65iJaujAC1WnJy6u5vIQI-1iGHb0MVtT4JGfHspG0InqGYcQiRvlUIVgcEavNZEPrOZ9RxPzwuZzSztNtK9-iMheCYIZ77sYX72GykGtMIxBICUbOP9CzvOYZCWfcaJLnorbvseslilOLOX9vnzOv2Ofckj3Ppg5xmceyguWd-Hla2fzSWs6PLcJ~6nzwoIakIGOgmPxfUqOsiNjQ4uNgRRvQUxLiR~aX-tYMgqMZwl3vCF~RT~3Q2biwOHUl9XszH8xj2fSHyxOphVQXNaU1eb9HU7OnQ16j0xm6KfH~rQqR6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    />
                    {/* <div className="w-5 h-2.5 border-l-4 border-r-4 border-t-4 border-zinc-800" /> */}
                    <div className="py-[0.10px] flex-col justify-center items-start gap-px inline-flex">
                      <div className="pr-[196.66px] justify-start items-start inline-flex">
                        <div className="text-white text-[15px] font-bold leading-[21px]">
                          Yean Long Lai
                        </div>
                      </div>
                      <div className="pr-[210.66px] pb-[0.80px] opacity-50 justify-start items-start inline-flex">
                        <div className="text-white text-xs font-normal leading-none">
                          August 25, 2023
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-2 flex-col justify-start items-start inline-flex">
                  <div className="p-[15px] bg-zinc-800 rounded justify-start items-start inline-flex">
                    <div className="pr-2.5 pb-px flex-col justify-start items-start gap-1.5 inline-flex">
                      <div className="pr-[231.66px] pb-[4.59px] justify-start items-start gap-px inline-flex">
                        <div className="pb-[1.06px] justify-start items-start flex">
                          <div className="w-[17px] h-[15.94px] relative">
                            {/* Display star icon here */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="16"
                              viewBox="0 0 18 16"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_2_8978)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.14747 0.585951C8.26087 0.236031 8.58704 -0.000488281 8.95424 -0.000488281C9.32144 -0.000488281 9.64652 0.236031 9.75992 0.585951L11.1823 4.96857C11.2244 5.09709 11.3065 5.20941 11.4155 5.28933C11.5257 5.36925 11.6586 5.41246 11.7936 5.41246L16.4019 5.41029C16.7691 5.41029 17.0942 5.6468 17.2076 5.99672C17.321 6.34556 17.1968 6.7279 16.8998 6.9439L13.1716 9.65145C13.0615 9.73137 12.9794 9.84368 12.9373 9.9722C12.8951 10.1018 12.8962 10.2411 12.9373 10.3697L14.3629 14.7512C14.4763 15.1011 14.3521 15.4834 14.0551 15.6994C13.7581 15.9154 13.3552 15.9154 13.0582 15.6994L9.33225 12.9897C9.22209 12.9098 9.09032 12.8666 8.95424 12.8666C8.81816 12.8666 8.68639 12.9098 8.57623 12.9897L4.84917 15.6994C4.55217 15.9154 4.15038 15.9154 3.85338 15.6994C3.5553 15.4834 3.43113 15.1011 3.54561 14.7512L4.97013 10.3697C5.01225 10.2411 5.01225 10.1018 4.97013 9.9722C4.92909 9.84368 4.847 9.73137 4.73684 9.65145L1.00869 6.9439C0.711691 6.7279 0.5864 6.34556 0.6998 5.99672C0.81428 5.6468 1.13937 5.41029 1.50657 5.41029L6.11384 5.41246C6.24992 5.41246 6.38276 5.36925 6.49184 5.28933C6.602 5.20941 6.68409 5.09709 6.72513 4.96857L8.14747 0.585951Z"
                                  fill="#F6BB06"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_2_8978">
                                  <rect
                                    width="17"
                                    height="15.9375"
                                    fill="white"
                                    transform="translate(0.659912)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="pb-[1.06px] justify-start items-start flex">
                          <div className="w-[17px] h-[15.94px] relative">
                            {/* Display star icon here */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="16"
                              viewBox="0 0 18 16"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_2_8978)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.14747 0.585951C8.26087 0.236031 8.58704 -0.000488281 8.95424 -0.000488281C9.32144 -0.000488281 9.64652 0.236031 9.75992 0.585951L11.1823 4.96857C11.2244 5.09709 11.3065 5.20941 11.4155 5.28933C11.5257 5.36925 11.6586 5.41246 11.7936 5.41246L16.4019 5.41029C16.7691 5.41029 17.0942 5.6468 17.2076 5.99672C17.321 6.34556 17.1968 6.7279 16.8998 6.9439L13.1716 9.65145C13.0615 9.73137 12.9794 9.84368 12.9373 9.9722C12.8951 10.1018 12.8962 10.2411 12.9373 10.3697L14.3629 14.7512C14.4763 15.1011 14.3521 15.4834 14.0551 15.6994C13.7581 15.9154 13.3552 15.9154 13.0582 15.6994L9.33225 12.9897C9.22209 12.9098 9.09032 12.8666 8.95424 12.8666C8.81816 12.8666 8.68639 12.9098 8.57623 12.9897L4.84917 15.6994C4.55217 15.9154 4.15038 15.9154 3.85338 15.6994C3.5553 15.4834 3.43113 15.1011 3.54561 14.7512L4.97013 10.3697C5.01225 10.2411 5.01225 10.1018 4.97013 9.9722C4.92909 9.84368 4.847 9.73137 4.73684 9.65145L1.00869 6.9439C0.711691 6.7279 0.5864 6.34556 0.6998 5.99672C0.81428 5.6468 1.13937 5.41029 1.50657 5.41029L6.11384 5.41246C6.24992 5.41246 6.38276 5.36925 6.49184 5.28933C6.602 5.20941 6.68409 5.09709 6.72513 4.96857L8.14747 0.585951Z"
                                  fill="#F6BB06"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_2_8978">
                                  <rect
                                    width="17"
                                    height="15.9375"
                                    fill="white"
                                    transform="translate(0.659912)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="pb-[1.06px] justify-start items-start flex">
                          <div className="w-[17px] h-[15.94px] relative">
                            {/* Display star icon here */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="16"
                              viewBox="0 0 18 16"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_2_8978)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.14747 0.585951C8.26087 0.236031 8.58704 -0.000488281 8.95424 -0.000488281C9.32144 -0.000488281 9.64652 0.236031 9.75992 0.585951L11.1823 4.96857C11.2244 5.09709 11.3065 5.20941 11.4155 5.28933C11.5257 5.36925 11.6586 5.41246 11.7936 5.41246L16.4019 5.41029C16.7691 5.41029 17.0942 5.6468 17.2076 5.99672C17.321 6.34556 17.1968 6.7279 16.8998 6.9439L13.1716 9.65145C13.0615 9.73137 12.9794 9.84368 12.9373 9.9722C12.8951 10.1018 12.8962 10.2411 12.9373 10.3697L14.3629 14.7512C14.4763 15.1011 14.3521 15.4834 14.0551 15.6994C13.7581 15.9154 13.3552 15.9154 13.0582 15.6994L9.33225 12.9897C9.22209 12.9098 9.09032 12.8666 8.95424 12.8666C8.81816 12.8666 8.68639 12.9098 8.57623 12.9897L4.84917 15.6994C4.55217 15.9154 4.15038 15.9154 3.85338 15.6994C3.5553 15.4834 3.43113 15.1011 3.54561 14.7512L4.97013 10.3697C5.01225 10.2411 5.01225 10.1018 4.97013 9.9722C4.92909 9.84368 4.847 9.73137 4.73684 9.65145L1.00869 6.9439C0.711691 6.7279 0.5864 6.34556 0.6998 5.99672C0.81428 5.6468 1.13937 5.41029 1.50657 5.41029L6.11384 5.41246C6.24992 5.41246 6.38276 5.36925 6.49184 5.28933C6.602 5.20941 6.68409 5.09709 6.72513 4.96857L8.14747 0.585951Z"
                                  fill="#F6BB06"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_2_8978">
                                  <rect
                                    width="17"
                                    height="15.9375"
                                    fill="white"
                                    transform="translate(0.659912)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="pb-[1.06px] justify-start items-start flex">
                          <div className="w-[17px] h-[15.94px] relative">
                            {/* Display star icon here */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="16"
                              viewBox="0 0 18 16"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_2_8978)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.14747 0.585951C8.26087 0.236031 8.58704 -0.000488281 8.95424 -0.000488281C9.32144 -0.000488281 9.64652 0.236031 9.75992 0.585951L11.1823 4.96857C11.2244 5.09709 11.3065 5.20941 11.4155 5.28933C11.5257 5.36925 11.6586 5.41246 11.7936 5.41246L16.4019 5.41029C16.7691 5.41029 17.0942 5.6468 17.2076 5.99672C17.321 6.34556 17.1968 6.7279 16.8998 6.9439L13.1716 9.65145C13.0615 9.73137 12.9794 9.84368 12.9373 9.9722C12.8951 10.1018 12.8962 10.2411 12.9373 10.3697L14.3629 14.7512C14.4763 15.1011 14.3521 15.4834 14.0551 15.6994C13.7581 15.9154 13.3552 15.9154 13.0582 15.6994L9.33225 12.9897C9.22209 12.9098 9.09032 12.8666 8.95424 12.8666C8.81816 12.8666 8.68639 12.9098 8.57623 12.9897L4.84917 15.6994C4.55217 15.9154 4.15038 15.9154 3.85338 15.6994C3.5553 15.4834 3.43113 15.1011 3.54561 14.7512L4.97013 10.3697C5.01225 10.2411 5.01225 10.1018 4.97013 9.9722C4.92909 9.84368 4.847 9.73137 4.73684 9.65145L1.00869 6.9439C0.711691 6.7279 0.5864 6.34556 0.6998 5.99672C0.81428 5.6468 1.13937 5.41029 1.50657 5.41029L6.11384 5.41246C6.24992 5.41246 6.38276 5.36925 6.49184 5.28933C6.602 5.20941 6.68409 5.09709 6.72513 4.96857L8.14747 0.585951Z"
                                  fill="#F6BB06"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_2_8978">
                                  <rect
                                    width="17"
                                    height="15.9375"
                                    fill="white"
                                    transform="translate(0.659912)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        {/* The fifth star will not be filled to represent 4 stars */}
                        <div className="pb-[1.06px] justify-start items-start flex">
                          <div className="w-[17px] h-[15.94px] relative">
                            {/* Display star outline icon here */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="16"
                              viewBox="0 0 18 16"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_2_8978)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.14747 0.585951C8.26087 0.236031 8.58704 -0.000488281 8.95424 -0.000488281C9.32144 -0.000488281 9.64652 0.236031 9.75992 0.585951L11.1823 4.96857C11.2244 5.09709 11.3065 5.20941 11.4155 5.28933C11.5257 5.36925 11.6586 5.41246 11.7936 5.41246L16.4019 5.41029C16.7691 5.41029 17.0942 5.6468 17.2076 5.99672C17.321 6.34556 17.1968 6.7279 16.8998 6.9439L13.1716 9.65145C13.0615 9.73137 12.9794 9.84368 12.9373 9.9722C12.8951 10.1018 12.8962 10.2411 12.9373 10.3697L14.3629 14.7512C14.4763 15.1011 14.3521 15.4834 14.0551 15.6994C13.7581 15.9154 13.3552 15.9154 13.0582 15.6994L9.33225 12.9897C9.22209 12.9098 9.09032 12.8666 8.95424 12.8666C8.81816 12.8666 8.68639 12.9098 8.57623 12.9897L4.84917 15.6994C4.55217 15.9154 4.15038 15.9154 3.85338 15.6994C3.5553 15.4834 3.43113 15.1011 3.54561 14.7512L4.97013 10.3697C5.01225 10.2411 5.01225 10.1018 4.97013 9.9722C4.92909 9.84368 4.847 9.73137 4.73684 9.65145L1.00869 6.9439C0.711691 6.7279 0.5864 6.34556 0.6998 5.99672C0.81428 5.6468 1.13937 5.41029 1.50657 5.41029L6.11384 5.41246C6.24992 5.41246 6.38276 5.36925 6.49184 5.28933C6.602 5.20941 6.68409 5.09709 6.72513 4.96857L8.14747 0.585951Z"
                                  fill="#F6BB06"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_2_8978">
                                  <rect
                                    width="17"
                                    height="15.9375"
                                    fill="white"
                                    transform="translate(0.659912)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="h-[81.19px] pr-[19.66px] justify-start items-start inline-flex">
                        <div className="text-white text-sm font-normal leading-tight">
                          Stoy was incredible!!!! He did an amazing job
                          <br />
                          proving the best pest control service! He killed
                          <br />
                          all of the bugs not just in our apartment but
                          <br />
                          the world. This business is successful because
                        </div>
                      </div>
                    </div>
                    <div className="w-5 h-5 justify-center items-start flex">
                      <div className="w-5 h-5 relative">
                        <div className="w-[17.92px] h-[18.33px] left-[0.83px] top-[0.83px] absolute">
                          {/* Display your star icon here */}
                        </div>
                        {/* You can repeat this pattern for other star icons */}
                      </div>
                    </div>
                  </div>

                  <div className="pl-[5px] pt-[15px] justify-start items-start gap-[15px] inline-flex">
                    <img
                      className="w-10 h-10 relative rounded-[30px]"
                      src="https://s3-alpha-sig.figma.com/img/61f6/9f28/d4daa5cf387f047c2f447aca245c670f?Expires=1694390400&Signature=URdH89VMk5RY4XgquSHGBsbgptXfPTyvKoP1f92lsL8-4MQyEEZxP6eC0f9iH5ieAZ8a6R3EZAtV1n~D9Cc1ybbTCCz8vwp10ENGMrBU2Q051hesQN6dAvB2jp~l8sQu4ZsxJeD~sEPlS3Ub1ZMU1G20hI6NBaTzsvq46JTxRMrh~uu6prHVBVg-2cJzVYvH-l2n02CL9Z-UfL3H0r3N1x-vn5NDUlIs69b6yyxn4jd63lh4cJUBtGj8tSYQx5vEw7RhHQq17btiaRcKpYJNPcoLrDkIKVqxuMpXxx3r0SdJb6YXNojb~mkB2mQyz--lxPvTnGVUosgaYMBQiUTDRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    />
                    {/* <div className="w-5 h-2.5 border-l-4 border-r-4 border-t-4 border-zinc-800" /> */}
                    <div className="py-[0.10px] flex-col justify-center items-start gap-px inline-flex">
                      <div className="pr-[203.66px] justify-start items-start inline-flex">
                        <div className="text-white text-[15px] font-bold leading-[21px]">
                          Liza Zaitsava
                        </div>
                      </div>
                      <div className="pr-[210.66px] pb-[0.80px] opacity-50 justify-start items-start inline-flex">
                        <div className="text-white text-xs font-normal leading-none">
                          August 25, 2023
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-2 flex-col justify-start items-start inline-flex">
                  {/* <div className="p-[15px] bg-zinc-800 rounded justify-start items-start inline-flex">
              <div className="pr-2.5 pb-px flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="pr-[231.66px] pb-[4.59px] justify-start items-start gap-px inline-flex">
                  <div className="pb-[1.06px] justify-start items-start flex">
                    <div className="w-[17px] h-[15.94px] relative" />
                  </div>
                  <div className="pb-[1.06px] justify-start items-start flex">
                    <div className="w-[17px] h-[15.94px] relative" />
                  </div>
                  <div className="pb-[1.06px] justify-start items-start flex">
                    <div className="w-[17px] h-[15.94px] relative" />
                  </div>
                  <div className="pb-[1.06px] justify-start items-start flex">
                    <div className="w-[17px] h-[15.94px] relative" />
                  </div>
                  <div className="pb-[1.06px] justify-start items-start flex">
                    <div className="w-[17px] h-[15.94px] relative" />
                  </div>
                </div>
                <div className="h-[81.19px] pr-[78.66px] justify-start items-start inline-flex">
                  <div className="text-white text-sm font-normal leading-tight">Stoy very efficient and helpful. Highly<br/>recommend the service</div>
                </div>
              </div>
              <div className="w-5 h-5 justify-center items-start flex">
                <div className="w-5 h-5 relative">
                  <div className="w-[17.92px] h-[18.33px] left-[0.83px] top-[0.83px] absolute">
                  </div>
                  <div className="w-[17.92px] h-[18.33px] left-[0.83px] top-[0.83px] absolute">
                  </div>
                  <div className="w-[17.92px] h-[18.33px] left-[0.83px] top-[0.83px] absolute">
                  </div>
                  <div className="w-[17.92px] h-[18.33px] left-[0.83px] top-[0.83px] absolute">
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-[5px] pt-[15px] justify-start items-start gap-[15px] inline-flex">
              <img className="w-10 h-10 relative rounded-[30px]" src="https://via.placeholder.com/40x40" />
              <div className="w-5 h-2.5 border-l-4 border-r-4 border-t-4 border-zinc-800" />
              <div className="py-[0.10px] flex-col justify-center items-start gap-px inline-flex">
                <div className="pr-[187.66px] justify-start items-start inline-flex">
                  <div className="text-white text-[15px] font-bold leading-[21px]">Richie Duignan</div>
                </div>
                <div className="pr-[210.66px] pb-[0.80px] opacity-50 justify-start items-start inline-flex">
                  <div className="text-white text-xs font-normal leading-none">August 24, 2023</div>
                </div>
              </div>
            </div> */}
                </div>
                {/* <div className="pl-[68px] pr-2 pt-[154.78px] justify-start items-start inline-flex">
            <div className="w-[300.66px] h-10 relative" />
          </div> */}
              </div>
            </div>
            <div className="w-[1170px] px-[17px] pt-8 pb-[15.67px] bg-red-700 justify-start items-start inline-flex">
              {/* <div className="w-[1169.33px] h-[49.33px] border-r-8 border-b-8 border-black" /> */}
              <div className="h-[503px] justify-start items-start flex">
                <div className="grow shrink basis-0 h-[502.67px] px-[15px] pb-[47.65px] justify-start items-start flex">
                  <img
                    className="w-[538px] h-[455.02px] relative"
                    src="https://s3-alpha-sig.figma.com/img/8708/1ef8/165d928bfeee95866c5623fd24e4c5ee?Expires=1694390400&Signature=lICTfVnuhMVmljKKjh7uZm~NEQybndoFuOOPilj65iJaujAC1WnJy6u5vIQI-1iGHb0MVtT4JGfHspG0InqGYcQiRvlUIVgcEavNZEPrOZ9RxPzwuZzSztNtK9-iMheCYIZ77sYX72GykGtMIxBICUbOP9CzvOYZCWfcaJLnorbvseslilOLOX9vnzOv2Ofckj3Ppg5xmceyguWd-Hla2fzSWs6PLcJ~6nzwoIakIGOgmPxfUqOsiNjQ4uNgRRvQUxLiR~aX-tYMgqMZwl3vCF~RT~3Q2biwOHUl9XszH8xj2fSHyxOphVQXNaU1eb9HU7OnQ16j0xm6KfH~rQqR6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  />
                </div>
                <div className="grow shrink basis-0 px-[15px] flex-col justify-start items-start gap-[8.33px] inline-flex">
                  <div className="text-white text-[19px] font-semibold leading-normal">
                    Your Contact Details
                  </div>
                  <div className="w-[538px] h-[470.67px] relative">
                    <div className="form-field ">
                      <input
                        type="text"
                        id="fullName"
                        className="input w-[535.33px] h-[47.33px] pl-2"
                        placeholder="Full name"
                        style={{ color: "black" }}
                      />
                    </div>

                    {/* <div className="w-[535.33px] h-[47.33px] px-3 pt-[11.01px] pb-[15px] left-[1.33px] top-[67.33px] absolute bg-white rounded border border-neutral-400 justify-start items-start inline-flex"> */}
                    <div className="  pt-[20px] pb-[1.33px] justify-start items-start flex">
                      <input
                        type="number"
                        id="phonenumber"
                        className="input w-[534.33px] h-[47.33px] pl-2"
                        placeholder="Phone Number"
                        style={{ color: "black" }}
                      />
                      {/* </div> */}
                    </div>
                    {/* <div className="w-[535.33px] h-[47.33px] px-3 pt-[11.01px] pb-[15px] left-[1.33px] top-[133.33px] absolute bg-white rounded border border-neutral-400 justify-start items-start inline-flex"> */}
                    <div className="  pt-[20px] pb-[1.33px] justify-start items-start flex">
                      <input
                        type="email"
                        id="email"
                        className="input w-[534.33px] h-[47.33px] pl-2"
                        placeholder="Email Address"
                        style={{ color: "black" }}
                      />
                      {/* </div> */}
                    </div>
                    {/* <div className="w-[535.33px] h-[47.33px] pl-4 pr-[34.67px] pt-[11.01px] pb-[15px] left-[1.33px] top-[199.33px] absolute bg-white rounded border border-neutral-400 justify-start items-start inline-flex"> */}
                    <div className=" pt-[20px] justify-start items-start flex">
                      <select
                        id="phonenumber"
                        className="input w-[534.33px] h-[47.33px] pl-2"
                        style={{ color: "black" }}
                      >
                        <option value="">Pest Service Required</option>
                        <option value="pest control">Pest Control</option>
                        <option value="pest inspections">
                          Pest Inspections
                        </option>
                        <option value="termite inspections">
                          Termite Inspections
                        </option>
                        <option value="commercial pest insp">
                          Commercial Pest Inspections
                        </option>
                        <option value="commercial pest insp">
                          Pre Purchase Inspections
                        </option>
                        <option value="commercial pest insp">
                          Commericial Pest Control
                        </option>
                      </select>
                      {/* </div> */}
                    </div>
                    <div className=" pt-[20px] justify-start items-start flex">
                      {/* <div className="w-[535.33px] h-36 pl-3 pr-[245.34px] pt-2 pb-[109.33px] left-[1.33px] top-[265.33px] absolute bg-white rounded border border-neutral-400 justify-start items-start inline-flex"> */}
                      <textarea
                        id="message"
                        className="input w-[532.5px] h-32 pl-2 pt-2"
                        placeholder="Tell us about your pest control problem"
                        style={{ color: "black" }}
                      ></textarea>
                    </div>
                    {/* </div> */}
                    <div className="w-[538px] px-[13.33px] py-[7.33px] left-0 top-[432px] absolute bg-gray-800 rounded border border-gray-800 justify-center items-start inline-flex transition duration-300 ease-in-out hover:bg-black">
                      <button className="text-center text-white text-base font-normal leading-normal">
                        Send My Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-6 h-3.5 border-l-4 border-r-4 border-t-8 border-red-700" /> */}
          </div>
        </div>
      </div>

      <Description />
      <BannerSecond />
      <Footer/>
    </>
  );
}

export default App;
