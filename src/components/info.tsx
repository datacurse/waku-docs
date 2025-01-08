import { SlInfo } from "react-icons/sl";

export const Info = ({ message }: { message: string }) => {
  return (
    <div className="p-4 bg-[#f6f6f6] rounded-md flex items-center gap-4">
      <SlInfo className="text-[#359ABA] flex-shrink-0 w-5 h-5" />
      {message}
    </div>
  );
};
