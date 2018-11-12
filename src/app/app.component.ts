import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-firebase';
  constructor(private db: AngularFirestore, private auth :AngularFireAuth) {
    this.signIn();
  }

  signIn(){
    this.auth.auth.signInWithEmailAndPassword("vijay@gmail.com","123456").then((user) => {
      this.title= user.user.email;
      console.log("Login Successful");
    })
  }


}
