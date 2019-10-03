import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ChapterService {

    chapter: EventEmitter<any> = new EventEmitter();

    constructor(private http: HttpClient) { }

    getDataList(): Promise<any> {
        const headers = new Headers();
        headers.append('accessToken', environment.accessCode);
        return this.http.post(environment.basePath, { accessToken: environment.accessCode }).toPromise();
    }

    // Chapter change emitter and get event.
    emitChapterEvent(chapter) {
        this.chapter.emit(chapter);
    }

    getChapterEmitter() {
        return this.chapter;
    }

}
