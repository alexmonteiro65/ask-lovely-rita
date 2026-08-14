import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";

import { useAudioPlayer } from "expo-audio";

const C = {
  bg: "#080B32",
  panel: "#151A4E",
  purple: "#7629E8",
  pink: "#FF238F",
  gold: "#FFD52E",
  green: "#35D96A",
  blue: "#258CFF",
  orange: "#FF9D22",
  red: "#F04455",
  white: "#FFFFFF",
  muted: "#AAB1DD",
};

const WORLDS = [
  ["Music", "🎵", C.purple, "Rhythm • Sound • Songs"],
  ["Math", "123", C.green, "Numbers • Logic • Games"],
  ["Geography", "🌎", C.blue, "Earth • Countries • Places"],
  ["Science", "⚗️", C.orange, "Discover • Explore • Why"],
  ["Smart Mind", "🧠", "#8B3FEA", "Think • Memory • Logic"],
  ["Life & World", "♥", C.red, "Life • People • Skills"],
];

export default function App() {
  const [screen, setScreen] = useState("home");
  const [beatCoins, setBeatCoins] = useState(1250);
  const [streak, setStreak] = useState(12);
  const [taps, setTaps] = useState([]);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [gameRunning, setGameRunning] = useState(false);

  const startTime = useRef(null);

  const beatPlayer = useAudioPlayer(
    require("./rita_beat(1).wav")
  );

  const tapPlayer = useAudioPlayer(
    require("./rita_tap(1).wav")
  );

  function playRitaBeat() {
    try {
      beatPlayer.seekTo(0);
      beatPlayer.volume = 1;
      beatPlayer.play();
    } catch (error) {
      console.log("Beat audio error:", error);
    }
  }

  function playTapSound() {
    try {
      tapPlayer.seekTo(0);
      tapPlayer.volume = 1;
      tapPlayer.play();
    } catch (error) {
      console.log("Tap audio error:", error);
    }
  }

  function startBeatGame() {
    setScreen("beat");
    setTaps([]);
    setScore(0);
    setMessage("");
    setGameRunning(false);
  }

  function beginListening() {
    setTaps([]);
    setScore(0);
    setMessage("");
    setGameRunning(true);

    startTime.current = Date.now();

    playRitaBeat();
  }

  function tapBeat() {
    if (!gameRunning) return;

    // PLAY DRUM SOUND
    playTapSound();

    const now = Date.now();

    setTaps((oldTaps) => {
      const updated = [...oldTaps, now];

      if (updated.length >= 4) {
        finishGame(updated);
      }

      return updated;
    });
  }

  function finishGame(allTaps) {
    setGameRunning(false);

    const first = startTime.current;

    const expected = [
      650,
      1250,
      1850,
      2450,
    ];

    let total = 0;

    allTaps.slice(0, 4).forEach((tap, index) => {
      const actual = tap - first;
      const difference = Math.abs(actual - expected[index]);

      if (difference < 180) {
        total += 25;
      } else if (difference < 350) {
        total += 15;
      } else {
        total += 5;
      }
    });

    const finalScore = Math.min(total, 100);

    setScore(finalScore);

    if (finalScore >= 85) {
      setBeatCoins((coins) => coins + 100);
      setStreak((value) => value + 1);
      setMessage("WOW! YOU CAUGHT RITA'S BEAT! 🎉");
    } else if (finalScore >= 60) {
      setBeatCoins((coins) => coins + 75);
      setMessage("GREAT JOB! KEEP THE RHYTHM! ⭐");
    } else {
      setBeatCoins((coins) => coins + 25);
      setMessage("GOOD TRY! LISTEN AND TRY AGAIN! 💪");
    }
  }

  function Home() {
    return (
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.ask}>A S K</Text>

        <Text style={styles.title}>LOVELY RITA</Text>

        <Text style={styles.subtitle}>
          LEARN • PLAY • LISTEN • THINK
        </Text>

        <Image
          source={require("./assets/rita.png")}
          style={styles.rita}
          resizeMode="contain"
        />

        <Text style={styles.description}>
          A musical adventure where curiosity becomes your
          superpower.
        </Text>

        <View style={styles.stats}>
          <Stat value={beatCoins} label="BEATCOINS" />
          <Stat value={streak} label="STREAK" />
          <Stat value="15" label="LEVEL" />
        </View>

        <Text style={styles.choose}>
          CHOOSE YOUR WORLD
        </Text>

        {WORLDS.map((world, index) => (
          <Pressable
            key={world[0]}
            style={[
              styles.world,
              { backgroundColor: world[2] },
            ]}
            onPress={() => {
              if (index === 0) {
                startBeatGame();
              }
            }}
          >
            <Text style={styles.worldIcon}>{world[1]}</Text>
            <Text style={styles.worldName}>{world[0]}</Text>
            <Text style={styles.worldDescription}>
              {world[3]}
            </Text>

            {index === 0 && (
              <Text style={styles.playHint}>
                TAP TO PLAY →
              </Text>
            )}
          </Pressable>
        ))}

        <View style={styles.soundBox}>
          <Text style={styles.soundTitle}>
            🔊 RITA SOUND TEST
          </Text>

          <Text style={styles.soundText}>
            Hear Rita's first beat!
          </Text>

          <Pressable
            style={styles.goldButton}
            onPress={playRitaBeat}
          >
            <Text style={styles.buttonText}>
              🥁 PLAY RITA'S BEAT
            </Text>
          </Pressable>
        </View>

        <Text style={styles.footer}>
          ASK LOVELY RITA • LEARN SOMETHING EVERY DAY
        </Text>
      </ScrollView>
    );
  }

  function BeatGame() {
    return (
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          onPress={() => setScreen("home")}
          style={styles.backButton}
        >
          <Text style={styles.backText}>
            ← BACK TO HOME
          </Text>
        </Pressable>

        <Text style={styles.gameLabel}>
          RITA'S MUSIC WORLD
        </Text>

        <Text style={styles.gameTitle}>
          CATCH RITA'S BEAT
        </Text>

        <Image
          source={require("./assets/rita.png")}
          style={styles.gameRita}
          resizeMode="contain"
        />

        <View style={styles.instructionBox}>
          <Text style={styles.instructionTitle}>
            🎧 LISTEN CAREFULLY!
          </Text>

          <Text style={styles.instruction}>
            Listen to Rita's rhythm, then tap the
            big drum four times to catch her beat.
          </Text>
        </View>

        {!gameRunning && !message && (
          <Pressable
            style={styles.listenButton}
            onPress={beginListening}
          >
            <Text style={styles.listenText}>
              🥁 LISTEN TO RITA
            </Text>
          </Pressable>
        )}

        {gameRunning && (
          <View style={styles.playArea}>
            <Text style={styles.tapInstruction}>
              TAP WITH THE BEAT!
            </Text>

            <View style={styles.beats}>
              {[0, 1, 2, 3].map((item) => (
                <View
                  key={item}
                  style={[
                    styles.beatDot,
                    taps.length > item &&
                      styles.beatDotActive,
                  ]}
                >
                  <Text style={styles.beatNumber}>
                    {item + 1}
                  </Text>
                </View>
              ))}
            </View>

            <Pressable
              style={styles.bigTap}
              onPress={tapBeat}
            >
              <Text style={styles.bigTapEmoji}>
                🥁
              </Text>

              <Text style={styles.bigTapText}>
                TAP!
              </Text>
            </Pressable>
          </View>
        )}

        {message !== "" && (
          <View style={styles.resultBox}>
            <Text style={styles.resultMessage}>
              {message}
            </Text>

            <Text style={styles.resultLabel}>
              YOUR SCORE
            </Text>

            <Text style={styles.resultScore}>
              {score}
            </Text>

            <Text style={styles.reward}>
              + BeatCoins earned!
            </Text>

            <Pressable
              style={styles.goldButton}
              onPress={startBeatGame}
            >
              <Text style={styles.buttonText}>
                PLAY AGAIN
              </Text>
            </Pressable>

            <Pressable
              style={styles.homeButton}
              onPress={() => setScreen("home")}
            >
              <Text style={styles.homeButtonText}>
                BACK TO HOME
              </Text>
            </Pressable>
          </View>
        )}

        <Text style={styles.gameFooter}>
          MUSIC TRAINS YOUR BRAIN. 🧠🎵
        </Text>
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {screen === "home" ? <Home /> : <BeatGame />}
    </SafeAreaView>
  );
}

