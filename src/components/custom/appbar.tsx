import Link from "next/link";

const Appbar = () => {
  return (
    <div className="relative">
      <div className="bg-white flex justify-between items-center py-10 shadow-md h-5 w-full px-[5vw]">
        <div className="flex gap-10 items-center">
          <div className="flex gap-2 items-center">
            <Link href={"/"}>
              <h1 className="font-bold lg:text-2xl text-lg text-orange">
              Access A CPA
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
