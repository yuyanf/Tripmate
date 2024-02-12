import Image from "next/image";

const Background = () => {
  return (
    <div className="fixed inset-0 isolate -z-10">
      <div className="fixed inset-0 top-20 z-20 bg-gradient-to-t from-black to-transparent opacity-80" />
      <Image
        src="/fuji_pink_tint.jpg"
        alt="Fuji"
        width={1920}
        height={1249}
        priority
        className="z-10 h-full w-full rounded-3xl "
      />
    </div>
  );
};

export default Background;
