import TextHeader from "@components/TextHeader";
import CardHorizontal from "@components/CardHorizontal";
import { useState } from "react";
const initialEdu = [
    {
      name: "STMIK Muhammadiyah Jakarta",
      isActive: true,
      from: "2014",
      to: "2018",
      shorDesc: "the best graduation",
      major: "Systems Information",
      isCurrent: true
    },
    {
      name: "SMK Kampung Jawa",
      isActive: true,
      from: "2008",
      to: "2011",
      shorDesc: "",
      major: "Otomotif",
    },
    {
      name: "SMPN 137 Jakarta",
      isActive: true,
      from: "2005",
      to: "2008",
      shorDesc: "",
      major: "",
    },
    {
      name: "SDN Kramat 04 Petang",
      isActive: true,
      from: "1999",
      to: "2005",
      shorDesc: "",
      major: "",
    },
  ];
export default function Educational() {
  const [edu, setEdu] = useState(initialEdu);

  return (
    <div className="relative mb-5">
          <TextHeader text="Education" />
          <CardHorizontal>
            {edu.map((v, i) => {
              return (
                v.isActive && (
                  <div className="relative inline-block border-t border-t-red-500" key={i}>
                    <div className={`absolute h-3 w-3 bg-fuchsia-500  -top-2 -left-0 rounded-full ${v.isCurrent === true ? 'animate-pulse' : ''}`}></div>
                    <div className="relative flex flex-col mt-2 mr-5">
                      <h5 className="text-sm font-semibold">{v.name}</h5>
                      <p className="text-xs font-medium">{`${v.major} (${v.from} - ${v.to})`}</p>
                    </div>
                  </div>
                )
              );
            })}
          </CardHorizontal>
        </div>
  )
}
