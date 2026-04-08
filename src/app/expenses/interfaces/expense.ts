export interface Expense {
  id:        string;
  amount:    number;
  reason:    string;
  necessary: boolean;
  category:  string;
  date:      string;
  notes?:    string;
}
