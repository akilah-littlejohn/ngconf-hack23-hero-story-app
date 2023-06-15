import { Injectable, signal } from '@angular/core';

@Injectable()
export class StoryService {
  constructor() {}
  storyData = signal<any>({});
  currentStoryData = this.storyData;

  updateStoryData(data: any) {
    this.storyData.set(data);
  }
}
