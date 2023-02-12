import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonHeader,
  IonLabel,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, invertMode, barbell, trophy } from 'ionicons/icons';
import AchievementsPage from './pages/Achievements/Avhievements';
import Meditate from './pages/Meditate/Meditate';
import Summary from './pages/Summary/Summary';
import HomePage from './pages/HomePage/HomePage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Global CSS */
import './global.scss';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
            <Redirect exact path="/" to="/home" />
            {/*
            Use the render method to reduce the number of renders your component will have due to a route change.

            Use the component prop when your component depends on the RouterComponentProps passed in automatically.
          */}
            <Route path="/home" render={() => <HomePage />} exact={true} />
            <Route path="/summary" render={() => <Summary />} exact={true} />
            <Route path="/meditate" render={() => <Meditate />} exact={true} />
            <Route path="/achievements" render={() => <AchievementsPage />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
          </IonTabButton>

          <IonTabButton tab="mediate" href="/meditate">
            <IonIcon icon={invertMode} />
          </IonTabButton>

          <IonTabButton tab="summary" href="/summary">
            <IonIcon icon={barbell} />
          </IonTabButton>

          <IonTabButton tab="achievements" href="/achievements">
            <IonIcon icon={trophy} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
