"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import RadioButtons from "@/components/RadioButtons";
import Selects from "@/components/Selects";
import TextInputs from "@/components/TextInputs";
import { ApplicationForms } from "./libs/constance";
import { useState } from "react";

export default function Home() {
  const [results, setResults] = useState("");
  const methods = useForm<ApplicationForms>({ mode: "onChange" });
  const onSubmit: SubmitHandler<ApplicationForms> = (data) => {
    setResults(JSON.stringify(data));
  };
  return (
    <section>
      <h1>Job Application Form</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <RadioButtons />
          <Selects />
          <TextInputs />
          <button type="submit">Give me this job</button>
        </form>
      </FormProvider>
      {results && <span>{results}</span>}
    </section>
  );
}
