import { Ingridient } from '../shared/ingridient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

	ingridientsChanged = new Subject();

	private ingridients = [
		new Ingridient('Apples', 5),
		new Ingridient('Tomatoes', 10),
	];


	getIngridients() {
		return this.ingridients.slice();
	}

	addIngridient(ingridient: Ingridient) {
		this.ingridients.push(ingridient);
		this.ingridientsChanged.next(this.ingridients.slice());
	}
	
	addIngridients(ingridients: Ingridient[]) {
		// for(let ingridient of ingridients) {
		// 	this.addIngridient(ingridient);
		// }

		this.ingridients.push(...ingridients);
		this.ingridientsChanged.next(this.ingridients.slice());
	}
}