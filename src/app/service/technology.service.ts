import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class TechnologyService {
  constructor(private httpClient: HttpClient) {}

  public fetch(type: string): Observable<any> {
    return this.httpClient.get(`/assets/${type}.json`);
  }
}


