type PlusIconProps = {
  className?: string;
};

export default function PlusIcon({ className = "plus" }: PlusIconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/group-2.svg"
      alt=""
      width={50}
      height={50}
      className={className}
      aria-hidden="true"
    />
  );
}
