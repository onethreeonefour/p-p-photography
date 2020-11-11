import Landing from './Components/Landing/Landing'
import { Switch, Route } from 'react-router-dom';
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <>
      <SimpleReactLightbox>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </SimpleReactLightbox>
    </>
  );
}

export default App;
