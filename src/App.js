import Landing from './Components/Landing/Landing'
import { Switch, Route } from 'react-router-dom';
import SimpleReactLightbox from "simple-react-lightbox";
import Footer from './Components/Navigation/Footer'

function App() {
  return (
    <>
      <SimpleReactLightbox>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </SimpleReactLightbox>
      <Footer />
    </>
  );
}

export default App;
