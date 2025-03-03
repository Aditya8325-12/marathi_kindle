import {create} from 'zustand';
import Sound from 'react-native-sound';

// Initialize the sound object with your audio file
const music = new Sound('theme.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load the sound', error);
    return;
  }
});

const useMusicStore = create(set => ({
  isPlaying: false,
  playMusic: () => {
    const playAndRestart = () => {
      music.play(success => {
        if (success) {
          console.log('Music finished. Restarting...');
          music.setCurrentTime(0); 
          playAndRestart(); 
        } else {
          console.log('Playback failed due to audio decoding errors');
        }
      });
    };

    playAndRestart();
    set({isPlaying: true});
  },

  stopMusic: () => {
    music.stop(() => {
      console.log('Music stopped');
    });
    set({isPlaying: false});
  },

  restartMusic: () => {
    music.stop(() => {
      music.setCurrentTime(0); // Reset to the beginning
      music.play(success => {
        if (!success) {
          console.log('Playback failed due to audio decoding errors');
        }
      });
    });
    set({isPlaying: true});
  },
}));

export default useMusicStore;
