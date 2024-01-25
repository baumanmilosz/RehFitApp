import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Button, ListItem, Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { colors, spacing } from "../theme"
import { openLinkInBrowser } from "../utils/openLinkInBrowser"
import { isRTL } from "../i18n"

export const DemoCommunityScreen: FC<DemoTabScreenProps<"DemoCommunity">> =
  function DemoCommunityScreen(_props) {
    return (
      <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
        <View style={{flex: 1,  justifyContent: 'space-between', backgroundColor: colors.palette.secondary,   paddingHorizontal: spacing.lg,
          paddingVertical: spacing.lg,}}>
          <View>
            <Text preset="heading" tx="homepage.userLabel" style={$title}  size={'xl'}/>
            <Text preset="heading" tx="Spożyte kalorie" style={$title} size={'xl'} />
            <Text preset="heading" tx="Spalone kalorie" style={$title} size={'xl'}/>
            <Text preset="heading" tx="Twoje BMI wynosi" style={$title} size={'xl'}/>
            <Text preset="heading" tx={true ? 'Waga prawidłowa' : 'Waga nieprawidłowa!'} style={$title} size={'xl'}/>
          </View>
          <Button
            testID="login-button"
            tx="Rozpocznij trening"
            preset="reversed"
            onPress={() => null}
          />

        </View>
      </Screen>
    )
  }

const $container: ViewStyle = {
  flex: 1,
  paddingTop: spacing.lg + spacing.xl,
  backgroundColor: colors.palette.primary
}

const $title: TextStyle = {

  marginBottom: spacing.sm,

}

const $tagline: TextStyle = {
  marginBottom: spacing.xxl,
}

const $description: TextStyle = {
  marginBottom: spacing.lg,
}

const $sectionTitle: TextStyle = {
  marginTop: spacing.xxl,
}

const $logoContainer: ViewStyle = {
  marginEnd: spacing.md,
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center",
}

const $logo: ImageStyle = {
  height: 38,
  width: 38,
}
