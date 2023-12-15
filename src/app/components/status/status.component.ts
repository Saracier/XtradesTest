import { Component, Input } from '@angular/core';
import { IUserData } from 'src/app/interfaces/IUserData';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
  @Input() user!: IUserData;
}
