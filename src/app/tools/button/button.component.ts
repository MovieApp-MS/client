import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-button",
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() title = "";

  @Input() icon = "";

  @Input() customStyle = "";

  @Input() path: string = "";
}
