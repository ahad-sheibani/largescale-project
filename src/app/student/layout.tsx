import { ReactNode } from "react";

export default async function StudentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className="bg-gray-300 w-80 justify-center items-center"></div>
      <div>{children}</div>
    </>
  );
}
