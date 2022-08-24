
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{PersonaService} from 'src/app/service/personas.service';
import { PersonaEdit } from '../Model/PersonaEdit';

import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
  animations:[
    trigger('enterState', [
      state('void',style({
        transform:'translateX(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(300,style({
          transform:'translateX(0)',
          opacity:1
        }))
      ])
    ])
  ]
})

export class EncabezadoComponent implements OnInit {

  public persona: PersonaEdit | undefined;
  public editPersona : PersonaEdit | undefined;
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }


  ngOnInit(): void {
  
  }

    
     
  
    }
   


   
  
 