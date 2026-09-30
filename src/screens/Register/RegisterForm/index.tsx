import { View, Text, ActivityIndicator } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { styles } from "../styles";
import { schema } from "./schema";
import { useAuthContext } from "@/context/auth.context";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";
import { colors } from "@/styles";
import { AsteriskIcon, EmailIcon, UserIcon } from "@/components/Icons";

export interface FormRegisterParams {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const { handleRegister } = useAuthContext();
  const { handleError } = useErrorHandler();
  const navigation = useNavigation<any>();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormRegisterParams>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (userData: FormRegisterParams) => {
    try {
      await handleRegister(userData);
    } catch (error) {
      handleError(error, "Falha ao cadastrar usuário");
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Crie sua conta</Text>

      <View style={styles.inputsContainer}>
        <Input
          control={control}
          name="name"
          placeholder="Nome"
          icon={UserIcon}
          autoCapitalize="words"
        />

        <Input
          control={control}
          name="email"
          placeholder="E-mail"
          icon={EmailIcon}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          control={control}
          name="password"
          placeholder="Senha"
          secureTextEntry
          icon={AsteriskIcon}
        />
      </View>

      <Button onPress={handleSubmit(onSubmit)}>
        {isSubmitting ? (
          <ActivityIndicator color={colors.gray800} />
        ) : (
          "Cadastrar"
        )}
      </Button>

      <View style={styles.divider} />

      <Text style={styles.registerText}>Já tem cadastro?</Text>

      <Button variant="secondary" onPress={() => navigation.navigate("Login")}>
        Entrar na conta
      </Button>
    </View>
  );
};
