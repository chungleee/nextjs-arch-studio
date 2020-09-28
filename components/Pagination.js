import PageButton from "./PageButton";
import { nanoid } from "nanoid";

const Pagination = ({ heroes, handleSelectHero }) => {
  return (
    <div className="hidden lg:flex">
      {heroes.map((_, index) => {
        let key = nanoid();
        return (
          <span
            key={key}
            onClick={() => {
              handleSelectHero(index);
            }}
          >
            <PageButton
              key={key}
              onClick={() => {
                handleSelectHero(index);
              }}
            >
              {index + 1}
            </PageButton>
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
