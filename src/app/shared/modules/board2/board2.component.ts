import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleshipSystemService } from '../../services/battleship-system.service';
import { SinglePlayerService } from '../../services/single-player.service';

@Component({
  selector: 'app-board2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board2.component.html',
  styleUrls: ['./board2.component.scss']
})
export class Board2Component {
  max: number = 10;
  xmax = new Array(this.max+1);
  ymax = new Array(this.max+1);

  _battleshipSystemService = inject(BattleshipSystemService);
  _singlePlayerService = inject(SinglePlayerService);

  mockPos: any =[]
  check(i:any,j:any, id:any){
    let posData= "pos"+id+i+j;
    let msjHit = "You have hitted a ship";
    let msjMiss = "You have missed";
    let msjSunk = "You have sunked a ship";
    let conMsj = document.getElementById("status");
    let shipPart:string;
    
    console.log(j,i);
    console.log(this._singlePlayerService.cpu.matrixPos , "check");
    console.log(this._singlePlayerService.cpu.matrixPos[j][i]);
    if(this._singlePlayerService.cpu.matrixPos[j][i]!=""){
      
      shipPart=this._singlePlayerService.cpu.matrixPos[j][i];
      this._singlePlayerService.cpu.matrixPos[j][i]="";
      
      if(i != 0 && j !=0 && (i+j)%2 == 0){
          this._singlePlayerService.mapBase2[j][i].setAttribute("style", "background-color:#0084bb");
      }
      else if(i != 0 && j !=0 && (i+j)%2 == 1){
        this._singlePlayerService.mapBase2[j][i].setAttribute("style", "background-color:#00a1e4");
      }
    }
    else{
      conMsj!.innerText = msjMiss;
      conMsj!.setAttribute("style", "color:red");
    }
  
   }
  
  reset(){

    this._singlePlayerService.temporalPos = this._battleshipSystemService.inicializeMatrix( 6, 2, 0 );
    this._singlePlayerService.cpu.matrixPos = this._battleshipSystemService.inicializeMatrixText( 11, 11, 0 );
    this._singlePlayerService.cpu.s2pos = this._battleshipSystemService.inicializeMatrix( 4, 2, 0 );
    this._singlePlayerService.cpu.s3pos = this._battleshipSystemService.inicializeMatrix( 2, 2, 0 );
    this._singlePlayerService.cpu.s4pos = this._battleshipSystemService.inicializeVector( 3);
    this._singlePlayerService.cpu.s4pos = this._battleshipSystemService.inicializeVector( 3);
    this._singlePlayerService.cpu.s2= 0;
    this._singlePlayerService.cpu.s3= 0;
    this._singlePlayerService.cpu.s4= 0;
    this._singlePlayerService.cpu.s6= 0;
   
    
    this._singlePlayerService.mapBase2=[];
    for(let j=1; j<11; j++){
      this._singlePlayerService.mapBase2[j]= [];
      for(let i=1; i<11; i++){
        this._singlePlayerService.mapBase2[j][i]=document.getElementById("pos2"+j+i);
        if(i != 0 && j !=0 && (i+j)%2 == 0){
          this._singlePlayerService.mapBase2[j][i].setAttribute("style", "background-color:#0084bb");
        }
        else if(i != 0 && j !=0 && (i+j)%2 == 1){
          this._singlePlayerService.mapBase2[j][i].setAttribute("style", "background-color:#00a1e4");
        }
      }
    }
    console.log(this._singlePlayerService.mapBase2)
  }
  

  showShips(){
    for(let j=1; j<11; j++){
      for(let i=1; i<11; i++){
        if(this._singlePlayerService.cpu.matrixPos[j][i]!=""){
          this._singlePlayerService.mapBase2[j][i].setAttribute("style", "background-color:gray");
        }
      }
    }
  }

  inicialize(){
    
    
    this._singlePlayerService.positionAssignment(2, this._singlePlayerService.cpu.matrixPos);
    this._singlePlayerService.positionAssignment(2, this._singlePlayerService.cpu.matrixPos);
    this._singlePlayerService.positionAssignment(2, this._singlePlayerService.cpu.matrixPos);
    this._singlePlayerService.positionAssignment(2, this._singlePlayerService.cpu.matrixPos);
    this._singlePlayerService.positionAssignment(3, this._singlePlayerService.cpu.matrixPos);
    this._singlePlayerService.positionAssignment(3, this._singlePlayerService.cpu.matrixPos);
    this._singlePlayerService.positionAssignment(4, this._singlePlayerService.cpu.matrixPos);
    this._singlePlayerService.positionAssignment(6, this._singlePlayerService.cpu.matrixPos);
    console.log(this._singlePlayerService.cpu.matrixPos);
    this.showShips();
    
  }


  ngOnInit(): void {
    this._singlePlayerService.temporalPos = this._battleshipSystemService.inicializeMatrix( 6, 2, 0 );
    this._singlePlayerService.cpu.matrixPos = this._battleshipSystemService.inicializeMatrixText( 11, 11, 0 );
    this._singlePlayerService.cpu.s2pos = this._battleshipSystemService.inicializeMatrix( 4, 2, 0 );
    this._singlePlayerService.cpu.s3pos = this._battleshipSystemService.inicializeMatrix( 2, 2, 0 );
    this._singlePlayerService.cpu.s4pos = this._battleshipSystemService.inicializeVector( 3);
    this._singlePlayerService.cpu.s4pos = this._battleshipSystemService.inicializeVector( 3);
    console.log(this._singlePlayerService.cpu.matrixPos);
    


  }

  ngAfterViewInit():void{
    this._singlePlayerService.mapBase1=[];
    for(let j=1; j<11; j++){
      this._singlePlayerService.mapBase1[j]= [];
      for(let i=1; i<11; i++){
        this._singlePlayerService.mapBase1[j][i]=document.getElementById("pos1"+j+i);
      }
    }
    this._singlePlayerService.mapBase2=[];
    for(let j=1; j<11; j++){
      this._singlePlayerService.mapBase2[j]= [];
      for(let i=1; i<11; i++){
        this._singlePlayerService.mapBase2[j][i]=document.getElementById("pos2"+j+i);
      }
    }
  }
  
}
