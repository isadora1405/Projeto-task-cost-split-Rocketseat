import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  Text,
} from "react-native";
import { SvgProps } from "react-native-svg";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { styles } from "./styles";
import { colors } from "@/styles";

export interface InputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  icon?: React.ComponentType<SvgProps>;
  containerStyle?: StyleProp<ViewStyle>;
  prefix?: string;
  label?: string;
  mask?: (value: string) => string;
}

export function Input<T extends FieldValues>({
  control,
  name,
  label,
  icon: Icon,
  containerStyle,
  prefix,
  multiline,
  secureTextEntry,
  mask,
  ...rest
}: InputProps<T>) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  const inputRef = useRef<TextInput>(null);

  const checkFocus = () => {
    if (inputRef.current) {
      setIsFocused(inputRef.current.isFocused());
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={[styles.wrapper, containerStyle]}>
          {label && (
            <Text style={[styles.label, isFocused && styles.labelFocused]}>
              {label}
            </Text>
          )}

          <View
            style={[
              styles.container,
              multiline && styles.containerMultiline,
              isFocused && styles.containerFocused,
              !!error && styles.containerError,
            ]}
          >
            {Icon && (
              <View style={styles.iconContainer}>
                <Icon
                  width={20}
                  height={20}
                  color={
                    !!error
                      ? colors.dangerLight
                      : isFocused
                        ? colors.greenBase
                        : colors.gray400
                  }
                />
              </View>
            )}

            {prefix && <Text style={styles.prefix}>{prefix}</Text>}

            <TextInput
              ref={inputRef}
              style={[styles.input, multiline && styles.inputMultiline]}
              placeholderTextColor={colors.gray400}
              multiline={multiline}
              value={value}
              onFocus={checkFocus}
              onEndEditing={checkFocus}
              secureTextEntry={showPassword}
              {...rest}
              onChangeText={(text) => {
                const formattedText = mask ? mask(text) : text;
                onChange(formattedText);
              }}
            />
          </View>

          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
}
