import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TimerProps {
  onTimeEnd: () => void; // Callback function to handle what happens when time ends
  initialTime?: number; // Optionally, you can allow the initial time to be passed as a prop
}

const Timer: React.FC<TimerProps> = ({ onTimeEnd, initialTime = 5}) => {
  const [time, setTime] = useState<number>(initialTime);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    start(); // Automatically start the countdown on mount

    // Clean up interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (time === 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      // Call the prop function when time ends
      onTimeEnd();
    }
  }, [time, onTimeEnd]);

  const start = () => {
    if (time > 0) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }
  };

  return (
    <View style={styles.circle}>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D882D',
  },
  timeText: {
    fontSize: 20,
    color: 'white',
  },
});

export default Timer;
