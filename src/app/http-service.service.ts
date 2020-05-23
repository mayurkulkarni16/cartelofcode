import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  url = "https://cartelapi.com.au/api/products";

  constructor(private http: HttpClient) {}

  getAllData() {
    return this.http.get(this.url);
  }

  sendData(createData) {
    return this.http.post(this.url, JSON.stringify(createData));
  }

  updateData(updateData) {
    return this.http.put(this.url + "/" + updateData.solutionName, JSON.stringify(updateData));
  }

  deleteData(solutionName) {
    return this.http.delete(this.url + "/" + solutionName);
  }
}
