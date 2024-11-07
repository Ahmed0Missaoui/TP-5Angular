import { Component,OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-face-snap-dsi22',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap-dsi22.component.html',
  styleUrls: ['./face-snap-dsi22.component.scss'] 
})
export class FaceSnapDSI22Component  implements OnInit{
  @Input() faceSnap!: FaceSnap; 
  buttonText!: string;




ngOnInit(){
  this.buttonText = 'Oh snap!';
}
onSnap(){
 if(this.buttonText==='Oh snap!'){
  this.faceSnap.snaps++;
  this.buttonText='Oops,unSnap!';

 }else{
     this.faceSnap.snaps--;
    this.buttonText='Oh Snap!';
 }
}
}
