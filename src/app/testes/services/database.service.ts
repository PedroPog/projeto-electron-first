import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  fetchData(): Promise<any> {
    return (window as any).electronAPI?.fetchData() || Promise.resolve([]);
  }

  updateData(query: string, params: any[]): Promise<any> {
    return (window as any).electronAPI?.updateData(query, params) || Promise.resolve({ rowCount: 0 });
  }

  insertData(query: string, params: any[]): Promise<any> {
    return (window as any).electronAPI?.insertData(query, params) || Promise.resolve({ rowCount: 0 });
  }

  constructor() { }
}
