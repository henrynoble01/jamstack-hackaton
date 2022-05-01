import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  cloudinaryUrl: string = '';

  constructor(private http: HttpClient) {
    this.cloudinaryUrl = `${environment.cloudinaryUrl}`;
  }

  getIssues(): Observable<any | null> {
    return this.http
      .get('http://localhost:3000/issues?_sort=id&_order=desc')
      .pipe(
        retry(2),
        map((res: any) => {
          return res;
        })
      );
  }

  getIssue(id: any): Observable<any | null> {
    return this.http.get(`http://localhost:3000/issues/${id}`).pipe(
      retry(2),
      map((res: any) => {
        return res;
      })
    );
  }

  uploadFile(file: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('upload_preset', environment.uploadPresets);
    formData.append('folder', environment.folder);

    return this.http.post(
      `${this.cloudinaryUrl}/${environment.cloudinaryName}/upload`,
      formData
    );
  }

  addIssue(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/issues', data);
  }
}
