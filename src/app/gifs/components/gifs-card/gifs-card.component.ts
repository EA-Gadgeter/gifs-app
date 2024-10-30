import { Component, Input } from '@angular/core';

import type { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent {
  @Input({ required: true })
  public gif!: Gif;
}
