import { ApplicationForms, TW_VAR } from "@/libs/constance";
import { useFormContext } from "react-hook-form";

const Selects = () => {
  const { register } = useFormContext<ApplicationForms>();

  return (
    <div className="my-4">
      <label htmlFor="salary" className={TW_VAR.title}>
        Salary
      </label>
      <select
        id="salary"
        className={`${TW_VAR.answer} ${TW_VAR.border}`}
        {...register("salary")}
      >
        <option value="$50K">$50K</option>
        <option value="$100K">$100K</option>
        <option value="$150K">$150K</option>
        <option value="$200K">$200K</option>
      </select>
    </div>
  );
};

export default Selects;
