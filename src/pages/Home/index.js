import React from 'react'
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
} from '@ionic/react'

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='ion-padding'>
          <p>JavaScriptの演習資料です。</p>
          <p>
            <a href='https://github.com/likr/js-training'>リポジトリ</a>
            を読んで演習を進めましょう。
          </p>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Home
