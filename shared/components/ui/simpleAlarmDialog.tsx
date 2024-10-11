import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared";
import { useDialogContext } from "@/providers";
import React from "react";

interface SimpleAlarmDialogProps {
  message: string | undefined;
  onClose: () => void;
}

const SimpleAlarmDialog = React.memo(({ message, onClose }: SimpleAlarmDialogProps) => {
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
            <Button variant="navy" onClick={onClose}>
              확인
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

SimpleAlarmDialog.displayName = "SimpleAlarmDialog";

export { SimpleAlarmDialog };
