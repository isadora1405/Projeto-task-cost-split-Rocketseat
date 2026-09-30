import { useForm } from "react-hook-form";
import { ActivityIndicator, Text, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/Button";
import { schema } from "./schema";
import { Input } from "@/components/Input";
import { styles } from "../style";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "@/context/auth.context";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";
import { colors } from "@/styles";
import { AsteriskIcon, EmailIcon } from "@/components/Icons";

export interface FormLoginParams {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormLoginParams>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleAuthenticate } = useAuthContext();
  const { handleError } = useErrorHandler();

  const navigation = useNavigation<any>();

  const onSubmit = async (userData: FormLoginParams) => {
    try {
      await handleAuthenticate(userData);
    } catch (error) {
      handleError(error, "Falha ao logar");
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Entre no app</Text>

      <View style={styles.inputsContainer}>
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
          icon={AsteriskIcon}
          secureTextEntry
        />
      </View>

      <Button onPress={handleSubmit(onSubmit)}>
        {isSubmitting ? <ActivityIndicator color={colors.white} /> : "Entrar"}
      </Button>

      <View style={styles.divider} />

      <Text style={styles.registerText}>Ainda não tem cadastro?</Text>
      <Button
        variant="secondary"
        onPress={() => navigation.navigate("Register")}
      >
        Cadastrar
      </Button>
    </View>
  );
};
