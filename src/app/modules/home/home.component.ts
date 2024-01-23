import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../shared/modules/footer/footer.component";
import { HeaderComponent } from "../../shared/modules/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, FooterComponent, HeaderComponent, RouterOutlet]
})
export class HomeComponent {

}
