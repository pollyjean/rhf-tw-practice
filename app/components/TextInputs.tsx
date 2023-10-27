import { ApplicationForms } from "@/libs/constance";
import { useFormContext } from "react-hook-form";

const TextInputs = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ApplicationForms>();

  return (
    <>
      <div>
        <label htmlFor="introduction">Introduce yourself</label>
        <input
          type="text"
          id="introduction"
          {...register("introduction", {
            required: "Please write down your introduction",
          })}
        />
        {errors.introduction?.message && (
          <strong>{errors.introduction.message}</strong>
        )}
      </div>
      <div>
        <label htmlFor="dreams">Tell us what your dreams are</label>
        <textarea
          id="dreams"
          {...register("dreams", {
            required: "Please tell us what your dreams are",
          })}
        ></textarea>
        {errors.dreams?.message && <strong>{errors.dreams.message}</strong>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          {...register("email", { required: "Please write down your email" })}
        />
        {errors.email?.message && <strong>{errors.email.message}</strong>}
      </div>
    </>
  );
};

export default TextInputs;
