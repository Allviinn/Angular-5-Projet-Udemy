import { Component, OnInit,OnDestroy } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

	ingridients: Ingridient[];

    private subscription: Subscription

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.ingridients = this.shoppingListService.getIngridients();
        this.subscription = this.shoppingListService.ingridientsChanged.subscribe(
            (ingridients: Ingridient[]) => {
                this.ingridients = ingridients
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
