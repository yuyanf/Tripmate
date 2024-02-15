import Image from "next/image";

const Background = () => {
  return (
    <div className="fixed inset-0 isolate -z-10">
      <div className="fixed inset-0 z-0 bg-gradient-to-l from-transparent to-black opacity-60" />
      <Image
        src="/kayak.png"
        alt="Small Island topdown view"
        placeholder="blur"
        priority
        className="z-10 h-full w-full object-cover"
      />
    </div>
  );
};

export default Background;
