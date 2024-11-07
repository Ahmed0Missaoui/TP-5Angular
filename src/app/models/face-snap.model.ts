// src/app/models/face-snap.model.ts
export class FaceSnap {
    constructor(
      public title: string,
      public description: string,
      public createdate: Date,
      public imageUrl: string,
      public snaps: number
    ) {}
  }
  