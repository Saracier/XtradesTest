import { Component, Input } from '@angular/core';
import { IUserData } from 'src/app/interfaces/IUserData';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  @Input() place: string = '';
  @Input() user!: IUserData;
}
