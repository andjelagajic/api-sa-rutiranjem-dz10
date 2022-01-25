import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private API_URL = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get<Photo[]>(this.API_URL + '?_start=0&_limit=5');
  }

  getPhotoById(id: number) {
    return this.http.get<Photo>(this.API_URL + '/' + id);
  }
}
