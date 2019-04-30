import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface videoObject {
  title: string,
  pictureLink: string,
  videoLink: any,
  published: any,
}

@Injectable({
  providedIn: 'root'
})
export class GetVideoService {

  constructor(private http: HttpClient) { }

  getLink(querry: any): Observable<any> {
    const API_KEY = 'AIzaSyBOZdJNexb1Zjqtmlf96Wm8HINM-T6IPAg';
    const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=20&q=${querry}`;

    return this.http.get(URL);
  }

  getThumbnails(data) {
    const videosArray = [];
    data.items.forEach(el => {
      const obj: videoObject = {
        title: el.snippet.title,
        pictureLink: el.snippet.thumbnails.high.url,
        videoLink: `https://www.youtube.com/watch?v=${el.id.videoId}`,
        published: el.snippet.publishedAt
       }
       videosArray.push(obj);
    })
    return videosArray;
  }

  getPopular() {
   return this.http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=9&chart=mostPopular&regionCode=by&key=AIzaSyBOZdJNexb1Zjqtmlf96Wm8HINM-T6IPAg')
  }
}
