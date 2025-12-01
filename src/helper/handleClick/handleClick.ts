import { Dispatch, RefObject, SetStateAction } from "react";

interface HandleProps {
  e: MouseEvent;
  isMenu: boolean;
  setIsMenu: Dispatch<SetStateAction<boolean>>;
  ref: RefObject<HTMLDivElement>;
  iconRef: RefObject<HTMLDivElement>;
}
export const handleClick = ({
  e,
  isMenu,
  setIsMenu,
  ref,
  iconRef,
}: HandleProps) => {
  const target = e.target as HTMLElement;
  if (!isMenu) return;
  if (ref.current.contains(target) || iconRef.current.contains(target)) return;
  setIsMenu(false);
  document.body.style.overflow = "auto";
};
