import Image from "next/image";

const Background = () => {
  return (
    <div className="fixed inset-0 isolate -z-10">
      <div className="fixed inset-0 z-0 bg-black opacity-70" />
      <Image
        src="/fuji_pink_tint.png"
        alt="Fuji"
        width={2904}
        height={1896}
        priority
        quality={100}
        className="z-10 h-full w-full object-cover"
      />
    </div>
  );
};

export default Background;
