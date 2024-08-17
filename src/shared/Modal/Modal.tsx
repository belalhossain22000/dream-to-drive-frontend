import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { FC, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  buttonText: string;
  px?: string;
  maxWidth?: string;
}

const Modal: FC<ModalProps> = ({
  buttonText,
  px = "4rem",
  maxWidth,
  children,
}) => {
  // console.log(maxWidth);
  return (
    <div >
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="px-10">
            {buttonText}
          </Button>
        </DialogTrigger>
        <DialogContent
          className={`sm:max-w-[${maxWidth}] inline-block bg-white overflow-y-auto rounded-lg p-5`}
        >
          <div>{children}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
