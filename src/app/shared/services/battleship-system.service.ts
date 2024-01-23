import { Injectable, inject } from '@angular/core';
import { SinglePlayerService } from './single-player.service';

@Injectable({
  providedIn: 'root'
})
export class BattleshipSystemService {

  constructor() { }



  getRamdomPos(){
    let pos = [];
    pos[0]= Math.floor(Math.random()*9)+1; //Random X position
    pos[1]=Math.floor(Math.random()*9)+1; //Random Y position
    pos[2]=Math.random();  //Random inclination position
    return pos;
  }

  inicializeMatrix( a: number, b: number, min:number){
    
    let matrix:any[] = [];
    
    for(let j=min; j<a; j++){
      matrix[j]= [];
      for(let i=min; i<b; i++){
        matrix[j][i]=0;
      }
    }
    return matrix;
  }

  inicializeMatrixText( a: number, b: number, min:number){
    
    let matrix:any[] = [];
    
    for(let j=min; j<a; j++){
      matrix[j]= [];
      for(let i=min; i<b; i++){
        matrix[j][i]="";
      }
    }
    return matrix;
  }


  inicializeVector( a: number){

    let vector:any = [];
    for(let i=0; i<a; i++){
      vector[i]=0;
    }
    return vector;
    
  }

  

}
