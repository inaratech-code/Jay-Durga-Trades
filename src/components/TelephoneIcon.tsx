import telephoneRedIcon from "../assets/telephone-red.png";

type TelephoneIconProps = {
  className?: string;
};

export default function TelephoneIcon({ className = "w-5 h-5" }: TelephoneIconProps) {
  return (
    <img
      src={telephoneRedIcon}
      alt=""
      aria-hidden="true"
      className={className}
      width={20}
      height={20}
      decoding="async"
    />
  );
}
