import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get<{ "falcon-token": { "usd": number, "eur": number } }>(`https://api.coingecko.com/api/v3/simple/price?ids=falcon-token&vs_currencies=usd,eur`).toPromise();
    }

}