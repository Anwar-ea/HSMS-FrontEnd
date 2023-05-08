import { Component } from '@angular/core';
import { PrimeNgModule } from '../../modules/prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    PrimeNgModule
  ]
})
export class GenericTableComponent {
    customers:any[] = [];

    representatives: any[] = [];

    statuses: any[]= [];

    loading: boolean = true;

    activityValues: number[] = [0, 100];

    constructor() {}

    ngOnInit() {
        // this.customerService.getCustomersLarge().then((customers: any) => {
        //     this.customers = customers;
        //     this.loading = false;

        //     this.customers.forEach((customer) => (customer.date = new Date(customer.date)));
        // });

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    }

    clear(table: Table) {
        table.clear();
    }

    // getSeverity(status:any) {
    //     switch (status) {
    //         case 'unqualified':
    //             return 'danger';

    //         case 'qualified':
    //             return 'success';

    //         case 'new':
    //             return 'info';

    //         case 'negotiation':
    //             return 'warning';

    //         case 'renewal':
    //             return null;
    //     }
    // }
}
