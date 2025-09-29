import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LeftMenu } from '../../components/menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { SnackbarMessageComponent } from '@tools/services/snackbar-message.component';

@Component({
  selector: 'app-dashboard',
  imports: [LeftMenu, RouterOutlet],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
