import { bungeeInline, bungee, lobster } from "./ui/fonts";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className={lobster.className + " lg:text-6xl md:text-5xl text-3xl text-center max-w-screen-md mb-5"}>
        Welcome to
      </div >
      <div className={bungeeInline.className + " lg:text-9xl md:text-8xl text-5xl text-center max-w-screen-lg text-yellow-200"}>
        Freshmore Faceoff!
      </div >
      <div className={bungee.className + " m-8 lg:text-3xl md:text-2xl text-xl text-center"}>
        ISH 2 &nbsp;| &nbsp;13 Nov &nbsp;| &nbsp;2pm-5pm
      </div>
    </div >
  );
}
