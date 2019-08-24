import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor( ) { }

    setObject = (key) => (value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getObject = (key) => {
        var value = localStorage.getItem(key);
        return value && JSON.parse(value);
    }

    clearLocalStorage = () => {
        localStorage.clear();
    }
    
}
