import Appbar from "@/components/custom/appbar";
import Footer from "@/components/custom/footer";
import Link from "next/link";


const Succes = () => {
  return (
    <main>
      <Appbar />
      <div className="relative w-full h-[250px]">
        <div className="w-full h-full  flex flex-col justify-center items-center px-8">
          <h1 className=" text-3xl font-bold text-center">
            Thank you for getting in touch. <br /> We will get back with you
            soon. Check your spam for an email from accesscpa.com
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center py-8">
        <Link href={"/"}>
          <button className=" text-white py-2 px-8 font-bold bg-orange rounded">
            <span className="">Go Back</span>
          </button>
        </Link>
      </div>
      <Footer />
    </main>
  );
};

export default Succes;
