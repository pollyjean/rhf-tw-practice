import { ApplicationForms, REQUIRED, TW_VAR } from "@/libs/constance";
import { useFormContext } from "react-hook-form";

const RadioButtons = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ApplicationForms>();
  return (
    <dl>
      <dt className={TW_VAR.title}>
        What department do you want to work for?
        {errors.department?.message && (
          <strong className={`${TW_VAR.error} ml-1`}>
            {errors.department?.message}
          </strong>
        )}
      </dt>
      <dd className="flex flex-col gap-1.5 mt-3 mb-5">
        <div className={TW_VAR.align}>
          <input
            type="radio"
            id="department01"
            value="sales"
            className="accent-black"
            {...register("department", REQUIRED)}
          />
          <label htmlFor="department01" className={TW_VAR.answer}>
            Sales
          </label>
        </div>
        <div className={TW_VAR.align}>
          <input
            type="radio"
            id="department02"
            value="marketing"
            className="accent-black"
            {...register("department", REQUIRED)}
          />
          <label htmlFor="department02" className={TW_VAR.answer}>
            Marketing
          </label>
        </div>
        <div className={TW_VAR.align}>
          <input
            type="radio"
            id="department03"
            value="accounting"
            className="accent-black"
            {...register("department", REQUIRED)}
          />
          <label htmlFor="department03" className={TW_VAR.answer}>
            Accounting
          </label>
        </div>
        <div className={TW_VAR.align}>
          <input
            type="radio"
            id="department04"
            value="customer service"
            className="accent-black"
            {...register("department", REQUIRED)}
          />
          <label htmlFor="department04" className={TW_VAR.answer}>
            Customer Service
          </label>
        </div>
      </dd>
      <dt className={TW_VAR.title}>
        Why do you want to join this company?
        {errors.why?.message && (
          <strong className={`${TW_VAR.error} ml-1`}>
            {errors.why?.message}
          </strong>
        )}
      </dt>
      <dd className="flex flex-col gap-1.5 mt-3 mb-5">
        <div className={TW_VAR.align}>
          <input
            type="radio"
            id="why01"
            value="money"
            className="accent-black"
            {...register("why", REQUIRED)}
          />
          <label htmlFor="why01" className={TW_VAR.answer}>
            I want money!
          </label>
        </div>
        <div className={TW_VAR.align}>
          <input
            type="radio"
            id="why02"
            value="love"
            className="accent-black"
            {...register("why", REQUIRED)}
          />
          <label htmlFor="why02" className={TW_VAR.answer}>
            I love this company
          </label>
        </div>
        <div className={TW_VAR.align}>
          <input
            type="radio"
            id="why03"
            value="learn"
            className="accent-black"
            {...register("why", REQUIRED)}
          />
          <label htmlFor="why03" className={TW_VAR.answer}>
            I want to learn
          </label>
        </div>
        <div className={TW_VAR.align}>
          <input
            type="radio"
            id="why04"
            value="idk"
            className="accent-black"
            {...register("why", REQUIRED)}
          />
          <label htmlFor="why04" className={TW_VAR.answer}>
            I don&rsquo;t know why
          </label>
        </div>
      </dd>
    </dl>
  );
};

export default RadioButtons;
