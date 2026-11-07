import { useId } from "react";

/** Decorative vector artwork: no product capability or live hardware claims. */
export function GpuBackdrop() {
  const id = useId().replace(/:/g, "");
  const left = `${id}-left`;
  const right = `${id}-right`;
  const card = `${id}-card`;
  const ram = `${id}-ram`;
  return (
    <div className="gpu-backdrop" aria-hidden="true">
      <svg viewBox="0 0 1000 600" fill="none" className="gpu-art" focusable="false">
        <defs>
          <clipPath id={left}><rect width="500" height="600" /></clipPath>
          <clipPath id={right}><rect x="500" width="500" height="600" /></clipPath>
          <g id={card}>
            <GpuDrawing />
          </g>
          <g id={ram}>
            <RamDrawing />
          </g>
        </defs>
        <g className="hardware-item hardware-gpu">
          <g className="gpu-half gpu-half-left" clipPath={`url(#${left})`}><use href={`#${card}`} /></g>
          <g className="gpu-half gpu-half-right" clipPath={`url(#${right})`}><use href={`#${card}`} /></g>
        </g>
        <g className="hardware-item hardware-ram">
          <g className="gpu-half gpu-half-left" clipPath={`url(#${left})`}><use href={`#${ram}`} /></g>
          <g className="gpu-half gpu-half-right" clipPath={`url(#${right})`}><use href={`#${ram}`} /></g>
        </g>
        <path d="M500 82V505" className="gpu-cut" />
        <g className="gpu-sparks">
          {Array.from({ length: 26 }, (_, i) => {
            const x = 500;
            const y = 135 + (i * 47) % 325;
            return <path key={i} className={`gpu-spark gpu-spark-${i % 4}`} d={`M${x} ${y}l${i % 2 ? 5 : -5} ${i % 3 ? 5 : -5}`} />;
          })}
        </g>
        <g className="gpu-blade">
          <path d="M490 33h20v375l-10 37-10-37Z" />
          <path d="M500 51v353M469 39h62M489 0h22v29h-22Z" />
        </g>
      </svg>
    </div>
  );
}

function GpuDrawing() {
  return (
    <g transform="translate(500 295) rotate(-17) translate(-500 -295)">
      <path d="M185 185Q185 163 207 163H793Q815 163 815 185V358Q815 380 793 380H207Q185 380 185 358Z" className="gpu-face" />
      <path d="M185 350V402L230 434H803L815 380V350M230 434V380" className="gpu-side" />
      <path d="M203 181H477L492 266 478 360H204ZM519 181H787Q798 181 798 195V347Q798 362 783 362H520L508 269Z" />
      <path d="M207 169H476L493 265 479 374H207M520 169H789Q809 169 809 188V351Q809 374 789 374H520L502 270Z" />
      <g transform="translate(650 270) scale(1 .76)"><Fan /></g>
      <g transform="translate(350 268) rotate(45)">
        <rect x="-60" y="-60" width="120" height="120" />
        <rect x="-46" y="-46" width="92" height="92" />
        <rect x="-34" y="-34" width="68" height="68" className="gpu-chip" />
        {Array.from({ length: 16 }, (_, i) => <path key={i} d={`M${-29 + i * 4} -30v60M-30 ${-29 + i * 4}h60`} className="gpu-fin" />)}
      </g>
      {Array.from({ length: 12 }, (_, i) => (
        <g key={i}>
          <path d={`M${275 + i * 6} 220v${-13 - i * 2}l-24-19h-42M${275 + i * 6} 314v${13 + i * 2}l-24 19h-42M414 ${225 + i * 6}h${15 + i * 2}l24-12h24`} className="gpu-fin" />
          <path d={`M${534 + i * 6} 181v23M${534 + i * 6} 335v26`} className="gpu-fin" />
        </g>
      ))}
      {Array.from({ length: 40 }, (_, i) => <path key={i} d={`M${245 + i * 13} 386v37`} className="gpu-fin" />)}
      <path d="M185 194h-18v174h18M167 226h-16v24h16M167 310h-16v24h16M310 435v12h94v-12M449 435v12h91v-12" />
      <path d="M209 240h23v17h-23ZM427 333h24v17h-24ZM214 296h19v15h-19Z" />
      <circle cx="221" cy="195" r="4" /><circle cx="464" cy="346" r="4" />
      <text x="705" y="414" className="gpu-model">5090</text>
    </g>
  );
}

function RamDrawing() {
  return (
    <g transform="translate(500 295) rotate(16) translate(-500 -295)">
      <path d="M185 212H815V239Q796 239 796 251T815 263V359H185V330Q204 330 204 318T185 306Z" className="gpu-face" />
      <path d="M185 359 201 374H830V227L815 212M815 359l15 15" className="gpu-side" />
      <path d="M205 223H790M205 348H789" />
      {Array.from({ length: 8 }, (_, i) => (
        <g key={i}>
          <rect x={224 + i * 69} y="247" width="51" height="68" className="gpu-chip" />
          <path d={`M${229 + i * 69} 253h41v56h-41Z`} />
          {Array.from({ length: 5 }, (_, j) => <path key={j} d={`M${229 + i * 69 + j * 9} 240v7m0 68v7`} className="gpu-fin" />)}
          <path d={`M${250 + i * 69} 326v7l-12 6h-24M${250 + i * 69} 233v-5h22`} className="gpu-fin" />
        </g>
      ))}
      {Array.from({ length: 62 }, (_, i) => <path key={i} d={`M${214 + i * 9} 349v13`} className="gpu-contact" />)}
      <path d="M473 350v13h17v-13" className="gpu-face" />
      <circle cx="207" cy="233" r="3" /><circle cx="782" cy="338" r="3" />
      <text x="624" y="341" className="gpu-model">DDR5</text>
    </g>
  );
}

function Fan() {
  return (
    <g>
      <circle r="112" /><circle r="104" /><circle r="32" />
      {Array.from({ length: 9 }, (_, i) => (
        <path key={i} transform={`rotate(${i * 40})`} d="M-13-31C-48-52-67-70-42-96L-6-103C-27-76-17-58 9-33" />
      ))}
      <path d="m-8-16 20 8-5 22-19-8Z" />
    </g>
  );
}