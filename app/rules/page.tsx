import { bungee, bungeeInline } from "../ui/fonts"
import Image from "next/image"


type FormatRule = {
  label: string,
  rule: string[],
}

type Rule = {
  label: string,
  rule: string,
}

const formatRules: FormatRule[] = [
  {
    label: "Group Stage",
    rule: [
      "The 8 teams will be split into 2 groups.",
      "Each group will play round-robin against each other.",
      "A win earns 3 points, a draw 1 point, and a loss 0 points.",
      "The top team from each group will qualify to the finals."
    ],
  },
  { label: "Finals", rule: ["The top 2 teams will compete in a final match.", "The winner takes it all!"], },
]

const gameRules: Rule[] = [
  { label: "01", rule: "Games are 7v7, with remaining players are subtitutes. Substitutions can be made freely between games." },
  { label: "02", rule: "Each game lasts 10 minutes, with no stoppages." },
  { label: "03", rule: "When the game starts, players run forward to collect balls." },
  { label: "04", rule: "Players are not allowed to enter the No-Man Zone (refer to diagram below)." },
  { label: "05", rule: "Players throw balls at their opponents to get them out." },
  { label: "06", rule: "If a player catches a ball thrown by the other team, the person who threw the ball is out." },
  { label: "07", rule: "Alternatively, you can use a ball in your hand to deflect the other team's balls." },
  { label: "08", rule: "Balls that go out of bounds are returned to the nearest team." },
  { label: "09", rule: "If a team's players are all struck out, that team loses." },
  { label: "10", rule: "At the end of the 10 minutes, the team with most players left wins!" },
]

const safetyRules: Rule[] = [
  { label: "01", rule: "Do not throw the ball at anyone's face, groin, or other sensitive parts." },
  { label: "02", rule: "Respect the referee's calls." },
  { label: "03", rule: "Do not walk across the courts when a game is ongoing if you're not playing." },
  { label: "04", rule: "If feeling unwell at any time, immediately inform a referee or organiser." },
]

export default function Page() {
  return <>
    <div className="flex flex-col justify-center">
      <div className="mt-20 mb-5 lg:py-7 lg:px-32 p-5">
        <div className={bungeeInline.className + " lg:text-7xl text-5xl lg:mb-8 text-center mb-5 underline"}>Format</div>
        {formatRules.map((rule) => {
          return (<div key={rule.label} className=" flex lg:flex-row flex-col lg:mt-5">
            <span className={bungeeInline.className + " lg:text-5xl text-3xl lg:min-w-80 lg:max-w-80 flex items-center text-yellow-200"}>{rule.label}</span>
            <div className={bungee.className + " lg:text-2xl text-xl lg:my-5 mb-5 mt-2 flex items-center"}>
              <ul className="list-disc lg:m-0 ml-5">
                {rule.rule.map((point) => {
                  return <li key={point} className="p-1">{point}</li>
                })}
              </ul>
            </div>
          </div>)
        })}
      </div>
    </div>
    <div className="flex flex-col justify-center">
      <div className="bg-sky-500 text-white lg:py-7 lg:px-24 p-5">
        <div className={bungeeInline.className + " lg:text-7xl text-5xl lg:mb-8 text-center underline mb-5"}>Rules</div>
        {gameRules.map((rule) => {
          return (<div key={rule.label} className=" flex flex-row lg:my-5 mb-5 mt-2" >
            <span className={bungeeInline.className + " lg:text-5xl text-3xl flex items-center mr-5 lg:mr-7 text-yellow-200"}>{rule.label}</span>
            <p className={bungee.className + " lg:text-2xl text-xl flex items-center"}>{rule.rule}</p>
          </div>)
        })}
        <div className="flex flex-col items-center">
          <Image src="/normal_court.png" alt="Diagram of Playing Court" height={500} width={500} />
          <div className="italic text-xl mt-3">Diagram of Playing Court</div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center">
      <div className="text-white lg:py-7 lg:px-24 p-5">
        <div className={bungeeInline.className + " lg:text-7xl text-5xl lg:mb-8 text-center mb-5 underline"}>Safety</div>
        {safetyRules.map((rule) => {
          return (<div key={rule.label} className=" flex flex-row lg:my-5 mb-5 mt-2" >
            <span className={bungeeInline.className + " lg:text-5xl text-3xl flex items-center mr-5 lg:mr-7 text-yellow-200"}>{rule.label}</span>
            <p className={bungee.className + " lg:text-2xl text-xl flex items-center"}>{rule.rule}</p>
          </div>)
        })}
      </div>
    </div>
  </>
}
