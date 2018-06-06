import { Carousel, WingBlank } from 'antd-mobile';
import { fetchTopicIndex } from '@/http/api'
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    fetchTopicIndex({ page: 10, tab: 'ask', limit: 10 }, res => {
      console.log(res);
    });
  }
  render() {
    return (
      <div>
        App
      </div>
    );
  }
}

export default App
