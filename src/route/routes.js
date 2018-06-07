import { Route, hashHistory, Redirect, IndexRoute } from 'react-router'
import App from '@/App'
import All from '@/views/all'
const routeConfig = (
  <Route path="/" component={App}>
    <IndexRoute component={All} />
    <Route path="/all" component={All}></Route>
  </Route>
)
export default routeConfig;
