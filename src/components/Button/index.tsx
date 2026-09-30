import React, { FC, PropsWithChildren } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = "primary",
  icon,
  style,
  ...rest
}) => {
  const isPrimary = variant === "primary";

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isPrimary ? styles.primaryBackground : styles.secondaryBackground,
        style,
      ]}
      activeOpacity={0.7}
      {...rest}
    >
      {icon && <View>{icon}</View>}

      <Text
        style={[
          styles.title,
          isPrimary ? styles.primaryText : styles.secondaryText,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};
