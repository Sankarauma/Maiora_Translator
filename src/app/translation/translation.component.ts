import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {
  inputText: string = '';
  targetLang: string = 'fr';

  translatedText: string = '';

  constructor(private translationService: TranslationService) {}

  translateText() {
    this.translationService.translateText(this.inputText, this.targetLang).subscribe((response) => {
      this.translatedText = response.data.translations[0].translatedText;
    });
  }

  ngOnInit(): void {
  }

}
