import * as Yup from "yup";

export const expenseSchema = Yup.object().shape({
  title: Yup.string().required("O título é obrigatório"),
  amount: Yup.number()
    .positive("O valor deve ser maior que zero")
    .required("O valor é obrigatório"),
  participantIds: Yup.array()
    .of(Yup.string())
    .min(1, "Selecione pelo menos um participante")
    .required(),
});
