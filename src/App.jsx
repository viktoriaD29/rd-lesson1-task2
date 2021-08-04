import React from 'react'
import Header from './Header'
import { userData, UserContext } from './userData';

class App extends React.Component {
  state = {
    userData: userData,
  };

  render() {
    return (
      <div className="page">
        <UserContext.Provider value={this.state}>
          <Header></Header>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App