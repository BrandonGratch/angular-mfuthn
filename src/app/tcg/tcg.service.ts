import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { TCG } from './tcg';
import { tcgs } from '../tcgs';

import { MessageService } from '../message/message.service';

@Injectable({
    providedIn: 'root',
})
export class TCGService {

    private tcgUrl = '';  // URL to web api

    constructor(private messageService: MessageService) { }

    getTCGs(): Observable<TCG[]> {
        const heroes = of(tcgs);
        this.messageService.add('TCGService: fetched tcgs');
        return heroes;
    }

    getTCG(shortName: String): Observable<TCG> {
        // TODO: send the message _after_ fetching the hero
        this.messageService.add(`TCGService: fetched tcg shortName=${shortName}`);
        return of(tcgs.find(tcg => tcg.shortName === shortName));
      }
}