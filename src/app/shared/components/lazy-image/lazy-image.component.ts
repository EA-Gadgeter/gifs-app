import { Component, Input } from '@angular/core';

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {
  @Input({ required: true })
  public url!: string;

  @Input()
  public alt: string = "No alt available";

  public hasLoaded: boolean = false;

  public onLoad() {
    this.hasLoaded = true
  }
}
