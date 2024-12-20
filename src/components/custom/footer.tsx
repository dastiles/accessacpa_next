'use client'
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="w-11/12 lg:w-5/6 mx-auto border-b-[0.5px] border-gray-400 pb-8">
        <div className="flex justify-between lg:items-center flex-col lg:flex-row gap-5">
          <div className="flex gap-10  flex-col lg:flex-row">
            <div className="py-1">
              <h1 className="text-xl font-bold bg-gray-100">For Customers</h1>
              <ul className="flex-col flex gap-2 pt-8 text-gray-500 font-bold bg-gray-100">
                {/* <li className="hover:underline">Find a Professional</li> */}
                <li className="hover:underline"><Link href="/howitworks">How it works</Link></li>
                {/* <li className="hover:underline">Login</li> */}
              </ul>
            </div>
            <div className="py-1">
              <h1 className="text-xl font-bold bg-gray-100">
                For Professionals
              </h1>
              <ul className="flex-col flex gap-2 pt-8 text-gray-500 font-bold bg-gray-100">
              <li className="hover:underline"><Link href="/projoin">Join as a Professional</Link></li>
              <li className="hover:underline"><Link href="/howitworks">How it works</Link></li>
                {/* <li className="hover:underline">Pricing</li>
                <li className="hover:underline">Help Center</li>
                <li className="hover:underline">Mobile App</li> */}
              </ul>
            </div>
            <div className="py-1">
              <h1 className="text-xl font-bold bg-gray-100">About</h1>
              <ul className="flex-col flex gap-2 pt-8 text-gray-500 font-bold bg-gray-100">
                <li className="hover:underline"><Link href="/about">About</Link></li>
                {/* <li className="hover:underline">Careers</li>
                <li className="hover:underline">Affliates</li>
                <li className="hover:underline">Blog</li> */}
              </ul>
            </div>
          </div>
          <div>
            <div>
              <p className="font-bold text-lg">ACCESSACPA</p>
              <div className="flex justify-end gap-5 py-2">
                <FaFacebookF />
                <FaInstagram />
                <FaXTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex pt-5 items-center justify-center px-16">
        <p>
          © 2024 ACCESSACPA Global Limited. Terms & Conditions / Cookie policy /
          Privacy policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
