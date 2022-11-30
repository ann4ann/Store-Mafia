import React from "react";
import s from "./Wrapper.module.scss";

interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
}
const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return <div className={s.wrapper + " " + (className || "")}>{children}</div>;
};

export default Wrapper;
