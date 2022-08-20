import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {Dictionary} from '../model/dictionary';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detailWord: Dictionary;
  word = '';

  constructor(private dictionaryService: DictionaryService,
              private activeRouter: ActivatedRoute) {
    this.activeRouter.paramMap.subscribe((paraMap: ParamMap) => {
      const word = paraMap.get('word');
      if (word != null) {
        this.detailWord = this.dictionaryService.findByWord(word);
      }
    });
  }

  ngOnInit(): void {
  }

}
