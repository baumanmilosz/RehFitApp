import React from "react"
import {View, ViewStyle } from "react-native"
import { colors, spacing } from "../theme"
import { Screen } from "app/components/Screen"

export interface AuthBackgroundTemplateProps {
  children?: React.ReactNode
}

export function AuthBackgroundTemplate(props: AuthBackgroundTemplateProps) {
  const { children } = props

  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <View style={$innerContainer}>
        {children}
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
  paddingTop: spacing.lg + spacing.xl,
  backgroundColor: colors.palette.primary
}

const $innerContainer: ViewStyle = {
  flex: 1,
  justifyContent: 'space-between',
  backgroundColor: colors.palette.secondary,
}
