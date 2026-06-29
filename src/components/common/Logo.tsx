import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/stageup-logo-black.png"
        alt="StageUp"
        width={150}
        height={42}
        priority
        className="h-auto w-[150px]"
      />
    </div>
  );
}