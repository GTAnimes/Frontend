import { View, Text, StyleSheet } from 'react-native';

type LineTextProps = {
  text: string;
};

const LineText: React.FC<LineTextProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#000',
  },
  text: {
    marginHorizontal: 10,
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
  },
});

export default LineText;