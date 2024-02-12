export interface FeedbackCardData {
  training: string;
  trainer: string;
  rating: number;
}
export interface TraineeFeedbackData {
  name: string;
  department: string;
  date: string;
  rating: number;
}

import {
  Control,
  FieldValues,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

export type FormCardData = {
  question: string;
  type: "radio" | "checkBox" | "textBox";
  options?: string[];
  required: boolean;
};

export type FormData = {
  formData: FormCardData[];
};

export type User = {
  id: string;
  username: string;
};

export type FormSubmission = {
  formData: {
    [key: string]: string | string[];
  };
  rating: number | null;
  user: User | null;
};

export type DynamicFormProps = {
  formData: FormCardData[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    question: string
  ) => void;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
  formState: { [key: string]: string | string[] };
  rating: number | null;
};

export type FeedbackTemplateCardProps = {
  index: number;
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
  remove: UseFieldArrayRemove;
  watch: UseFormWatch<FieldValues>;
};

export type Question = {
  question: string;
  type: "text" | "radio" | "checkbox";
  options: string[];
};

export type FeedbackTemplateData = {
  questions: Question[];
};

export type FeedbackTemplateProps = {
  handleSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
  register: UseFormRegister<FieldValues>;
  remove: UseFieldArrayRemove;
  onSubmit: (data: FeedbackTemplateData) => void;
  isAddQuestionButtonActive: () => boolean;
  append: UseFieldArrayAppend<FieldValues, "template">;
  fields: Record<"id", string>[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FieldValues, any, FieldValues>; //default use hook type
  watch: UseFormWatch<FieldValues>;
};
