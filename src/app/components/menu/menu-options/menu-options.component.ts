import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonComponent } from "@tools/button/button.component";

interface menuOptions {
  title: string;
  path: string;
  icon: string;
  customStyle: string;
}

@Component({
  selector: "app-menu-options",
  imports: [ButtonComponent],
  templateUrl: "./menu-options.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuOptionsComponent {
  public items: menuOptions[] = [
    {
      title: "favorites",
      path: "/dashboard/favorites",
      icon: "book",
      customStyle: "w-xs h-18",
    },
    {
      title: "search",
      path: "/dashboard/search",
      icon: "search",
      customStyle: "w-xs h-18",
    },
  ];
}
