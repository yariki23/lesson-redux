import React from 'react';
import ThemeButton from './ThemeButton';
import { themes, ThemeContext } from './themes';

class App extends React.Component {
  state = {
    theme: themes.light,
  };

  toggleTheme = () => {
    const newTheme = this.state.theme === themes.dark ? themes.light : themes.dark;
    this.setState({
      theme: newTheme,
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemeButton onClick={this.toggleTheme}>Dynamic Theme</ThemeButton>
        </ThemeContext.Provider>
        <ThemeButton onClick={this.toggleTheme}>Default Theme</ThemeButton>
      </div>
    );
  }
}

export default App;
