import telephoneRedWebp from "../assets/telephone-red.webp";
import telephoneRedPng from "../assets/telephone-red.png";

type TelephoneIconProps = {
  className?: string;
};

export default function TelephoneIcon({ className = "w-4 h-4" }: TelephoneIconProps) {
  return (
    <picture>
      <source srcSet={telephoneRedWebp} type="image/webp" />
      <img
        src={telephoneRedPng}
        alt=""
        aria-hidden="true"
        className={className}
        width={16}
        height={16}
        decoding="async"
      />
    </picture>
  );
}
