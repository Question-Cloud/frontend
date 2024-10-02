export interface WorkbookProps {
  data: {
    id: number;
    title: string;
    createdAt: string;
    questionCount: number;
  };
  onDownload: () => void;
  onEdit: () => void;
}
