import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { FirebaseApp } from 'angularfire2';
import { Observable } from 'rxjs';
declare var $: any;

export class Hero {
  title: string;
  link: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  url: any;
  image: any;
  folder = 'fsl-io';
  files: File;
  filesToUpload: Array<File>;
  hero: Hero={
    title: null,
    link:null
  };

  constructor( @Inject(FirebaseApp) firebaseApp: any) {
    const storageRef = firebase.storage().ref().child('fsl-io/abc.png');
    storageRef.getDownloadURL().then(url => {
      this.image = url;

      console.log(url);
    });
  }
  ngOnInit() {
    //$.getScript('https://www.gstatic.com/firebasejs/4.0.0/firebase.js');

  }



  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.files = fileInput.target.files[0];
    console.log(this.files);

    let storageRef = firebase.storage().ref();

    let path = `/${this.folder}/${this.files.name}`;
    let iRef = storageRef.child(path);
    iRef.put(this.files).then((snapshot) => {
      //this.image = selectedFile.name;
      //this.url = path;
      this.url = snapshot.downloadURL;
      console.log(this.url);
    });
  }

  onSubmit(f: NgForm) {
    console.log(f.value);

    this.hero.title = f.value.title;
    this.hero.link=this.url;

    console.log(this.hero);
    // Create root ref


  }

}
