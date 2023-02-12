import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText, IonButton} from '@ionic/react';
import './Meditate.css';

const Meditate: React.FC = () => {
  const quoteData = {
    image: "https://docs-demo.ionic.io/assets/madison.jpg",
    imageAlt: "The Wisconsin State Capitol building in Madison, WI at night",
    text: "be rich",
    author: "Mahatma Ghandi"
  }

  return (
    <IonPage>
      <IonHeader className="meditate-header">
        <IonToolbar>
          <IonTitle>Meditate</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="quote-container">
          <IonImg 
            src={quoteData.image}
            alt={quoteData.imageAlt}>
          </IonImg>
          <IonText>
            <span>" {quoteData.text} "</span>
            <span>~ {quoteData.author}</span>
          </IonText>
        </div>
        <IonButton>
          Odpręż się
        </IonButton>
       

      </IonContent>
    </IonPage>
  );
};

export default Meditate;
