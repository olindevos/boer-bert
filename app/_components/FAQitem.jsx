import { SlArrowDown } from "react-icons/sl";

export default function FAQitem({ name }) {
  return (
    <div className="FAQ1">
      {name} {"  "}
      <div className="faQarrowdown">
        <SlArrowDown />
      </div>
    </div>
  );
}
