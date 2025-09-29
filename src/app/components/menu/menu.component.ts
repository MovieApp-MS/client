import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MenuHeaderComponent } from "./menu-header/menu-header.component";
import { MenuOptionsComponent } from "./menu-options/menu-options.component";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.css",
  imports: [MenuHeaderComponent, MenuOptionsComponent],
})
export class LeftMenu {
  public menuOpen = signal(true);

  openCloseMenu() {
    // this.menuOpen.update((x) => !x);
    // console.log("MenuOpne", this.menuOpen());
  }
}
