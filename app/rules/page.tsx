import { bungee, bungeeInline } from "../ui/fonts"
// import Image from "next/image"
//

type FormatRule = {
  title: string,
  rule: string[],
  image: string | null,
}

type Rule = {
  title: string,
  rule: string,
}

const formatRules: FormatRule[] = [
  {
    title: "Group Stage",
    rule: [
      "The 11 teams will be split into 3 groups (4, 4, 3).",
      "Each group will play round-robin against each other.",
      "A win earns 3 points, a draw 1 point, and a loss 0 points.",
      "The top team from each group will qualify to the finals."
    ],
    image: null
  },
  { title: "Finals", rule: ["The top 3 teams will compete in a 3-way free-for-all final match.", "The winner takes it all!"], image: null /*"/normal_court.png"*/ },
]

const gameRules: Rule[] = [
  { title: "1", rule: "Each game lasts 10 minutes, with no stoppages" },
  { title: "2", rule: "When the game starts, players run forward to collect balls." },
  { title: "3", rule: "Players throw balls at their opponents to strike them out." },
  { title: "4", rule: "If a player catches a ball thrown by the other team, the person who threw the ball is out." },
  { title: "5", rule: "If a team's players are all struck out, that team loses." },
  { title: "6", rule: "At the end of the 10 minutes, the team with most players left wins!" },
]

const safetyRules: Rule[] = [
  { title: "1", rule: "Do not throw the ball at anyone's face, groin, or other sensitive parts." },
  { title: "2", rule: "Respect the referee's calls. " },
  { title: "3", rule: "If you're not playing, do not walk into courts where a game's going on" },
  { title: "4", rule: "If feeling unwell at any time, immediately inform a referee or organiser." },
]

export default function Page() {
  return <>
    <div className="flex flex-col justify-center">
      <div className="mt-20 mb-5 lg:py-7 lg:px-32 p-5">
        <div className={bungeeInline.className + " lg:text-7xl text-5xl lg:mb-8 text-center mb-5 underline"}>Format</div>
        {formatRules.map((rule) => {
          return (<div key={rule.title} className=" flex lg:flex-row flex-col lg:mt-5">
            <span className={bungeeInline.className + " lg:text-5xl text-3xl lg:min-w-72 flex items-center text-yellow-200"}>{rule.title}</span>
            <div className={bungee.className + " lg:text-3xl text-xl lg:my-5 mb-5 mt-2 flex items-center"}>
              <ul className="list-disc lg:m-0 ml-5">
                {rule.rule.map((point) => {
                  return <li key={point} className="p-1">{point}</li>
                })}
              </ul>
            </div>
            {/* {(rule.image) && <div className="w-40 h-5"><Image src={rule.image} alt="Picture" fill style={{ objectFit: "contain" }}></Image></div>} */}
          </div>)
        })}
      </div>
    </div>
    <div className="flex flex-col justify-center">
      <div className="bg-sky-500 text-white lg:py-7 lg:px-24 p-5">
        <div className={bungeeInline.className + " lg:text-7xl text-5xl lg:mb-8 text-center underline mb-5"}>Rules</div>
        {gameRules.map((rule) => {
          return (<div key={rule.title} className=" flex flex-row lg:my-5 mb-5 mt-2" >
            <span className={bungeeInline.className + " lg:text-5xl text-3xl flex items-center mr-5 lg:mr-7 text-yellow-200"}>{rule.title}</span>
            <p className={bungee.className + " lg:text-3xl text-xl flex items-center"}>{rule.rule}</p>
          </div>)
        })}
      </div>
    </div>
    <div className="flex flex-col justify-center">
      <div className="text-white lg:py-7 lg:px-24 p-5">
        <div className={bungeeInline.className + " lg:text-7xl text-5xl lg:mb-8 text-center mb-5 underline"}>Safety</div>
        {safetyRules.map((rule) => {
          return (<div key={rule.title} className=" flex flex-row lg:my-5 mb-5 mt-2" >
            <span className={bungeeInline.className + " lg:text-5xl text-3xl flex items-center mr-5 lg:mr-7 text-yellow-200"}>{rule.title}</span>
            <p className={bungee.className + " lg:text-3xl text-xl flex items-center"}>{rule.rule}</p>
          </div>)
        })}
      </div>
    </div>
  </>
}
