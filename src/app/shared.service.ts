import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
    private invokeRefresh = new EventEmitter();
    emitRefreshInvokeEvent(data) {
        this.invokeRefresh.emit(data);
    }
    getRefreshInvokeEmitter() {
        return this.invokeRefresh;
    } 
}