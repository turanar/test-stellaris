import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

declare var lozad: any;

@Injectable()
export class TechnologyService {
  observer: any;

  constructor(private httpClient: HttpClient) {}

  public fetch(version: string, type: string): Observable<any> {
    return this.httpClient.get(`/assets/json/${version}/${type}.json`);
  }

  public observe() {
    if(!this.observer) this.observer = lozad();
    this.observer.observe();
  }

}


