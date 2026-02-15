import Image from "next/image";

export default function DigitalArt() {
  return (
    <div className="w-full space-y-8 pb-16">
      <Image
        src="/img/digital-art.jpeg"
        alt="Digital Art"
        width={1024}
        height={768}
        className="mask-from-bottom h-auto w-full contrast-110 mix-blend-screen"
      />
    </div>
  );
}
