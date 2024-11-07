import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model'; 

@Injectable({
  providedIn: 'root'  
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      title: 'Archibald',
      description: 'Mon meilleur ami tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdate: new Date(),
      snaps: 0
    },
    {
      title: 'Three Rook Mountain',
      description: 'Endroit magnifique',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Souithen_Tor.jpg/2880px-Three_Rock_Mountain_',
      createdate: new Date(),
      snaps: 0
    },
    {
      title: 'Un bon repas',
      description: 'Yummm c bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdate: new Date(),
      snaps: 0
    }
  ];
}
