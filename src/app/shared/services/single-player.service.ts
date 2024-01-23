import { Injectable, inject } from '@angular/core';
import { PlayerParam } from '../interfaces/player-param';
import { BattleshipSystemService } from './battleship-system.service';

@Injectable({
  providedIn: 'root'
})
export class SinglePlayerService {

  constructor() { }

  _battleshipSystemService = inject(BattleshipSystemService);

  public cpu: PlayerParam={
    id : 2,
    matrixPos:[],
    anyShip: true,
    turn: false,
    s2: 0,
    s3: 0, 
    s4: 0,
    s6: 0,
    s2max: 4,
    s3max: 2,
    s4max: 1,
    s6max: 1,
    s2pos:[],
    s3pos:[],
    s4pos:[],
    s6pos:[],
    
  
  }

  mapBase1:any[]=[];
  mapBase2:any[]=[];
  VP1= false;
  VP2= false;
  public  temporalPos:number[][]=[];
  pos:any =[12, 12, 0.6 ]
  
  

  positionAssignment( shipType: number, matrixPosition:any[] ){
    this.pos =[12, 12, 0.6 ]
    this.temporalPos = this._battleshipSystemService.inicializeMatrix( 6, 2, 0 );
    
    while(((this.pos[0]+shipType>11 && this.pos[2]<0.5) || (this.pos[1]+shipType>11 && this.pos[2]>=0.5))){
      
      this.pos=this._battleshipSystemService.getRamdomPos();
      
      for (let i=0; i<shipType; i++){
        if(this.pos[2]<0.5 ){
          this.temporalPos[i][0] = this.pos[0]+i;
          this.temporalPos[i][1] = this.pos[1];
        }
        else{
          this.temporalPos[i][0] = this.pos[0];
          this.temporalPos[i][1] = this.pos[1]+i;
        }
      }
     

      if(this.pos[0]+shipType>11 && this.pos[2]<0.5 || this.pos[1]+shipType>11 && this.pos[2]>=0.5){
        this.pos =[12, 12, 0.6 ]
        this.temporalPos = this._battleshipSystemService.inicializeMatrix( 6, 2, 0 );
      }
      else {
        for (let i=0; i<shipType; i++){
        
          if (this.cpu.matrixPos[this.temporalPos[i][1]][ this.temporalPos[i][0]]!=""   ) {
            this.pos =[12, 12, 0.6 ]
            this.temporalPos = this._battleshipSystemService.inicializeMatrix( 6, 2, 0 );
          }
        }
      }
      
      
    }
   
    for (let i=0; i<shipType; i++){
      if( shipType == 2 && this.cpu.s2<this.cpu.s2max ){
        this.cpu.matrixPos[this.temporalPos[i][1]][ this.temporalPos[i][0]]="SV2"+this.cpu.s2;
      }
      if( shipType == 3 && this.cpu.s3<this.cpu.s3max ){
        this.cpu.matrixPos[this.temporalPos[i][1]][ this.temporalPos[i][0]]="SV3"+this.cpu.s3;
      }
      if( shipType == 4 && this.cpu.s4<this.cpu.s4max ){
        this.cpu.matrixPos[this.temporalPos[i][1]][ this.temporalPos[i][0]]="SV4";
      }
      if( shipType == 6 && this.cpu.s6<this.cpu.s6max ){
        this.cpu.matrixPos[this.temporalPos[i][1]][ this.temporalPos[i][0]]="SV6";
      }
    }

    if(shipType == 2 && this.cpu.s2<this.cpu.s2max){
      this.cpu.s2++;
    }
    else if (shipType == 3 && this.cpu.s3<this.cpu.s3max){
      this.cpu.s3++;
    }
    else if (shipType == 4 && this.cpu.s4<this.cpu.s4max){
      this.cpu.s4++;
    }
    else if (shipType == 6 && this.cpu.s6<this.cpu.s6max){
      this.cpu.s6++;
    }
    this.temporalPos = this._battleshipSystemService.inicializeMatrix( 6, 2, 0 );
    
  }

}
