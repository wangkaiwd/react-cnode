import React, { Component } from 'react';
import List from '@/components/list'
import TopTabs from '@/components/layout/topTabs'
import Footer from '@/components/layout/footer'
const tabConfig = [
  { title: '全部', content: 'tab1', component: List },
  { title: '精华', content: 'tab2' },
  { title: '分享', content: 'tab3' },
  { title: '问答', content: 'tab4' },
  { title: '招聘', content: 'tab5' }
]
class All extends Component {
  constructor(props) {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>

        <Footer />
      </div>
    );
  }
}

export default All;
