import * as React from "react";
import { cn } from "@/utils/index";
import { Avatar, AvatarImage } from "../Avatar";
import { Badge } from "../Badge";

const Comment = ({ children }: { children: React.ReactNode }) => {
  return <div className={"p-[24px] w-full"}>{children}</div>;
};
Comment.displayName = "Comment";

const CommentHeader = ({
  profileImage,
  userName,
  userCommentDetail,
  isCreator = false,
  className,
}: {
  profileImage: string;
  userName: string;
  userCommentDetail?: string;
  isCreator: boolean;
  className?: string;
}) => (
  <div className={cn("flex items-center", className)}>
    <Avatar>
      <AvatarImage src={profileImage ? profileImage : "/default_profile_image.png"} alt={`${userName}`} />
    </Avatar>
    <div className="ml-2 space-y-[4px]">
      <div className="flex gap-[4px]">
        <div className="body1">{userName}</div>
        {isCreator && <Badge className="h-[22px]">크리에이터</Badge>}
      </div>
      {userCommentDetail && <div className="caption text-gray_04">{userCommentDetail}</div>}
    </div>
  </div>
);
CommentHeader.displayName = "CommentHeader";

const CommentBody = ({ content, className }: { content: string; className?: string }) => (
  <div className={cn("body2 my-[8px]", className)}>
    <p>{content}</p>
  </div>
);
CommentBody.displayName = "CommentBody";

const CommentFooter = ({
  timestamp,
  onDelete,
  isWriter,
  className,
}: {
  timestamp: string;
  onDelete: () => void;
  isWriter: boolean;
  className?: string;
}) => (
  <div className={cn("flex caption text-gray_03", className)}>
    <span className="mr-[10px]">{timestamp}</span>
    {isWriter && (
      <button onClick={onDelete} className="text-red-500">
        삭제
      </button>
    )}
  </div>
);
CommentFooter.displayName = "CommentFooter";

export { Comment, CommentHeader, CommentBody, CommentFooter };
