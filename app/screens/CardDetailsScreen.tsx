import React from "react"
import { Button, View } from "react-native"
import { ResizeMode, Video } from "expo-av"
import { AuthBackgroundTemplate } from "app/components/AuthBackgroundTemplate"

export interface CardDetailsScreenProps {
  url: string
}

export function CardDetailsScreen(props: CardDetailsScreenProps) {
  const { url, ...rest } = props;

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <AuthBackgroundTemplate>
      <Video
        ref={video}
        style={{ width: '100%', height: '100%' }}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={{}}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </AuthBackgroundTemplate>
  )
}
