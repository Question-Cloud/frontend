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

interface ConfirmDialogProps {
  id: string;
  message: string | undefined;
  onExecute: () => void;
  controlMessage?: string;
}

const ConfirmDialog = React.memo(({ id, message, onExecute, controlMessage }: ConfirmDialogProps) => {
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
            <Button variant="gray" onClick={() => dialogClose(id)}>
              {controlMessage ? controlMessage : "취소"}
            </Button>
            <Button variant="navy" onClick={onExecute}>
              {controlMessage ? controlMessage : "확인"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

ConfirmDialog.displayName = "ConfirmDialog";

export { ConfirmDialog };
