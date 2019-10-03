import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../shared/shared.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  selectedChapter: any;

  constructor(private chapterService: ChapterService) { }

  ngOnInit() {
    this.chapterService.getChapterEmitter().subscribe((result) => {
      this.selectedChapter = null;
      setTimeout(() => {
        this.selectedChapter = result;
      }, 500);
      console.log('this.selectedChapter', this.selectedChapter);
    });
  }

}
