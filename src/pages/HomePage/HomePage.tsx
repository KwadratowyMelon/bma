import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  IonItem, IonLabel, IonList, IonProgressBar  } from '@ionic/react';
import './HomePage.css';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const HomePage: React.FC = () => {
  const testData = [
    { name: "Obejrzyj odcinki serialu",bgcolor: "var(--ion-color-primary-tint)", currentValue: 5, maxValue: 12 },
    { name: "Medytuj 3 razy",bgcolor: "var(--ion-color-primary-tint)", currentValue: 1, maxValue: 3 },
    { name: "Zjedz 2 burgery",bgcolor: "var(--ion-color-primary-tint)", currentValue: 1, maxValue: 2 },
  ];

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="homepage-header">
          <IonTitle>Bad Motivation App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="homepage-container">
          <div className="homepage-daily-tasks">
            <IonLabel className='daily-tasks-title'>Today's tasks</IonLabel>
            <IonList inset={true}>
              {testData.map((item, idx) => (
                <IonItem>
                  <IonLabel>{item.name}</IonLabel>
                  <ProgressBar key={idx} bgcolor={item.bgcolor} currentValue={item.currentValue} maxValue={item.maxValue}/>
                </IonItem>
              ))}
            </IonList>
          </div>
        </div>     
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
