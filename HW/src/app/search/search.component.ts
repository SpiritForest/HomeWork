import { Component, OnInit } from '@angular/core';
import { GetVideoService } from '../get-video.service';
 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public getVideoService: GetVideoService) { }
  
  searchWord: string;
  response: any;
  isResult: boolean = false;

  search(word) {
    this.getVideoService.getLink(word)
    .subscribe(res=> {
      this.response = this.getVideoService.getThumbnails(res)
    });
  }

  onClick() {
    this.search(this.searchWord);
    this.isResult = true;
  }

  checkStatus() {
    if (!this.searchWord) {
      this.getVideoService.getPopular()
      .subscribe(res => {
        this.response = this.getVideoService.getThumbnails(res);
      });
    }
  }

  ngOnInit() {
    this.checkStatus()
  }

}
