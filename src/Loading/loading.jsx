const Loading = ({ theme }) => {
  return (
    <div className="d-flex justify-content-center m-auto">
      <div className={`loading spinner-border ${theme || "success"}`}> </div>
    </div>
  );
};

export default Loading;
