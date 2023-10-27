import { ApplicationForms, REQUIRED } from "@/libs/constance";
import { useFormContext } from "react-hook-form";

const RadioButtons = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ApplicationForms>();
  return (
    <dl>
      <dt>
        What department do you want to work for?
        {errors.department?.message && (
          <strong>{errors.department?.message}</strong>
        )}
      </dt>
      <dd>
        <div>
          <input
            type="radio"
            id="department01"
            value="sales"
            {...register("department", REQUIRED)}
          />
          <label htmlFor="department01">Sales</label>
        </div>
        <div>
          <input
            type="radio"
            id="department02"
            value="marketing"
            {...register("department", REQUIRED)}
          />
          <label htmlFor="department02">Marketing</label>
        </div>
        <div>
          <input
            type="radio"
            id="department03"
            value="accounting"
            {...register("department", REQUIRED)}
          />
          <label htmlFor="department03">Accounting</label>
        </div>
        <div>
          <input
            type="radio"
            id="department04"
            value="customer service"
            {...register("department", REQUIRED)}
          />
          <label htmlFor="department04">Customer Service</label>
        </div>
      </dd>
      <dt>
        Why do you want to join this company?
        {errors.why?.message && <strong>{errors.why?.message}</strong>}
      </dt>
      <dd>
        <div>
          <input
            type="radio"
            id="why01"
            value="money"
            {...register("why", REQUIRED)}
          />
          <label htmlFor="why01">I want money!</label>
        </div>
        <div>
          <input
            type="radio"
            id="why02"
            value="love"
            {...register("why", REQUIRED)}
          />
          <label htmlFor="why02">I love this company</label>
        </div>
        <div>
          <input
            type="radio"
            id="why03"
            value="learn"
            {...register("why", REQUIRED)}
          />
          <label htmlFor="why03">I want to learn</label>
        </div>
        <div>
          <input
            type="radio"
            id="why04"
            value="idk"
            {...register("why", REQUIRED)}
          />
          <label htmlFor="why04">I don`t know why</label>
        </div>
      </dd>
    </dl>
  );
};

export default RadioButtons;
