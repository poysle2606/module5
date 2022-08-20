import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  word: Dictionary[] = [];

  constructor() {
    this.word.push({id: 1, name: 'dog', mean: 'chó'});
    this.word.push({id: 2, name: 'cat', mean: 'mèo'});
    this.word.push({id: 3, name: 'fish', mean: 'cá'});
  }

  getAll() {
    return this.word;
  }

  findByWord(word: string) {
    for (const item of this.word) {
      if (item.mean === word) {
        return item;
      }
    }
  }
}
