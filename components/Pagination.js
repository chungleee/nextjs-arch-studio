import PageButton from "./PageButton";

const Pagination = ({ heroes, handleSelectHero }) => {
  return (
    <>
      {heroes.map((_, index) => {
        return (
          <span
            onClick={() => {
              handleSelectHero(index);
            }}
          >
            <PageButton>{index + 1}</PageButton>
          </span>
        );
      })}
    </>
  );
};

export default Pagination;
