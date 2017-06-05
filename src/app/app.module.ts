import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**Import component and module of firebase */
import { AngularFireModule} from 'angularfire2';

import { AppComponent } from './app.component';


export const firebaseConfig = {
  apiKey: "AIzaSyBdgpxShqNc5-cwvu9MPYk0b4ejHpSNnKY",
  authDomain: "fsl-io.firebaseapp.com",
  databaseURL: "https://fsl-io.firebaseio.com",
  projectId: "fsl-io",
  storageBucket: "fsl-io.appspot.com",
  messagingSenderId: "108922144834"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
