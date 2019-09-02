import React               from 'react'
import ReactDOM            from 'react-dom'
import { Provider }        from 'react-redux'
import configureStore      from 'core/store/configureStore'
import App                 from 'containers/App'
import drizzleOptions      from 'configs/config-drizzle'
import { DrizzleProvider, DrizzleContext } from 'drizzle-react'
import { Drizzle } from "drizzle";
import {
  LoadingContainer
} from "drizzle-react-components";

const store = configureStore()
const drizzle = new Drizzle(drizzleOptions, store)

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <Provider store={store}>
    <LoadingContainer>
      <App />
    </LoadingContainer>
    </Provider>
  </DrizzleContext.Provider>,
  document.getElementById('root')
)
