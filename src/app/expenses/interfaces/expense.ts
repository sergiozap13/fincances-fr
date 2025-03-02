export interface Expense {
  id:        string;
  cantidad:  number;
  motivo:    string;
  necesario: boolean;
  category:  string;
  fecha:     Date;
  notas:     string;
}
