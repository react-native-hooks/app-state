# @rnhooks/app-state [![Build Status](https://travis-ci.com/react-native-hooks/app-state.svg?branch=master)](https://travis-ci.com/react-native-hooks/app-state) [![Maintainability](https://api.codeclimate.com/v1/badges/38b8a5ea908ee84db165/maintainability)](https://codeclimate.com/github/react-native-hooks/dimensions/maintainability) <a href="https://github.com/pritishvaidya/react-native-hooks/app-state/blob/master/README.md"><img src="https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg" alt="module formats: umd, cjs, esm"></a>

> React Native hook for App State

```
import useAppState from '@rnhooks/app-state';

function App() {
  const { status, foreground } = useAppState();
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{`App State: ${status}`}</Text>
      <Text style={styles.type}>{`Foreground: ${foreground}`}</Text>
    </View>
  );
}
```

### Output
| Name  | Type  | Default | Description |
| :------------ |---------------:| :---------------| :-----|
| status | `active \ background \ inactive` | `AppState.currentState` | Current App Status |
| foreground | boolean | `true` | Is foreground or not |

## Contribution
- [@pritishvaidya](mailto:pritishvaidya94@gmail.com) The main author.


## Questions

Feel free to [contact me](mailto:pritishvaidya94@gmail.com) or [create an issue](https://github.com/react-native-hooks/app-state/issues/new)
