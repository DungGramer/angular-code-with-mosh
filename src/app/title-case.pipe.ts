import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): unknown {
    if (!value) {
      return null;
    }

    const prepositions = ['of', 'the'];

    const words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (i > 0 && prepositions.includes(words[i].toLowerCase())) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] =
          words[i].substr(0, 1).toUpperCase() +
          words[i].substr(1).toLowerCase();
      }
    }
    return words.join(' ');
  }
}
