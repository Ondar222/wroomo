import React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = "",
  target = "_self",
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e); // передаем MouseEvent обратно
    }
  };

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={onClick ? handleClick : undefined}
    >
      {children}
    </a>
  );
};
