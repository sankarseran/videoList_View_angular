import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// material
import { MatInputModule, MatIconModule, MatCardModule, MatPaginatorModule, MatProgressBarModule } from '@angular/material';
// sankar want to change this adding this line for testing..
// videogular
// import { VgCoreModule } from 'videogular2/core';
// import { VgOverlayPlayModule } from 'videogular2/overlay-play';
// import { VgBufferingModule } from 'videogular2/buffering';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ChapterService } from './shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    VideoListComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [ChapterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
