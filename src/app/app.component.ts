import { Component } from '@angular/core';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { CommonModule } from '@angular/common';
import { FaceSnapDSI22Component  } from './face-snap-dsi22/face-snap-dsi22.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapListComponent, CommonModule, FaceSnapDSI22Component, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
