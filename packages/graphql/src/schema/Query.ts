import { schemaComposer } from 'graphql-compose';

import { Order } from './Order';
import { Product } from './Product';
import { Account } from './Account';
import { Billing } from './Billing';

schemaComposer.Query.addFields({
  products: Product.getResolver('getAll'),
  order: Order.getResolver('getOne'),
  orders: Order.getResolver('getAll'),
  account: Account.getResolver('getInfo'),
  billing: Billing.getResolver('getAccountInvoices'),
});
