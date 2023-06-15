import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  standalone:true,
 imports:[]
})
export class EditorComponent implements OnInit {

  fileData: string ='';
  authorName: string = '';
  storyText: string = '';

  constructor(public storyService: StoryService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const file = input.files[0];
      const fileReader = new FileReader();
      fileReader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          this.fileData = e.target.result as string;
        }
      };
      fileReader.readAsDataURL(file);
    }
  }
  

  
  submitStory() {
    this.storyService.updateStoryData({
      fileData: this.fileData,
      authorName: this.authorName,
      storyText: this.storyText,
    });
  }

  ngOnInit() {
  }

}