import { observer } from "mobx-react-lite"
import React, { ComponentType, FC, useEffect, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, ViewStyle, Image, View } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps, navigate } from "../navigators"
import { colors, spacing } from "../theme"

const appLogo = require("../../assets/images/app-logo.png")

interface SignUpScreenProps extends AppStackScreenProps<"Login"> {}

export const SignUpScreen: FC<SignUpScreenProps> = observer(function SignUpScreen(_props) {
  const authPasswordInput = useRef<TextInput>(null)

  const [authPassword, setAuthPassword] = useState("");
  const [authConfirmPassword, setAuthConfirmPassword] = useState("");
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true);
  const [isAuthConfirmPasswordHidden, setIsAuthConfirmPasswordHidden] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    authenticationStore: { authEmail, setAuthEmail, setAuthToken, validationError },
  } = useStores()

  useEffect(() => {
    // Here is where you could fetch credentials from keychain or storage
    // and pre-fill the form fields.

    // Return a "cleanup" function that React will run when the component unmounts
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [])

  const error = isSubmitted ? validationError : ""

  function signUp() {
    setIsSubmitted(true)

    if (validationError) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(false)
    setAuthPassword("");
    setAuthConfirmPassword("");
    setAuthEmail("")

    // We'll mock this with a fake token.
    setAuthToken(String(Date.now()))
  }

  const PasswordRightAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.primary}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  );

  const ConfirmPasswordRightAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
    () =>
      function ConfirmPasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthConfirmPasswordHidden ? "view" : "hidden"}
            color={colors.palette.primary}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthConfirmPasswordHidden(!isAuthConfirmPasswordHidden)}
          />
        )
      },
    [isAuthConfirmPasswordHidden],
  );

  return (
    <Screen
      preset="auto"
      contentContainerStyle={[$screenContentContainer, { backgroundColor: colors.palette.primary}]}
      safeAreaEdges={["top", "bottom"]}
    >
      <View style={{alignItems: 'center'}}>
        <Image source={appLogo} style={{alignItems: 'center'}}/>
      </View>
      <Text testID="login-heading" tx="Zarejestruj się" style={$signIn} />

      <TextField
        value={authEmail}
        onChangeText={setAuthEmail}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        labelTx="loginScreen.emailFieldLabel"
        helper={error}
        status={error ? "error" : undefined}
        onSubmitEditing={() => authPasswordInput.current?.focus()}
      />

      <TextField
        ref={authPasswordInput}
        value={authPassword}
        onChangeText={setAuthPassword}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        secureTextEntry={isAuthPasswordHidden}
        labelTx="loginScreen.passwordFieldLabel"
        onSubmitEditing={signUp}
        RightAccessory={PasswordRightAccessory}
      />

      <TextField
        ref={authPasswordInput}
        value={authConfirmPassword}
        onChangeText={setAuthConfirmPassword}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="confirmPassword"
        autoCorrect={false}
        secureTextEntry={isAuthConfirmPasswordHidden}
        labelTx="loginScreen.confirmPasswordFieldLabel"
        onSubmitEditing={signUp}
        RightAccessory={ConfirmPasswordRightAccessory}
      />

      <Button
        testID="login-button"
        tx="loginScreen.tapToSignUp"
        style={$tapButton}
        preset="reversed"
        onPress={signUp}
      />
      <Button
        testID="sign-up-button"
        tx="Zaloguj się"
        style={$tapButton}
        preset="filled"
        onPress={() => navigate("Login")}
      />
      <Button
        testID="sign-up-button"
        tx="Homepage"
        style={$tapButton}
        preset="filled"
        onPress={() => navigate("Demo")}
      />
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

const $signIn: TextStyle = {
  marginBottom: spacing.sm,
  textAlign: 'center',
  fontSize: 25,
  color: colors.palette.secondary,
  fontWeight: 'bold'
}

const $enterDetails: TextStyle = {
  marginBottom: spacing.lg,
}

const $hint: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.md,
}

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,

}
