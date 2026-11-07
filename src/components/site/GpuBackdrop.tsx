import { useId } from "react";

/** Decorative vector artwork: no product capability or live hardware claims. */
export function GpuBackdrop() {
  const id = useId().replace(/:/g, "");
  const left = `${id}-left`;
  const right = `${id}-right`;
  const card = `${id}-card`;
  return (
    <div className="gpu-backdrop" aria-hidden="true">
      <svg viewBox="0 0 1000 600" fill="none" className="gpu-art" focusable="false">
        <defs>
          <clipPath id={left}><rect width="500" height="600" /></clipPath>
          <clipPath id={right}><rect x="500" width="500" height="600" /></clipPath>
          <g id={card}>
            <path d="M170 231 681 131 826 231 314 342Z" className="gpu-face" />
            <path d="M314 342 826 231 826 323 314 440Z" className="gpu-side" />
            <path d="M170 231 314 342 314 440 170 329Z" className="gpu-side" />
            <path d="M190 232 681 151 801 231 315 322Z" />
            <path d="M346 351 798 252M346 419 798 316" />
            {Array.from({ length: 35 }, (_, i) => (
              <path key={i} d={`M${348 + i * 13} ${362 - i * 2.7}v45`} className="gpu-fin" />
            ))}
            {Array.from({ length: 13 }, (_, i) => (
              <path key={i} d={`M${181 + i * 9} ${255 + i * 7}v64`} className="gpu-fin" />
            ))}
            <path d="m338 440 26 17 173-39v-16M374 444l141-32" />
            <path d="M170 245 152 250 152 354 177 373M153 278h-14v58h14" />
            <g transform="translate(353 254) rotate(-11) scale(1 .59)">
              <Fan />
            </g>
            <g transform="translate(651 194) rotate(-11) scale(1 .59)">
              <Fan />
            </g>
            <path d="m443 191 113-22 34 27-109 23Z" />
            <path d="m453 192 33 22m-14-26 33 22m-14-26 33 22m-14-26 33 22" className="gpu-fin" />
            <text x="633" y="334" transform="rotate(-12 633 334)" className="gpu-model">5090</text>
          </g>
        </defs>
        <g className="gpu-half gpu-half-left" clipPath={`url(#${left})`}><use href={`#${card}`} /></g>
        <g className="gpu-half gpu-half-right" clipPath={`url(#${right})`}><use href={`#${card}`} /></g>
        <path d="M500 82V505" className="gpu-cut" />
        <g className="gpu-sparks">
          {Array.from({ length: 26 }, (_, i) => {
            const x = 500 + (i % 2 ? 1 : -1) * (12 + (i * 31) % 120);
            const y = 135 + (i * 47) % 325;
            return <path key={i} d={`M${x} ${y}l${i % 2 ? 5 : -5} ${i % 3 ? 5 : -5}`} />;
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