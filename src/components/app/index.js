import React, { Component } from 'react'

import { WizardRouter } from '../wizard-router'
import { PathIndicator } from '../path-indicator'
import { Bicycle } from '../bicycle'

import { stateNames } from '../../machines/wizard/states'

const { BICYCLE } = stateNames

export class App extends Component {
  render() {
    return (
      <>
        <header className="app-Header" />
        <WizardRouter>
          <Bicycle path={BICYCLE} />
        </WizardRouter>
        <aside className="app-Notes">
          <PathIndicator />
        </aside>
        <footer className="app-Footer" />
      </>
    )
  }
}
