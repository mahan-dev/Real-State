export interface MenuProps {
  ref: React.RefObject<HTMLDivElement>;
  isMenu: boolean;
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ResponseData {
  data: string;
  message: string;
  status: string;
}