function Stat({ value, label }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C.bg,
  },

  scroll: {
    padding: 20,
    paddingBottom: 50,
  },

  ask: {
    color: C.gold,
    fontSize: 15,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: 5,
    marginTop: 10,
  },

  title: {
    color: C.white,
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 3,
  },

  subtitle: {
    color: C.muted,
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 1,
  },

  rita: {
    width: 190,
    height: 230,
    alignSelf: "center",
    marginTop: 10,
  },

  description: {
    color: C.white,
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
    marginHorizontal: 20,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 18,
  },

  stat: {
    backgroundColor: C.panel,
    borderRadius: 12,
    width: "31%",
    paddingVertical: 10,
    alignItems: "center",
  },

  statValue: {
    color: C.gold,
    fontSize: 18,
    fontWeight: "900",
  },

  statLabel: {
    color: C.muted,
    fontSize: 8,
    fontWeight: "800",
    marginTop: 3,
  },

  choose: {
    color: C.white,
    fontSize: 16,
    fontWeight: "900",
    marginBottom: 12,
  },

  world: {
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    minHeight: 105,
  },

  worldIcon: {
    fontSize: 25,
  },

  worldName: {
    color: C.white,
    fontSize: 18,
    fontWeight: "900",
    marginTop: 5,
  },

  worldDescription: {
    color: C.white,
    fontSize: 10,
    marginTop: 3,
    opacity: 0.9,
  },

  playHint: {
    color: C.white,
    fontWeight: "900",
    fontSize: 10,
    marginTop: 8,
  },

  soundBox: {
    borderWidth: 1,
    borderColor: C.gold,
    borderRadius: 18,
    padding: 15,
    marginTop: 10,
    backgroundColor: C.panel,
  },

  soundTitle: {
    color: C.gold,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "900",
  },

  soundText: {
    color: C.muted,
    textAlign: "center",
    fontSize: 11,
    marginVertical: 8,
  },

  goldButton: {
    backgroundColor: C.gold,
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    color: C.bg,
    fontSize: 13,
    fontWeight: "900",
  },

  footer: {
    color: C.muted,
    fontSize: 8,
    textAlign: "center",
    marginTop: 25,
  },

  backButton: {
    paddingVertical: 10,
  },

  backText: {
    color: C.gold,
    fontSize: 12,
    fontWeight: "900",
  },

  gameLabel: {
    color: C.gold,
    textAlign: "center",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 2,
    marginTop: 8,
  },

  gameTitle: {
    color: C.white,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "900",
    marginTop: 5,
  },

  gameRita: {
    width: 150,
    height: 175,
    alignSelf: "center",
  },

  instructionBox: {
    backgroundColor: C.panel,
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
  },

  instructionTitle: {
    color: C.gold,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "900",
  },

  instruction: {
    color: C.white,
    textAlign: "center",
    fontSize: 12,
    lineHeight: 19,
    marginTop: 8,
  },

  listenButton: {
    backgroundColor: C.purple,
    borderRadius: 18,
    padding: 22,
    alignItems: "center",
  },

  listenText: {
    color: C.white,
    fontSize: 17,
    fontWeight: "900",
  },

  playArea: {
    alignItems: "center",
  },

  tapInstruction: {
    color: C.gold,
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 15,
  },

  beats: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginBottom: 25,
  },

  beatDot: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: C.panel,
    borderWidth: 2,
    borderColor: C.muted,
    justifyContent: "center",
    alignItems: "center",
  },

  beatDotActive: {
    backgroundColor: C.gold,
    borderColor: C.gold,
  },

  beatNumber: {
    color: C.white,
    fontWeight: "900",
  },

  bigTap: {
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: C.pink,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },

  bigTapEmoji: {
    fontSize: 55,
  },

  bigTapText: {
    color: C.white,
    fontSize: 35,
    fontWeight: "900",
    marginTop: 5,
  },

  resultBox: {
    backgroundColor: C.panel,
    borderRadius: 22,
    padding: 22,
    marginTop: 15,
    alignItems: "center",
  },

  resultMessage: {
    color: C.gold,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 25,
  },

  resultLabel: {
    color: C.muted,
    fontSize: 11,
    fontWeight: "800",
    marginTop: 18,
  },

  resultScore: {
    color: C.white,
    fontSize: 60,
    fontWeight: "900",
  },

  reward: {
    color: C.gold,
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 10,
  },

  homeButton: {
    padding: 15,
  },

  homeButtonText: {
    color: C.muted,
    fontSize: 11,
    fontWeight: "900",
  },

  gameFooter: {
    color: C.muted,
    textAlign: "center",
    marginTop: 25,
    fontSize: 10,
  },
});
