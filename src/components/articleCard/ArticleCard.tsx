import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ArticleCardProps {
  image?: string;
  title?: string;
  content?: any;
  date?: string;
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  title,
  content,
  date,
  index,
}) => {
  return (
    <div
      className={`${
        index < 2 ? "md:col-span-6" : "md:col-span-4"
      } col-span-1 group`}
    >
      <Link href="/" className="overflow-hidden block">
        <Image
          src={`${image}`}
          alt={`${title}`}
          width={900}
          height={400}
          className="group-hover:scale-110 group-hover:rotate-2 duration-1000 ease-in-out"
        />
      </Link>
      <Link
        href="/"
        className={`${
          index < 2 ? "md:text-2xl text-base" : "text-base"
        } font-bold mt-3 mb-2 group-hover:text-secondary duration-300 block`}
      >
        {title}
      </Link>
      <div
        className="line-clamp-2 text-slate-500 mb-3"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <p className="text-slate-500">{date}</p>
    </div>
  );
};

export default ArticleCard;
