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
      title: "Favorites",
      path: "/dashboard/favorites",
      icon: "favorite",
      customStyle: "w-xs h-18",
    },
    {
      title: "Search",
      path: "/dashboard/search",
      icon: "search",
      customStyle: "w-xs h-18",
    },
    {
      title: "Recommend",
      path: "/dashboard/recommend",
      icon: "thumb_up",
      customStyle: "w-xs h-18",
    },
  ];
}
