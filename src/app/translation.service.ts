import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private apiKey = '6LffWY4oAAAAACW2vnJ5B4Gr4DP_gfp3iiHmvh5f';

  constructor(private http: HttpClient) {}

  translateText(text: string, targetLang: string): Observable<any> {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`;
    const data = {
      q: text,
      target: targetLang,
    };

    return this.http.post(url, data);
  }
}
