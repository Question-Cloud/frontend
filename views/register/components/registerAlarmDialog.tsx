import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/_shared/ui";
import { useDialogContext } from "@/providers";
import React from "react";

interface RegisterAlarmDialogProps {
  message: string | undefined;
}

const RegisterAlarmDialog = React.memo(({ message }: RegisterAlarmDialogProps) => {
  const { isDialogOpen, dialogClose } = useDialogContext();

  return (
    <Dialog open={isDialogOpen} onOpenChange={dialogClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>알림</DialogTitle>
          <DialogDescription>{message}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="navy" onClick={dialogClose}>
              확인
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

export { RegisterAlarmDialog };
