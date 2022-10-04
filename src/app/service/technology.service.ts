import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class TechnologyService {
  constructor(private httpClient: HttpClient) {}

  public fetch(version: string, type: string): Observable<any> {
    return this.httpClient.get(`/assets/json/${version}/${type}.json`);
  }
}


