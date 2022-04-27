import ReactDOM from 'react-dom';
import { AppProviders } from 'providers/AppProviders';
import { App } from './app/App';
import * as serviceWorker from './serviceWorker';
import Store from './store/Store'

import { Provider } from "react-redux";
 
ReactDOM.render(
  <Provider store={Store}>
    <AppProviders>
      <App />
    </AppProviders>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
