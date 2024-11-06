import { bungee, bungeeInline } from "../ui/fonts";

type ScheduleItem = {
  time: string,
  event: string,
}

const scheduleItems: ScheduleItem[] = [
  { time: "1400", event: "Game and Safety Briefings" },
  { time: "1425", event: "Group Stage" },
  { time: "1555", event: "Finals!" },
  { time: "1620", event: "Prize Presentation" },
]

export default function Page() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex flex-col justify-center h-full">
        <div className="bg-white p-8 rounded-2xl text-black m-3">
          <div className={bungee.className + " lg:text-6xl text-4xl lg:mb-8 text-center mb-5 underline"}>Schedule</div>
          {scheduleItems.map((item) => {
            return (<div key={item.time} className=" flex lg:flex-row flex-col" >
              <span className={bungeeInline.className + " lg:text-6xl text-4xl text-center lg:min-w-48 flex lg:items-center"}>{item.time}</span>
              <p className={bungee.className + " lg:text-4xl text-2xl lg:m-3 lg:my-5 flex items-center mb-5"}>{item.event}</p>
            </div>)
          })}
        </div>
      </div>
    </div>
  )
}
