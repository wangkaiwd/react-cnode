import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
// const tabs = [
//   { title: 'First Tab' },
//   { title: 'Second Tab' },
//   { title: 'Third Tab' },
// ];

const TopTabs = (props) => {
  // 获取tab数组
  const getTabs = () => {
    const tabs = [];
    props.tabConfig.map(item => {
      const obj = {}
      obj.title = item.title
      tabs.push(obj)
    })
    return tabs;
  }
  return (
    <div>
      <StickyContainer style={{ marginTop: '1.2rem' }}>
        <Tabs tabs={getTabs()}
          initalPage={'t2'}
          renderTabBar={renderTabBar}
        >
          {
            props.tabConfig.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                {item.component ? <item.component /> : item.content}
                {/* {item.content} */}
              </div>
            ))
          }
        </Tabs>
      </StickyContainer>
    </div>
  );
}
export default TopTabs;
