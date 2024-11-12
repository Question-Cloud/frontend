const LoadingSpinner = ({ message }: { message?: string }) => {
  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex justify-center items-center h-full">
        <div className="w-[40px] h-[40px] border-4 border-navy border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
      {message && <div className="body3 text-navy mt-[16px]">{message}</div>}
    </div>
  );
};

export { LoadingSpinner };
