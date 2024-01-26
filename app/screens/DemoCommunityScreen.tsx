import React, { FC } from "react"
import { TextStyle, View } from "react-native"
import { Button, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { spacing } from "../theme"
import { AuthBackgroundTemplate } from "app/components/AuthBackgroundTemplate"

export const DemoCommunityScreen: FC<DemoTabScreenProps<"DemoCommunity">> =
  function DemoCommunityScreen(_props) {
    return (
      <AuthBackgroundTemplate>
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
      </AuthBackgroundTemplate>
    )
  }

const $title: TextStyle = {
  marginBottom: spacing.sm,
}
