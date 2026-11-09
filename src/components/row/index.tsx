import type { HTMLAttributes } from "react";

const Row = ({ ...rest }: {} & HTMLAttributes<HTMLDivElement>) => {
  return <div className={` ${rest.className}`}>Row</div>;
};

export default Row;
