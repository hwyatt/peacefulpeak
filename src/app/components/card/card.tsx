import { ReactNode } from "react";

type CardProps = {
  title: string;
  content: ReactNode;
  badge: ReactNode;
  img: string;
};

export const Card = ({ title, content, badge, img }: CardProps) => {
  return (
    <div className="card bg-neutral text-base-100 w-full shadow-sm">
      <figure>
        <img
          src={img}
          alt={title}
          className="aspect-video object-cover object-bottom"
        />
      </figure>
      <div className="card-body">
        {badge}
        <h2 className="card-title">{title}</h2>
        <div>{content}</div>
        {/* <div className="card-actions mt-4">
          <button className="btn btn-primary">{linkText}</button>
        </div> */}
      </div>
    </div>
  );
};
