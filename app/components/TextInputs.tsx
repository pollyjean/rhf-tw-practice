import { ApplicationForms, TW_VAR } from "@/libs/constance";
import { useFormContext } from "react-hook-form";

const TextInputs = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ApplicationForms>();

  return (
    <>
      <div className="my-4">
        <label htmlFor="introduction" className={TW_VAR.title}>
          Introduce yourself
        </label>
        <input
          type="text"
          id="introduction"
          className={`${TW_VAR.answer} ${TW_VAR.border} ${
            errors.introduction?.message ? `focus:outline-red-500` : null
          }`}
          {...register("introduction", {
            required: "Please write down your introduction",
          })}
        />
        {errors.introduction?.message && (
          <strong className={TW_VAR.error}>
            {errors.introduction.message}
          </strong>
        )}
      </div>
      <div className="my-4">
        <label htmlFor="dreams" className={TW_VAR.title}>
          Tell us what your dreams are
        </label>
        <textarea
          id="dreams"
          className={`${TW_VAR.answer} ${TW_VAR.border} h-20 ${
            errors.dreams?.message ? `focus:outline-red-500` : null
          }`}
          {...register("dreams", {
            required: "Please tell us what your dreams are",
            minLength: {
              value: 10,
              message: " Please write more than 10 characters.",
            },
          })}
        ></textarea>
        {errors.dreams?.message && (
          <strong className={TW_VAR.error}>{errors.dreams.message}</strong>
        )}
      </div>
      <div className="my-4">
        <label htmlFor="email" className={TW_VAR.title}>
          Email
        </label>
        <input
          type="text"
          id="email"
          className={`${TW_VAR.answer} ${TW_VAR.border} ${
            errors.email?.message ? `focus:outline-red-500` : null
          }`}
          {...register("email", {
            required: "Please write down your email",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@naver\.com$/,
              message: "Only @naver is allowed.",
            },
          })}
        />
        {errors.email?.message && (
          <strong className={TW_VAR.error}>{errors.email.message}</strong>
        )}
      </div>
    </>
  );
};

export default TextInputs;
