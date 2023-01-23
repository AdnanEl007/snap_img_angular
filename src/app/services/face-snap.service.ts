import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService{
    faceSnaps: FaceSnap[]= [
        {
          id: 1,
          title:"Tedy",
          worth: 42.55,
          imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          description:"Don't know where he is!",
          creatDate: new Date(),
          snaps: 190,
          location: "Toulouse"
        },
        {
          id: 2,
          title: "Music Day",
          worth: 56.473,
          imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/27/street-5183453_960_720.jpg',
          description: "A man with his guitar celebrating",
          creatDate: new Date(),
          snaps: 40,
          location: "Land of Music"
        },
        {
          id: 3,
          title: "Discover",
          worth: 33.41,
          imageUrl: 'https://cdn.pixabay.com/photo/2020/06/14/07/10/prague-5296812_960_720.jpg',
          description: "Discovering with city with old friend ( his dog )",
          creatDate: new Date(),
          snaps: 98
        },
      ];

      getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap =>faceSnap.id === faceSnapId);
        if(!faceSnap){
          throw new Error('fFaceSnap not found!!');
        }else{
          return faceSnap;
        }
      }


      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }
}