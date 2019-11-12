
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getQuestionNumber',
    pure: true
})
export class GetQuestionNumberPipe implements PipeTransform {
    transform(value, args?: any): any {
        return this.getQuestionNumber(value);
    }
    getQuestionNumber(val) {
        return '1.1:'
    }
}