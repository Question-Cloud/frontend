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
  id: string;
  message: string | undefined;
  onClose: () => void;
  controlMessage?: string;
}

const SimpleAlarmDialog = React.memo(({ id, message, onClose, controlMessage }: SimpleAlarmDialogProps) => {
  const { isDialogOpen, dialogClose } = useDialogContext();

  return (
    <Dialog open={isDialogOpen(id)} onOpenChange={() => dialogClose(id)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>알림</DialogTitle>
          <DialogDescription>{message}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="navy" onClick={onClose}>
              {controlMessage ? controlMessage : "확인"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

SimpleAlarmDialog.displayName = "SimpleAlarmDialog";

export { SimpleAlarmDialog };
