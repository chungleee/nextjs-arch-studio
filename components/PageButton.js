const PageButton = ({ children }) => {
  return (
    <button
      className={`flex bg-white hover:bg-very-light-grey active:bg-very-dark-blue items-center justify-center text-dark-grey hover:text-medium-grey `}
      style={{ height: "80px", width: "80px" }}
    >
      {children}
    </button>
  );
};

export default PageButton;
