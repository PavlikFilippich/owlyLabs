import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'posted'
})
export class PostedPipe implements PipeTransform {

	transform( value: boolean ): string {
		return value ? 'Да' : 'Нет';
	}

}
