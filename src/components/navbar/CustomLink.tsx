import Link from "next/link";

type TCustomLinkProps = {
  title: string;
  ahref: string;
  className?: string;
};

const CustomLink = ({ title, ahref, className }: TCustomLinkProps) => {
  return (
    <Link
      href={ahref}
      className={`text-lg  sm:text-xl font-bold bg-gray-200 px-4 py-2 rounded-xl ${className}`}
    >
      {title}
    </Link>
  );
};

export default CustomLink;
