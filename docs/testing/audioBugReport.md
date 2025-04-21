# Audio debugging process                                       

## Discovery

Cohort member reported that the pause play button works, but if you press pause to stop the music, the music will still play and the button remains in paused state.

## Replicating bug
Upon further investigation to this bug I found the following

Pause music button pressed -> clicked card to activate game -> game starts & music plays (Button still in paused state) -> Reset game then bgMusic starts (button remains in paused state) -> pause button pressed -> music stops and button remains paused. 

My first thought is that each click would trigger a change in the game state, which in turn calls a function to playTrack() relating to game state. 

## Approach

I will attempt to counter this bug by checking the audio status. First I will attempt to console log the status of the audio player on loading of DOM and then when clicking the play pause button utilizing a function. 

### Function Created for checking audioPlayer state:

                function checkAudioStatus(audioPlayer) {
                        if (audioPlayer.paused) {
                            console.log("audio player paused");
                        } else {
                            console.log("audio player is playing");
                        }
                        if (!audioPlayer.src) {
                            console.log("No audio source is set.");
                        } else {
                            console.log("Audio source is available. Playing track:", audioPlayer.src);
                        }
                    }

Added checkAudioStatus function to the following eventLisners/ functions:

1. playPauseButton.addEventListener (LINE: 56)
2. Global call (LINE: 77)
3. card.addEventListener (LINE: 126)
4. If Statement (LINE: 176)
5.  reset.addEventListener (LINE: 205)
6. closeModal (LINE: 196)
7.  function startGameTimer() (LINE: 105)


                                        
This will tell me what state the audio player is in on each action, if a track is loaded and what track. 

## Findings & Fix

Due to the functions being called to play tracks on eventlistners or conditional statements, this was bypassing the pause/play button entirely. This is the cause of music playing and pause button still remaining paused. To combat this issue, I came up with the following conditional statement to check the status of the audio player:

               if (!audioPlayer.paused) {
                    playTrack(1); // Play music only if the audio is NOT paused
                }            
This code was added to all track calls. 

This checks if audio status is currently paused and keeps it that way if so. Which works as intended and keeps the music paused. However I discovered another malfunction after this. 

If the music is paused either during the DOM load or by user interaction, the audio source currently set, remains locked in place and does not update to other tracks as expected. This issue arises because the conditional logic in the 'if' statement prevents a new track from loading while the 'audioPlayer' is paused. As a result, the initially paused track remains frozen and unchanged. To resolve this, I need to try and get the audio player to update it's source to the desired track, but keep music paused.

To counter this issue, I implemented an 'else' statement to ensure the track still loads. I wasn't sure if it would word, but had to try. 

              if (!isGamePlaying) {
                    if (!audioPlayer.paused) {
                        playTrack(1); // Play music only if the audio is NOT paused
                    } else {
                        audioPlayer.load(playTrack(1));
                    }
              }

This worked perfectly for loading and keeping the music paused, but it also resulted in getting an error due to using an argument in the .load() so I further altered the code to this:

              if (!isGamePlaying) {
                  if (!audioPlayer.paused) {
                      playTrack(1); // Play music only if the audio is NOT paused
                  } else {
                      // Set the new track without auto-playing it
                      audioPlayer.src = musicTracks[1];
                      audioPlayer.load();
                  }
              }

This ensures the audio src is changed and the track is loaded ready for music to play. 
