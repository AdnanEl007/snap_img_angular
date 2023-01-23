export class FaceSnap{
    id!: number;
    title!: string;
    worth!: number;
    imageUrl!: string;
    description!: string;
    creatDate!: Date;
    snaps!: number;
    location?: string;
    /*constructor(public title:string, 
        public imageUrl: string, 
        public description: string, 
        public creatDate: Date, 
        public snaps: number,
        public location?: string){
        /*this.title= title;
        this.imageUrl= imageUrl;
        this.description= description;
        this.createDate= creatDate;
        this.snaps= snaps;*/ // all what in comments rempalced by adding public in each object
    }
