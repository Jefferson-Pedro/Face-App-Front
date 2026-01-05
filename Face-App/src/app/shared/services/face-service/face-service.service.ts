import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment.development';
import { FaceDTO } from '../../../core/models/FaceRequest';

@Injectable({
  providedIn: 'root'
})
export class FaceService {

  private route = inject(Router);
  private http = inject(HttpClient);


  public recognizeFace(imageData: string) {}

  public registerFace(face: FaceDTO) {
    const url = `${environment.baseUrl}/face/register`;

    return this.http.post(url, face, { responseType: 'text' });
  }

}
