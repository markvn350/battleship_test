import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from "../../shared/modules/board/board.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    imports: [CommonModule, BoardComponent]
})
export class LandingComponent {

}
