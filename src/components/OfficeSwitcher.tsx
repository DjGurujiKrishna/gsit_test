"use client";

import { useState } from "react";

const offices = [
  {
    id: "abu-dhabi",
    label: "Abu Dhabi",
    city: "Abu Dhabi, UAE",
    lines: [
      "Madinat Zayed Tower, 2nd Floor, Muroor Road, Office 218",
      <>
        <span className="label">T</span> 971 4 452 1135,{" "}
        <span className="label">F</span> 971 4 452 0458
      </>,
    ],
  },
  {
    id: "dubai",
    label: "Dubai",
    city: "Dubai, UAE",
    lines: [
      "P.O. Box 413606, Business Bay - Bay Square 8 Office #201 - 202",
      <>
        <span className="label">T</span> 971 4 452 1135,{" "}
        <span className="label">F</span> 971 4 452 0458
      </>,
    ],
  },
  {
    id: "lebanon",
    label: "Lebanon",
    city: "Beirut, Lebanon",
    lines: [
      "Waterfront city, Dbayeh, Colonnade Avenue, Business Park, BP3, Office 302",
      <>
        <span className="label">T</span> 961 24 556 382
      </>,
    ],
  },
] as const;

export default function OfficeSwitcher() {
  const [active, setActive] = useState<(typeof offices)[number]["id"]>("dubai");
  const office = offices.find((item) => item.id === active) ?? offices[1];

  return (
    <>
      <div className="collaborate__offices" role="tablist" aria-label="Offices">
        {offices.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active === item.id}
            className={`office-pill${active === item.id ? " is-active" : ""}`}
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="collaborate__address">
        <h4>{office.city}</h4>
        {office.lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </>
  );
}
