import { ApplicationForms } from "@/libs/constance";
import { useFormContext } from "react-hook-form";

const Selects = () => {
  const { register } = useFormContext<ApplicationForms>();

  return (
    <div>
      <label htmlFor="salary">Salary</label>
      <select id="salary" {...register("salary")}>
        <option value={50}>$50K</option>
        <option value={100}>$100K</option>
        <option value={150}>$150K</option>
        <option value={200}>$200K</option>
      </select>
    </div>
  );
};

export default Selects;
