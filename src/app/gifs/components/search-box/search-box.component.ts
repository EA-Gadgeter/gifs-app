import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: "gifs-search-box",
  templateUrl: "search-box.component.html"
})
export class SearchBoxComponent {
  @ViewChild("txtTagInput")
  private tagInput!: ElementRef<HTMLInputElement>;

  public searchTag() {
    const newTag = this.tagInput.nativeElement.value;
  }
}
