import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="bg-base-200 shadow-lg">
      <div className="navbar min-h-[100px]">
        <div className="flex items-center justify-center w-full">
          <Image
            src="/logo.png"
            alt="Peaceful Peak Planning"
            width={150}
            height={0} // height: 0 + auto sizing via CSS
            style={{ height: "auto" }} // maintains aspect ratio
          />
        </div>
      </div>
    </div>
  );
};
