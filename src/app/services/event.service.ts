import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Event} from '../classes/event';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }
getEvents() {
  return this.http.get<Event[]>('http://localhost:8080/api/event').pipe(
      tap(_ => console.log('fetched Events')),
      catchError(this.handleError<Event[]>('getEvents', []))
    );
}
getEvent(id: number): Observable<Event> {
  const url = `${'http://localhost:8080/api/events'}/${id}`;

  return this.http.get<Event>(url).pipe(
      tap(_ => console.log('fetched Events')),
      catchError(this.handleError<Event>('getEvents'))
    );
}
  create(event: Event): Observable<any> {
    return this.http.post<Event>('http://localhost:8080/api/events', event, httpOptions).pipe(
      tap((newUtilisateur: Event) => console.log(`added hero w/ id=${newUtilisateur.id}`)),
      catchError(this.handleError<Event>('create'))
    );
  }
  delete(event: Event | number): Observable<Event> {
    const id = typeof event === 'number' ? event : event.id;
    const url = `${'http://localhost:8080/api/events'}/${id}`;

    return this.http.delete<Event>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted event id=${id}`)),
      catchError(this.handleError<Event>('delete'))
    );
  }

}
