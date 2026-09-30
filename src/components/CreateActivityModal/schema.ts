import * as yup from "yup";

export const createActivitySchema = yup.object().shape({
  title: yup
    .string()
    .required("O título é obrigatório.")
    .min(3, "O título deve ter pelo menos 3 caracteres."),
  date: yup
    .string()
    .required("A data é obrigatória.")
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Digite uma data válida no formato DD/MM/AAAA",
    ),
});

export type NewActivityFormData = yup.InferType<typeof createActivitySchema>;
