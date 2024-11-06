import { bungeeShade } from "./ui/fonts";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className={bungeeShade.className + " text-8xl text-center max-w-screen-md"}>
        Welcome to Freshmore Faceoff!
      </div >
    </div>
  );
}
