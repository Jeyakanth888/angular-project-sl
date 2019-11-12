import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

const getTime = (date) => {
    const h = date.getHours();
    const m = date.getMinutes();
    const ampm = h >= 12 ? 'pm' : 'am';
    let hours = h % 12;
    hours = hours ? hours : 12;
    const minutes = m < 10 ? '0' + m : m;
    return hours + ':' + minutes + ' ' + ampm;
};

const convertDayTimeDifference = (time: string) => {
    const date = new Date(time);
    const diff = (((new Date()).getTime() - date.getTime()) / 1000);
    const daydiff = Math.floor(diff / 86400);

    if (isNaN(daydiff) || daydiff < 0 || daydiff >= 31) {
        return '';
    }
    return daydiff === 0 && (
        diff < 60 && 'Just now' ||
        diff < 120 && '1 minute ago' ||
        diff < 3600 && Math.floor(diff / 60) + ' minutes ago' ||
        diff < 7200 && '1 hour ago' ||
        diff < 86400 && Math.floor(diff / 3600) + ' hours ago') ||
        daydiff === 1 && 'Yesterday at ' + getTime(date) ||
        daydiff < 7 && daydiff + ' days ago' ||
        daydiff < 31 && Math.ceil(daydiff / 7) + ' week(s) ago';
};

@Pipe({ name: 'dayTimeDiff' })

export class DayTimeDiffPipe implements PipeTransform {
    transform(value: string) {
        const tvalue = Number(value);
        const diff = Math.floor(((Date.now() - tvalue) / 1000) / 86400);

        if (diff < 30) {
            return convertDayTimeDifference(value);
        } else {
            const datePipe = new DatePipe('en-US');
            value = datePipe.transform(value, 'MMM-dd-yyyy');
            return value;
        }
    }
}
