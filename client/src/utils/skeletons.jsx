const Skeletons = () => {
  return (
    <>
      <div className="flex gap-3 items-center mb-6">
        <div className="sleleton w-10 h-10 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-10 w-80"></div>
          <div className="skeleton h-10 w-80"></div>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-end">
        <div className="flex flex-col gap-4">
          <div className="skeleton h-10 w-80"></div>
          <div className="sleleton w-10 h-10 rounded-full shrink-0"></div>
        </div>
      </div>
    </>
  );
};

export default Skeletons;
