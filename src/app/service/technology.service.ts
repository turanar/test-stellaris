import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class TechnologyService {
  constructor(private httpClient: HttpClient) {}

  public physics(): Observable<any> {
    return this.httpClient.get('/assets/physics.json');
  }
}


