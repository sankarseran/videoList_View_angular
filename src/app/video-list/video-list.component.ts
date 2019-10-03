import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../shared/shared.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  chapters: any[];

  constructor(private chapterService: ChapterService) { }

  ngOnInit() {
    this.getChapters();
  }

  getChapters() {
    this.chapters = [];
    this.chapterService.getDataList().then((result) => {
      result.courseDetails.userModuleDetailsV2.forEach(lesson => {
        // console.log(lesson.userLessonDetails[0].userChapterDetails);
        if (lesson && lesson.userLessonDetails)  {
          this.chapters.push(...lesson.userLessonDetails[0].userChapterDetails);
        }
      });
      console.log('this.chapters', this.chapters);
      this.openChapter(this.chapters[0]);
    }).catch((err) => {
      console.log(err);
    });
  }

  openChapter(chapter) {
    this.chapterService.emitChapterEvent(chapter);
  }
}
