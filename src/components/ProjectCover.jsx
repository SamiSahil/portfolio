export function EduSysCover() {
  return (
    <svg viewBox="0 0 800 500" className="h-full w-full" role="img" aria-label="EduSysPro dashboard preview">
      <defs>
        <linearGradient id="edu-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#07131f" />
          <stop offset="100%" stopColor="#0a1a2c" />
        </linearGradient>
        <radialGradient id="edu-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
        <pattern id="edu-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="#ffffff" strokeOpacity="0.05" />
        </pattern>
      </defs>

      <rect width="800" height="500" fill="url(#edu-bg)" />
      <rect width="800" height="500" fill="url(#edu-grid)" />
      <ellipse cx="690" cy="40" rx="250" ry="170" fill="url(#edu-glow)" />

      <g transform="translate(64 58)">
        <rect width="672" height="470" rx="16" fill="#0b1521" stroke="#ffffff" strokeOpacity="0.13" />
        <path d="M0 16a16 16 0 0 1 16-16h640a16 16 0 0 1 16 16v22H0z" fill="#111f2f" />
        <circle cx="22" cy="19" r="4" fill="#f87171" />
        <circle cx="36" cy="19" r="4" fill="#fbbf24" />
        <circle cx="50" cy="19" r="4" fill="#34d399" />
        <rect x="250" y="10" width="172" height="18" rx="9" fill="#0a121c" stroke="#ffffff" strokeOpacity="0.06" />
        <text x="336" y="23" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">
          edusyspro.vercel.app
        </text>

        <rect x="0" y="38" width="116" height="432" fill="#08111b" />
        <rect x="18" y="58" width="26" height="26" rx="8" fill="#0ea5e9" fillOpacity="0.18" stroke="#38bdf8" strokeOpacity="0.5" />
        <rect x="52" y="64" width="46" height="5" rx="2.5" fill="#e2e8f0" fillOpacity="0.8" />
        <rect x="52" y="73" width="28" height="4" rx="2" fill="#64748b" />

        {[104, 132, 160, 188, 216, 244].map((y, index) => (
          <g key={y}>
            <rect
              x="14"
              y={y - 10}
              width="86"
              height="22"
              rx="6"
              fill={index === 0 ? "#0ea5e9" : "transparent"}
              fillOpacity={index === 0 ? "0.14" : "0"}
            />
            <rect x="22" y={y - 2} width="8" height="8" rx="2" fill={index === 0 ? "#38bdf8" : "#475569"} />
            <rect x="38" y={y} width={index === 0 ? 42 : 34 + (index % 3) * 6} height="4" rx="2" fill={index === 0 ? "#bae6fd" : "#64748b"} />
          </g>
        ))}

        <text x="138" y="66" fill="#e2e8f0" fontSize="13" fontWeight="600" fontFamily="Inter, sans-serif">
          Dashboard
        </text>
        <rect x="420" y="52" width="150" height="22" rx="11" fill="#0a121c" stroke="#ffffff" strokeOpacity="0.06" />
        <circle cx="436" cy="63" r="4" fill="none" stroke="#64748b" strokeWidth="1.4" />
        <rect x="448" y="60" width="56" height="4" rx="2" fill="#475569" />
        <circle cx="606" cy="63" r="11" fill="#0ea5e9" fillOpacity="0.2" stroke="#38bdf8" strokeOpacity="0.4" />
        <circle cx="606" cy="60" r="3.5" fill="#7dd3fc" />
        <path d="M599 70c2-4 12-4 14 0" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" fill="none" />

        {[
          { x: 138, label: "Students", value: "1,248", accent: "#38bdf8" },
          { x: 316, label: "Teachers", value: "86", accent: "#818cf8" },
          { x: 494, label: "Revenue", value: "$24.6k", accent: "#34d399" },
        ].map((card) => (
          <g key={card.label}>
            <rect x={card.x} y="96" width="158" height="70" rx="10" fill="#0f1d2b" stroke="#ffffff" strokeOpacity="0.06" />
            <rect x={card.x + 14} y="110" width="24" height="24" rx="7" fill={card.accent} fillOpacity="0.16" />
            <rect x={card.x + 22} y="118" width="8" height="8" rx="2" fill={card.accent} />
            <text x={card.x + 48} y="120" fill="#94a3b8" fontSize="8" fontFamily="Inter, sans-serif">
              {card.label}
            </text>
            <text x={card.x + 48} y="138" fill="#f1f5f9" fontSize="16" fontWeight="600" fontFamily="Inter, sans-serif">
              {card.value}
            </text>
            <rect x={card.x + 14} y="150" width="98" height="4" rx="2" fill="#1e293b" />
            <rect x={card.x + 14} y="150" width={card.x === 138 ? 64 : card.x === 316 ? 46 : 78} height="4" rx="2" fill={card.accent} fillOpacity="0.7" />
          </g>
        ))}

        <rect x="138" y="184" width="514" height="248" rx="12" fill="#0c1824" stroke="#ffffff" strokeOpacity="0.06" />
        <text x="156" y="208" fill="#e2e8f0" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">
          Recent students
        </text>
        <rect x="540" y="196" width="96" height="20" rx="10" fill="#0ea5e9" fillOpacity="0.16" />
        <text x="588" y="210" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontFamily="Inter, sans-serif">
          + Add student
        </text>
        <rect x="152" y="226" width="486" height="1" fill="#ffffff" fillOpacity="0.06" />

        {[244, 282, 320, 358].map((y, index) => (
          <g key={y}>
            <circle cx="170" cy={y + 8} r="10" fill={["#38bdf8", "#818cf8", "#34d399", "#fbbf24"][index]} fillOpacity="0.22" />
            <circle cx="170" cy={y + 4} r="3.4" fill={["#7dd3fc", "#a5b4fc", "#6ee7b7", "#fde68a"][index]} />
            <path d={`M163 ${y + 14}c2-4 12-4 14 0`} stroke={["#7dd3fc", "#a5b4fc", "#6ee7b7", "#fde68a"][index]} strokeWidth="2" strokeLinecap="round" fill="none" />
            <rect x="192" y={y + 1} width={90 + index * 12} height="5" rx="2.5" fill="#cbd5e1" fillOpacity="0.8" />
            <rect x="192" y={y + 12} width="58" height="4" rx="2" fill="#475569" />
            <rect x="352" y={y + 5} width="52" height="4" rx="2" fill="#475569" />
            <rect x="446" y={y + 3} width="48" height="16" rx="8" fill="#10b981" fillOpacity="0.14" />
            <text x="470" y={y + 14} textAnchor="middle" fill="#6ee7b7" fontSize="7" fontFamily="Inter, sans-serif">
              Active
            </text>
            <rect x="524" y={y + 9} width="4" height="4" rx="2" fill="#64748b" />
            <rect x="536" y={y + 9} width="4" height="4" rx="2" fill="#64748b" />
            <rect x="548" y={y + 9} width="4" height="4" rx="2" fill="#64748b" />
            <rect x="152" y={y + 38} width="486" height="1" fill="#ffffff" fillOpacity="0.05" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function AicCover() {
  const bars = [32, 58, 44, 76, 52, 88, 64];
  return (
    <svg viewBox="0 0 800 500" className="h-full w-full" role="img" aria-label="AIC Inventory dashboard preview">
      <defs>
        <linearGradient id="aic-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#04110f" />
          <stop offset="100%" stopColor="#08221d" />
        </linearGradient>
        <radialGradient id="aic-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
        </radialGradient>
        <pattern id="aic-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="#ffffff" strokeOpacity="0.05" />
        </pattern>
      </defs>

      <rect width="800" height="500" fill="url(#aic-bg)" />
      <rect width="800" height="500" fill="url(#aic-grid)" />
      <ellipse cx="130" cy="430" rx="260" ry="180" fill="url(#aic-glow)" />

      <g transform="translate(64 58)">
        <rect width="672" height="470" rx="16" fill="#071814" stroke="#ffffff" strokeOpacity="0.13" />
        <path d="M0 16a16 16 0 0 1 16-16h640a16 16 0 0 1 16 16v22H0z" fill="#0b211c" />
        <circle cx="22" cy="19" r="4" fill="#f87171" />
        <circle cx="36" cy="19" r="4" fill="#fbbf24" />
        <circle cx="50" cy="19" r="4" fill="#34d399" />
        <rect x="244" y="10" width="184" height="18" rx="9" fill="#06110e" stroke="#ffffff" strokeOpacity="0.06" />
        <text x="336" y="23" textAnchor="middle" fill="#99f6e4" fontSize="9" fontFamily="Inter, sans-serif">
          aic-inventory.app
        </text>

        <rect x="0" y="38" width="110" height="432" fill="#05120f" />
        <rect x="18" y="58" width="26" height="26" rx="8" fill="#2dd4bf" fillOpacity="0.16" stroke="#2dd4bf" strokeOpacity="0.5" />
        <rect x="52" y="64" width="38" height="5" rx="2.5" fill="#ccfbf1" fillOpacity="0.8" />
        <rect x="52" y="73" width="24" height="4" rx="2" fill="#5eead4" fillOpacity="0.4" />

        {[104, 132, 160, 188, 216].map((y, index) => (
          <g key={y}>
            <rect x="14" y={y - 10} width="82" height="22" rx="6" fill={index === 0 ? "#2dd4bf" : "transparent"} fillOpacity={index === 0 ? "0.14" : "0"} />
            <rect x="22" y={y - 2} width="8" height="8" rx="2" fill={index === 0 ? "#2dd4bf" : "#475569"} />
            <rect x="38" y={y} width={index === 0 ? 38 : 30 + index * 3} height="4" rx="2" fill={index === 0 ? "#99f6e4" : "#64748b"} />
          </g>
        ))}

        <text x="132" y="66" fill="#ecfdf5" fontSize="13" fontWeight="600" fontFamily="Inter, sans-serif">
          Inventory overview
        </text>
        <rect x="484" y="52" width="120" height="22" rx="11" fill="#0b211c" stroke="#2dd4bf" strokeOpacity="0.25" />
        <text x="544" y="66" textAnchor="middle" fill="#5eead4" fontSize="8" fontFamily="Inter, sans-serif">
          + New order
        </text>
        <circle cx="628" cy="63" r="11" fill="#2dd4bf" fillOpacity="0.2" stroke="#2dd4bf" strokeOpacity="0.4" />

        {[
          { x: 132, label: "Total stock", value: "8,420", delta: "+12.4%" },
          { x: 266, label: "Orders", value: "1,284", delta: "+8.1%" },
          { x: 400, label: "Profit", value: "$42.8k", delta: "+18.2%" },
          { x: 534, label: "Deliveries", value: "96", delta: "+4.6%" },
        ].map((card) => (
          <g key={card.label}>
            <rect x={card.x} y="96" width="118" height="72" rx="10" fill="#0a201a" stroke="#ffffff" strokeOpacity="0.06" />
            <text x={card.x + 12} y="114" fill="#6b9c8f" fontSize="7.5" fontFamily="Inter, sans-serif">
              {card.label}
            </text>
            <text x={card.x + 12} y="134" fill="#ecfdf5" fontSize="16" fontWeight="600" fontFamily="Inter, sans-serif">
              {card.value}
            </text>
            <text x={card.x + 12} y="152" fill="#34d399" fontSize="7.5" fontFamily="Inter, sans-serif">
              {card.delta}
            </text>
          </g>
        ))}

        <rect x="132" y="184" width="350" height="248" rx="12" fill="#081b16" stroke="#ffffff" strokeOpacity="0.06" />
        <text x="150" y="208" fill="#ecfdf5" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">
          Monthly revenue
        </text>
        <text x="462" y="208" textAnchor="end" fill="#5eead4" fontSize="8" fontFamily="Inter, sans-serif">
          +18.2%
        </text>
        <rect x="150" y="226" width="314" height="1" fill="#ffffff" fillOpacity="0.06" />
        {bars.map((height, index) => (
          <g key={index}>
            <rect x={160 + index * 42} y={388 - height} width="22" height={height} rx="5" fill="#2dd4bf" fillOpacity={index === 5 ? "0.9" : "0.32"} />
            <rect x={160 + index * 42} y="392" width="22" height="3" rx="1.5" fill="#1f4a40" />
          </g>
        ))}
        <path
          d="M171 356 C213 340 234 348 255 326 S318 300 339 306 S402 274 423 262 S462 246 483 230"
          fill="none"
          stroke="#5eead4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />

        <rect x="496" y="184" width="156" height="248" rx="12" fill="#081b16" stroke="#ffffff" strokeOpacity="0.06" />
        <text x="512" y="208" fill="#ecfdf5" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">
          Top products
        </text>
        {[0, 1, 2, 3].map((row) => (
          <g key={row}>
            <circle cx="522" cy={238 + row * 42} r="11" fill="#2dd4bf" fillOpacity="0.14" />
            <rect x="540" y={232 + row * 42} width={68 + row * 4} height="5" rx="2.5" fill="#ccfbf1" fillOpacity="0.7" />
            <rect x="540" y={242 + row * 42} width="34" height="4" rx="2" fill="#3f6f63" />
            <rect x="612" y={234 + row * 42} width="24" height="14" rx="7" fill="#2dd4bf" fillOpacity="0.12" />
            <text x="624" y={244 + row * 42} textAnchor="middle" fill="#5eead4" fontSize="7" fontFamily="Inter, sans-serif">
              {12 + row * 7}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function AttendanceCover() {
  return (
    <svg viewBox="0 0 800 500" className="h-full w-full" role="img" aria-label="Student attendance system preview">
      <defs>
        <linearGradient id="att-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#060b1a" />
          <stop offset="100%" stopColor="#0b1226" />
        </linearGradient>
        <radialGradient id="att-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
        <pattern id="att-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="#ffffff" strokeOpacity="0.05" />
        </pattern>
      </defs>

      <rect width="800" height="500" fill="url(#att-bg)" />
      <rect width="800" height="500" fill="url(#att-grid)" />
      <ellipse cx="650" cy="60" rx="240" ry="160" fill="url(#att-glow)" />

      <g transform="translate(64 58)">
        <rect width="672" height="470" rx="16" fill="#0a1020" stroke="#ffffff" strokeOpacity="0.13" />
        <path d="M0 16a16 16 0 0 1 16-16h640a16 16 0 0 1 16 16v22H0z" fill="#0f1730" />
        <circle cx="22" cy="19" r="4" fill="#f87171" />
        <circle cx="36" cy="19" r="4" fill="#fbbf24" />
        <circle cx="50" cy="19" r="4" fill="#34d399" />
        <rect x="248" y="10" width="176" height="18" rx="9" fill="#080d1a" stroke="#ffffff" strokeOpacity="0.06" />
        <text x="336" y="23" textAnchor="middle" fill="#93c5fd" fontSize="9" fontFamily="Inter, sans-serif">
          attendance.app
        </text>

        <rect x="150" y="54" width="372" height="34" rx="10" fill="#0e1830" stroke="#ffffff" strokeOpacity="0.06" />
        {["Student List", "Mark Attendance", "Record Payment", "Student Report"].map((tab, index) => (
          <g key={tab}>
            <rect
              x={160 + index * 90}
              y="61"
              width={index === 0 ? 86 : 84}
              height="20"
              rx="6"
              fill={index === 0 ? "#3b82f6" : "transparent"}
            />
            <text
              x={203 + index * 90}
              y="74"
              textAnchor="middle"
              fill={index === 0 ? "#ffffff" : "#64748b"}
              fontSize="7.5"
              fontFamily="Inter, sans-serif"
            >
              {tab}
            </text>
          </g>
        ))}

        <rect x="132" y="106" width="514" height="58" rx="10" fill="#0e1830" stroke="#ffffff" strokeOpacity="0.06" />
        <rect x="148" y="122" width="180" height="24" rx="12" fill="#080d1a" stroke="#ffffff" strokeOpacity="0.06" />
        <circle cx="162" cy="134" r="4" fill="none" stroke="#475569" strokeWidth="1.5" />
        <rect x="174" y="131" width="82" height="5" rx="2.5" fill="#334155" />
        <rect x="450" y="122" width="86" height="24" rx="12" fill="#3b82f6" fillOpacity="0.16" />
        <text x="493" y="137" textAnchor="middle" fill="#93c5fd" fontSize="8" fontFamily="Inter, sans-serif">
          + Add student
        </text>
        <circle cx="606" cy="134" r="12" fill="#3b82f6" fillOpacity="0.2" />
        <circle cx="606" cy="131" r="3.6" fill="#93c5fd" />

        {[
          { x: 132, label: "Present", value: "42", color: "#34d399" },
          { x: 310, label: "Absent", value: "03", color: "#f87171" },
          { x: 488, label: "On leave", value: "01", color: "#fbbf24" },
        ].map((card) => (
          <g key={card.label}>
            <rect x={card.x} y="178" width="158" height="56" rx="10" fill="#0e1830" stroke="#ffffff" strokeOpacity="0.06" />
            <text x={card.x + 14} y="197" fill="#64748b" fontSize="8" fontFamily="Inter, sans-serif">
              {card.label}
            </text>
            <text x={card.x + 14} y="218" fill="#e2e8f0" fontSize="15" fontWeight="600" fontFamily="Inter, sans-serif">
              {card.value}
            </text>
            <circle cx={card.x + 138} cy="212" r="5" fill={card.color} fillOpacity="0.7" />
          </g>
        ))}

        <rect x="132" y="248" width="514" height="184" rx="12" fill="#0b1428" stroke="#ffffff" strokeOpacity="0.06" />
        <text x="150" y="272" fill="#e2e8f0" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">
          Today&apos;s attendance
        </text>
        <rect x="150" y="284" width="480" height="1" fill="#ffffff" fillOpacity="0.06" />

        {[298, 334, 370].map((y, index) => (
          <g key={y}>
            <circle cx="166" cy={y + 8} r="10" fill="#3b82f6" fillOpacity="0.18" />
            <circle cx="166" cy={y + 4} r="3.4" fill="#93c5fd" />
            <path d={`M159 ${y + 14}c2-4 12-4 14 0`} stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" fill="none" />
            <rect x="188" y={y + 1} width={96 + index * 16} height="5" rx="2.5" fill="#cbd5e1" fillOpacity="0.75" />
            <rect x="188" y={y + 12} width="54" height="4" rx="2" fill="#475569" />
            <rect x="330" y={y + 5} width="64" height="4" rx="2" fill="#475569" />
            <rect x="432" y={y + 2} width="54" height="16" rx="8" fill={index === 1 ? "#7f1d1d" : "#064e3b"} fillOpacity="0.5" />
            <text x="459" y={y + 13} textAnchor="middle" fill={index === 1 ? "#fca5a5" : "#6ee7b7"} fontSize="7" fontFamily="Inter, sans-serif">
              {index === 1 ? "Absent" : "Present"}
            </text>
            <rect x="510" y={y + 9} width="4" height="4" rx="2" fill="#64748b" />
            <rect x="522" y={y + 9} width="4" height="4" rx="2" fill="#64748b" />
            <rect x="534" y={y + 9} width="4" height="4" rx="2" fill="#64748b" />
            <rect x="150" y={y + 34} width="480" height="1" fill="#ffffff" fillOpacity="0.05" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function PortfolioCover() {
  return (
    <svg viewBox="0 0 800 500" className="h-full w-full" role="img" aria-label="Personal portfolio preview">
      <defs>
        <linearGradient id="pf-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#120d0a" />
          <stop offset="100%" stopColor="#20150f" />
        </linearGradient>
        <radialGradient id="pf-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d99a6c" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#d99a6c" stopOpacity="0" />
        </radialGradient>
        <pattern id="pf-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="#ffffff" strokeOpacity="0.05" />
        </pattern>
      </defs>

      <rect width="800" height="500" fill="url(#pf-bg)" />
      <rect width="800" height="500" fill="url(#pf-grid)" />
      <ellipse cx="660" cy="90" rx="250" ry="180" fill="url(#pf-glow)" />

      <g transform="translate(64 58)">
        <rect width="672" height="470" rx="16" fill="#0c0a08" stroke="#ffffff" strokeOpacity="0.13" />
        <path d="M0 16a16 16 0 0 1 16-16h640a16 16 0 0 1 16 16v22H0z" fill="#18110d" />
        <circle cx="22" cy="19" r="4" fill="#f87171" />
        <circle cx="36" cy="19" r="4" fill="#fbbf24" />
        <circle cx="50" cy="19" r="4" fill="#34d399" />
        <rect x="260" y="10" width="152" height="18" rx="9" fill="#0b0806" stroke="#ffffff" strokeOpacity="0.06" />
        <text x="336" y="23" textAnchor="middle" fill="#d6b49f" fontSize="9" fontFamily="Inter, sans-serif">
          samisahil.github.io
        </text>

        <rect x="0" y="38" width="672" height="42" fill="#0e0b08" />
        <rect x="22" y="50" width="18" height="18" rx="5" fill="#d99a6c" fillOpacity="0.2" stroke="#d99a6c" strokeOpacity="0.5" />
        <text x="50" y="63" fill="#f5ede7" fontSize="8.5" fontWeight="600" fontFamily="Inter, sans-serif">
          SS
        </text>
        {["About", "Projects", "Stack", "Contact"].map((item, index) => (
          <text
            key={item}
            x={400 + index * 52}
            y="63"
            textAnchor="middle"
            fill="#8a7668"
            fontSize="7.5"
            fontFamily="Inter, sans-serif"
          >
            {item}
          </text>
        ))}
        <circle cx="636" cy="59" r="7" fill="#d99a6c" fillOpacity="0.18" stroke="#d99a6c" strokeOpacity="0.5" />

        <text x="42" y="150" fill="#a38571" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="3">
          // FULL-STACK DEVELOPER
        </text>
        <text x="40" y="198" fill="#faf5f0" fontSize="32" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="-1">
          Samiuzzaman
        </text>
        <text x="40" y="234" fill="#faf5f0" fontSize="32" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="-1">
          Sahil
        </text>
        <rect x="42" y="254" width="56" height="3" rx="1.5" fill="#d99a6c" />
        <text x="42" y="284" fill="#a89a90" fontSize="9.5" fontFamily="Inter, sans-serif">
          Building clean, reliable web applications.
        </text>

        <rect x="42" y="306" width="92" height="26" rx="13" fill="#d99a6c" />
        <text x="88" y="323" textAnchor="middle" fill="#1a110c" fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">
          View projects
        </text>
        <rect x="144" y="306" width="92" height="26" rx="13" fill="none" stroke="#5b4a3e" />
        <text x="190" y="323" textAnchor="middle" fill="#c9b7a9" fontSize="8" fontFamily="Inter, sans-serif">
          Download CV
        </text>

        <circle cx="566" cy="190" r="82" fill="#1c1511" stroke="#d99a6c" strokeOpacity="0.35" />
        <circle cx="566" cy="190" r="73" fill="#2a1e17" />
        <circle cx="566" cy="174" r="24" fill="#c9a58c" />
        <path d="M522 246c8-30 80-30 88 0" fill="#c9a58c" />
        <path d="M522 246c8-30 80-30 88 0" fill="#3a2a20" fillOpacity="0.55" />

        <rect x="42" y="362" width="586" height="1" fill="#ffffff" fillOpacity="0.06" />
        <text x="42" y="388" fill="#7c6b5e" fontSize="8" fontFamily="JetBrains Mono, monospace">
          github.com/SamiSahil
        </text>
        <text x="586" y="388" textAnchor="end" fill="#7c6b5e" fontSize="8" fontFamily="JetBrains Mono, monospace">
          Dhaka, Bangladesh
        </text>
      </g>
    </svg>
  );
}
