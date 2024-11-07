import { Component, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';  
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule } from '@angular/common';
import { FaceSnapDSI22Component } from "../face-snap-dsi22/face-snap-dsi22.component";

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [CommonModule, FaceSnapDSI22Component],
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.faceSnaps;
  }
}
