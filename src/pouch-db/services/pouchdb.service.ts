import { Injectable, EventEmitter } from '@angular/core';

import* as PouchDB  from 'pouchdb';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PouchdbService {

  private db : any;
  private isInstantiated : boolean;
  private listener : EventEmitter<any> = new EventEmitter;
  

  constructor() { 
   
  }

  public init() {
    if (!this.isInstantiated){
      let options = {
        live: true,
        retry: true
      };
      this.db = new PouchDB('chitchat')
      this.isInstantiated = true;
    }

    return this.db;
  }

  public fetch(){
    this.db.allDoc({include_docs : true});
  }

  public get(id: string) {
    return this.db.get(id);
  }

  public put(id: string, document: any) {
    document._id = id;
    return this.get(id).then(result => {
        document._rev = result._rev;
        return this.db.put(document);
    }, error => {
        if (error.status === '404') {
            return this.db.put(document);
        } else {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    });
  }


  public sync(remote: string) {
    const remoteDatabase = new  PouchDB(remote);
    this.db.sync(remoteDatabase, {
        live: true
    }).on('change', change => {
        this.listener.emit(change);
    }).on('error', error => {
        console.error(JSON.stringify(error));
    });
}


public getChangeListener() {
  return this.listener;
}


}
