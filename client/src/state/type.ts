export interface ExpensesByCategory{
    salaries:number,
    services:number,
    supplies:number
}

export interface Month {
    expenses:number,
    id:string,
    month:string,
    nonOperationalExpenses:number,
    operationalExpenses:number,
    revenue:number,
    _id:string
}


export interface Day{
date:string,
expenses:number,
id:string,
revenue:number,
_id:string
}

export interface GetKpisResponse {
    _id:string,
    id:string,
    __v:number,

    totalExpenses:number,
    totalProfit:number,
    totalRevenue:number,

    expensesByCategory:ExpensesByCategory
    monthlyData:Array<Month>
    dailyData:Array<Day>
    createdAt:string;
    updatedAt:string;
}


export interface GetProductsResponse {
    _id:string,
    id:string,
    __v:number,

    price:number,
    expense:number,
    transactions:Array<string>,
    createdAt:string;
    updatedAt:string;

    
}

export interface GetTransactionsResponse {
    _id:string,
    id:string,
    __v:number,

    buyer:string,
    amount:number,
    productIds:Array<string>,
    createdAt:string;
    updatedAt:string;

    
}