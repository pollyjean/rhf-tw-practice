"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import RadioButtons from "@/components/RadioButtons";
import Selects from "@/components/Selects";
import TextInputs from "@/components/TextInputs";
import { ApplicationForms, TW_VAR } from "./libs/constance";
import { useState } from "react";

export default function Home() {
  const [results, setResults] = useState("");
  const methods = useForm<ApplicationForms>({ mode: "onChange" });
  const onSubmit: SubmitHandler<ApplicationForms> = (data) => {
    setResults(JSON.stringify(data));
  };
  return (
    <main className="flex justify-center items-center">
      <section className="sm:w-[28rem] w-10/12 mt-10 bg-rose-100 border-2 border-r-8 border-b-8 border-black rounded-3xl p-8">
        <h1 className="text-xl font-bold text-center mb-8">
          Job Application Form
        </h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <RadioButtons />
            <Selects />
            <TextInputs />
            <button
              type="submit"
              className={`${TW_VAR.title} ${TW_VAR.border} border-b-4 border-r-4 bg-yellow-300 py-2.5 mt-8 hover:bg-yellow-200 active:border-b-2 active:border-r-2`}
            >
              Give me this job
            </button>
          </form>
        </FormProvider>
        {results && (
          <span className="mt-4 block text-xs font-medium break-words">
            {results}
          </span>
        )}
      </section>
    </main>
  );
}
