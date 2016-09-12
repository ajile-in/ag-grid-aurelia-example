// import { inject, bindable, inlineView } from 'aurelia-framework';
// import { EventAggregator } from 'aurelia-event-aggregator';
// //import * as ag  from '../../../node_modules/ag-grid';

// @inject(EventAggregator)
// @inlineView(`
//     <template>
//     </template>
// `)
// export class MyGrid {
//     @bindable columns;
//     @bindable rows;
//     @bindable pageSize;

//     constructor(EventAggregator) {
//         this.ea = EventAggregator;
//         this.pageSize = 10;
//         this.rows = [];
//         console.log("****** In MyGrid constructor.....");
//     }

//     attached() {
//         let cols = this.columns.map(function (col) {
//             return {
//                 headerName: col.headerName,
//                 field: col.field
//             };
//         });

//         this.subscriber = this.ea.subscribe('rowHasBeenUpdated', response => {
//             console.log(response.testValue + "****rowHasBeenUpdated*****************");
//         });

//         let gridOptions = {
//             columnDefs: cols,
//             rowData: this.rows,
//             rowSelection: 'single',
//             rowHeight: 25,
//             groupHeaders: true,
//             pageSize: this.pageSize,
//             enableColResize: true,
//             enableSorting: true,
//             enableFilter: true,
//             setColumnVisible: true,
//             debug: true,
//             getNodeChildDetails(rowItem) {
//                 if (rowItem.group) {
//                     return {
//                         group: true,
//                         expanded: true,
//                         children: rowItem.participants,
//                     };
//                 } else {
//                     return null;
//                 }
//             },
//             icons: {
//                 groupExpanded: '<i class="fa fa-minus-square-o"/>',
//                 groupContracted: '<i class="fa fa-plus-square-o"/>',
//             },
//         };

//         var eGridDiv = document.querySelector('#eGridDiv');
//         this.gridOptions = gridOptions;
//         new ag.Grid(eGridDiv, gridOptions);
//         this.gridCreated = true;
//     }

//     rowsChanged(newValue, oldValue) {
//         if (this.gridCreated && newValue && newValue.length) {
//             this.gridOptions.api.setRowData(newValue);
//             this.gridOptions.api.refreshView();
//         }
//     }
// }
