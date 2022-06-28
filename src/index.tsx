import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import ruDateLocale from 'date-fns/locale/ru'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { store } from './models'
import GlobalErrorBoundary from 'components/GlobalErrorBoundary'
import { initSentry, sendEvent } from 'shared/helpers/tracking'
import { bindWorkerToStore } from 'worker'
import { applyClientPatch, resetData } from 'models/data'
import { AppThemeProvider } from './AppThemeProvider'
import { StyledEngineProvider } from '@mui/material/styles'
import { appVersion } from 'shared/config'
import { TDiff } from 'models/diff'

initSentry()
bindWorkerToStore(store.dispatch)
createZerroInstance(store)

const container = document.getElementById('root')
if (!container) throw new Error('No root container')
const root = createRoot(container)

root.render(
  <GlobalErrorBoundary>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          locale={ruDateLocale}
        >
          <AppThemeProvider>
            <App />
          </AppThemeProvider>
        </LocalizationProvider>
      </Provider>
    </StyledEngineProvider>
  </GlobalErrorBoundary>
)

// Register service worker fot app to work offline.
// Learn more here http://bit.ly/CRA-PWA
serviceWorkerRegistration.register({
  onUpdate: (registration: ServiceWorkerRegistration) => {
    registration.unregister().then(() => {
      window.location.reload()
    })
  },
  onSuccess: (registration: ServiceWorkerRegistration) => {
    sendEvent('Version Update: ' + appVersion)
  },
})

/** `zerro` can be used in console to access state and modify data */
function createZerroInstance(s: typeof store) {
  // @ts-ignore
  window.zerro = {
    get state() {
      return s.getState()
    },
    env: process.env,
    logsShow: false,
    logs: {},
    resetData: () => s.dispatch(resetData()),
    applyClientPatch: (patch: TDiff) => s.dispatch(applyClientPatch(patch)),
  }
}
