interface IconProps {
  sizeClass?: string;
}

export function O({ sizeClass = "w-full h-full" }: IconProps) {
  return (
    <svg
      viewBox="0 -960 960 960"
      className={`${sizeClass} text-blue scale-75`}
      fill="currentColor"
    >
      <path d="M480-34q-92.64 0-174.47-34.6-81.82-34.61-142.07-94.86T68.6-305.53Q34-387.36 34-480q0-92.9 34.66-174.45 34.67-81.55 95.18-141.94 60.51-60.39 142.07-95Q387.48-926 480-926q92.89 0 174.48 34.59 81.59 34.6 141.96 94.97 60.37 60.37 94.97 141.99Q926-572.83 926-479.92q0 92.92-34.61 174.25-34.61 81.32-95 141.83Q736-103.33 654.45-68.66 572.9-34 480-34Zm-.23-136q130.74 0 220.49-89.51Q790-349.03 790-479.77t-89.51-220.49Q610.97-790 480.23-790t-220.49 89.51Q170-610.97 170-480.23t89.51 220.49Q349.03-170 479.77-170Z" />
    </svg>
  );
}

export function X({ sizeClass = "w-full h-full" }: IconProps) {
  return (
    <svg
      viewBox="0 -960 960 960"
      className={`${sizeClass} text-red`}
      fill="currentColor"
    >
      <path d="m254-159-94-95 225-226-225-226 94-96 226 226 226-226 94 96-225 226 225 226-94 95-226-226-226 226Z" />
    </svg>
  );
}

// Botões com tamanho padrão menor e sem cor fixa (herdam de quem chamar)
export function Previous({ sizeClass = "w-8 h-8"}: IconProps) {
  return (
    <svg viewBox="0 -960 960 960" className={`${sizeClass} text-dark-gray`} fill="currentColor">
      <path d="M560-232.35 312.35-480 560-727.65 623.65-664l-184 184 184 184L560-232.35Z" />
    </svg>
  );
}

export function Next({ sizeClass = "w-8 h-8"}: IconProps) {
  return (
    <svg viewBox="0 -960 960 960" className={`${sizeClass} text-dark-gray`} fill="currentColor">
      <path d="m496.35-480-184-184L376-727.65 623.65-480 376-232.35 312.35-296l184-184Z" />
    </svg>
  );
}

export function First({ sizeClass = "w-8 h-8"}: IconProps) {
  return (
    <svg viewBox="0 -960 960 960" className={`${sizeClass} text-dark-gray`} fill="currentColor">
      <path d="M234.5-232.35v-495.3h91v495.3h-91Zm445.5 0L432.35-480 680-727.65 743.65-664l-184 184 184 184L680-232.35Z" />
    </svg>
  );
}

export function Last({ sizeClass = "w-8 h-8"}: IconProps) {
  return (
    <svg viewBox="0 -960 960 960" className={`${sizeClass} text-dark-gray`} fill="currentColor">
      <path d="M280-232.35 216.35-296l184-184-184-184L280-727.65 527.65-480 280-232.35Zm354.5 0v-495.3h91v495.3h-91Z" />
    </svg>
  );
}
