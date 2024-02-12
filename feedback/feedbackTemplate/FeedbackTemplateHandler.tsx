import axios from "axios";
import { useForm, useFieldArray } from "react-hook-form";
import { FeedbackTemplateData } from "../types";
import FeedbackTemplate from "./FeedbackTemplate";
import { useEffect } from "react";

const FeedbackTemplateHandler = () => {
  const { control, handleSubmit, watch, register } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "template",
  });

  const onSubmit = (data: FeedbackTemplateData) => {
    console.log(JSON.stringify(data));
    const headers = {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyJ9.eyJhdWQiOiJkYjI5MDg2Mi02OWEyLTQzZTQtYTczNy04NTFjODg0MzMzNTkiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vNWI3NTE4MDQtMjMyZi00MTBkLWJiMmYtNzE0ZTNiYjQ2NmViL3YyLjAiLCJpYXQiOjE3MDY5NjAxNzYsIm5iZiI6MTcwNjk2MDE3NiwiZXhwIjoxNzA2OTY0MDc2LCJuYW1lIjoicm9zaGFuX3JveSIsIm5vbmNlIjoiMjg1YTUzNTYtZTBmYi00NzdhLThlOTEtOWYxN2YxYzBmNWJmIiwib2lkIjoiNzNhNGZlYjAtN2MzNi00YWNjLWEzNWItNGJkYjFkYTcyZmEwIiwicHJlZmVycmVkX3VzZXJuYW1lIjoicm9zaGFuX3JveUBzcmVlZ2Nsb3VkZ21haWwub25taWNyb3NvZnQuY29tIiwicmgiOiIwLkFVa0FCQmgxV3k4akRVRzdMM0ZPTzdSbTYySUlLZHVpYWVSRHB6ZUZISWhETTFsSkFQVS4iLCJzdWIiOiJzRkZtSVR4QmdRaWsyaDJ4MkEtTWFjWUp5UTFDREhVcmcteE1vZTA1QTNjIiwidGlkIjoiNWI3NTE4MDQtMjMyZi00MTBkLWJiMmYtNzE0ZTNiYjQ2NmViIiwidXRpIjoiX2R6MWthLVd4RUd1UEQxbjA3Sk9BQSIsInZlciI6IjIuMCJ9.ZiGiO4MkMuwNuum3XicAjrjS5KSvZy7YPwWe1kDy1ghbdu2MuXKWfu2IFVYaKPcjTbyJiXaYaElBv2O5d-Ly6er1qElBkubvVOrvMShXCWWy-JG7g8_5hFJrDvX0pAAyGsb1D1r5dPBAMC98wK-Jy07W2JLBplX41kHIvvX9ElYmwOq38eVmnpXX65RRW6EPP3kjdCq_97WfEAvB7kTISiTdwiSLIos5sqffXCUCz49gO2LfhZOgcXeGtoRp5WfzoPtBEM9OAjPmWNSOU3js9LBmqItNXICdxlE8b6-gNmtKjZb-XoG-02vv8Ci8S0GUr1bAAIrRqZ8QJa5KRTAOaw`,
    };
    axios
      .post("http://localhost:8080/addFeedbackTemplate", data, { headers })
      .then((response) => {
        console.log("Data sent successfully!", response);
      })
      .catch((error) => {
        console.error("Error while sending data:", error);
      });
  };

  const isAddQuestionButtonActive = () => {
    if (fields.length === 0) return true;

    const lastIndex = fields.length - 1;
    const { type, options, question } = watch(`template[${lastIndex}]`);

    return (
      (type === "text" && question !== "") ||
      (type !== "text" && options.length >= 1 && question !== "")
    );
  };

  useEffect(() => {
    append({ question: "", type: "text", options: [] });
  }, []);

  return (
    <>
      <FeedbackTemplate
        handleSubmit={handleSubmit}
        register={register}
        remove={remove}
        onSubmit={onSubmit}
        isAddQuestionButtonActive={isAddQuestionButtonActive}
        append={append}
        fields={fields}
        control={control}
        watch={watch}
      />
    </>
  );
};

export default FeedbackTemplateHandler;
