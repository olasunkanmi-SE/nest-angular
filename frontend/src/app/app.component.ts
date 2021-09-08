import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  baseURL: string = environment.backendAPI;
  title = 'frontend';
  backendMsg$: string = '';
  constructor(private http: HttpClient) {
    this.showMessage();
  }

  showMessage() {
    this.getBackendMsg()
      .pipe()
      .subscribe((res) => {
        this.backendMsg$ = res;
      });
  }

  getBackendMsg(): Observable<string> {
    return this.http.get(`${this.baseURL}`, { responseType: 'text' });
  }
}
