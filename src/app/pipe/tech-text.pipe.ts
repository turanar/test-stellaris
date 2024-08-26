import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ name: 'techText'})
export class TechTextPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    return value
      .replace(/£([^£]*)£/g, "<img class=\"resource\" src=\"assets/icons/$1.png\">")
      .replace(/§Y([^§]*)§!/g, "<span class=\"yellow\">$1</span>")
      .replace(/§G([^§]*)§!/g, "<span class=\"green\">$1</span>")
      .replace(/§H([^§]*)§!/g, "<span class=\"orange\">$1</span>")
      .replace(/§C([^§]*)§!/g, "<span class=\"cyan\">$1</span>")
      .replace(/§c([^§]*)§!/g, "<span class=\"blue-green\">$1</span>")
  }
}
