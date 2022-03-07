// Item - Bota Leve
export interface Item {
  id: string;
  name: string;
  price?: number;
  components: ItemComponent[];
}

// Componente de Item - Asmódeo, Fio de fênix, Couro Rúnico
export interface ItemComponent {
  name: string;
  price?: number;
  quantity: number;
}
