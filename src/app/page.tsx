"use client";

import Appbar from "@/components/custom/appbar";
import Footer from "@/components/custom/footer";
import Modal from "@/components/custom/modal";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <Appbar />
        <div className="relative h-[95vh] bg-[rgba(0,0,0,0.4)]">
          <div className="absolute inset-0 w-full -z-50  h-full lg:block bg-[rgba(0,0,0,1)]">
            <Image
              src="/bg.jpg"
              alt="Accounting and tax consultation services"
              layout="fill"
              objectFit="cover"
              className="w-[100vw] h-full"
              priority={false}
            />
          </div>
          <div>
            <h1 className="lg:text-[3rem] text-[2rem] text-center pt-10  pb-2 text-white  font-bold">
              Expert Accounting, Business & Tax Help - Find a CPA Today!
            </h1>
          </div>

          <div className="">
            <div className="bg-grey w-11/12 lg:w-8/12 mx-auto lg:mt-16  h-full rounded shadow">
              <div className="flex justify-center items-center py-5 gap-2 px-5">
                {/* <FaSearch className="text-orange text-3xl" /> */}
                <h1 className="text-white lg:text-2xl text-xl font-bold text-center">
                  Access A CPA makes it easy!
                </h1>
              </div>
              <div className="w-full lg:px-5 px-2  pb-8">
                <form className="w-full flex gap-1 items-center">
                  <div className="mt-7 w-full grid grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-5">
                    <Modal issue="accounting">
                      <button
                        className=" text-orange py-2 px-3 font-bold bg-white rounded flex-1"
                        aria-label="Learn more about Accounting services"
                      >
                        <span className="">Accounting</span>
                      </button>
                    </Modal>
                    <Modal issue="business">
                      <button
                        className=" text-white py-2 px-3 font-bold bg-orange rounded flex-1"
                        aria-label="Learn more about Business services"
                      >
                        <span className="">Business</span>
                      </button>
                    </Modal>
                    <Modal issue="tax">
                      <button
                        className=" text-white py-2 px-3 font-bold bg-blue-500 rounded flex-1"
                        aria-label="Learn more about Tax services"
                      >
                        <span className="">Tax</span>
                      </button>
                    </Modal>
                    <Modal issue="audit">
                      <button
                        className=" text-white py-2 px-3 font-bold bg-red-500 rounded flex-1"
                        aria-label="Learn more about Audit services"
                      >
                        <span className="">Audit</span>
                      </button>
                    </Modal>
                    <Modal issue="information Technology">
                      <button
                        className=" text-white py-2 px-3 font-bold bg-yellow-300 rounded flex-1"
                        aria-label="Learn more about Information Technology services"
                      >
                        <span className="hidden lg:block">
                          Information Technology
                        </span>
                        <span className="lg:hidden">IT</span>
                      </button>
                    </Modal>
                    <Modal issue="other">
                      <button
                        className=" text-white py-2 px-3 font-bold bg-green-500 rounded flex-1"
                        aria-label="Learn more about More services"
                      >
                        <span className="">Other</span>
                      </button>
                    </Modal>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
