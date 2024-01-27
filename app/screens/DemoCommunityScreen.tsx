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
            <Text preset="heading" tx="homepage.consumedCaloriesLabel" style={$title} size={'xl'} />
            <Text preset="heading" tx="homepage.burnedCaloriesLabel" style={$title} size={'xl'}/>
            <Text preset="heading" tx="homepage.bmiLabel" style={$title} size={'xl'}/>
            <Text preset="heading" tx={true ? 'homepage.properWeightLabel' : 'homepage.weightIncorrectLabel!'} style={$title} size={'xl'}/>
          </View>
          <Button
            testID="login-button"
            tx="homepage.startTreningButton"
            preset="reversed"
            onPress={() => null}
          />
      </AuthBackgroundTemplate>
    )
  }

const $title: TextStyle = {
  marginBottom: spacing.sm,
}
