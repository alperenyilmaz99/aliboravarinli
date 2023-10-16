import React, { useEffect, useRef } from "react";
import { View, Button, StyleSheet } from "react-native";
import Video from "react-native-video";

export default function VideoScreen() {
  const secondVideo = useRef<Video | null>(null);
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});

  useEffect(() => {
    playSecondVideo();
  }, []);

  const playSecondVideo = async () => {
    if (secondVideo && secondVideo.current) {
      secondVideo.current.seek(5);
      secondVideo.current.presentFullscreenPlayer();
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={secondVideo}
        style={styles.video}
        source={require("../video/halilim_video.mp4")}
        resizeMode="contain"
        repeat={true}
        onPlaybackStatusUpdate={setStatusSecondVideo}
      />
      <View style={styles.buttons}>
        <Button title="Play from 5s" onPress={playSecondVideo} />
        <Button
          title={statusSecondVideo.isLooping ? "Set to not loop" : "Set is loop"}
          onPress={() => {
            if (secondVideo && secondVideo.current) {
              secondVideo.current.setIsLooping(!statusSecondVideo.isLooping);
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    flex: 1,
    alignSelf: "stretch",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
