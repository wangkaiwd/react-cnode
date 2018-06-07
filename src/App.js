import React, { Component } from 'react';
import Title from '@/components/layout/title'
import List from '@/components/list'
import Footer from '@/components/layout/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Title
          name="首页"
        />
        <div className="category" style={{ marginTop: '100px' }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
