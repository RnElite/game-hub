import {
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
} from "@/components/ui/menu"
import { useState } from "react"
import ArrowUpDown from "./Icons-Animations/ArrowUpDown"

export interface Sort{
  onSelecSortOrder: (sortOrder: String)=>void;
  sortOrder: String;
}

const SortSelector = ({onSelecSortOrder, sortOrder}:Sort) => {
    const [value, setValue] = useState("Order By:")
    const setOrders = [
      {value:'', label:'Relevance'},
      {value:'-added', label:'Data added'},
      {value:'name', label:'Name'},
      {value:'-relesed', label:'Release date'},
      {value:'-matacritic', label:'Popluarity'},
      {value:'-rating', label:'Average rating'}, 
    ];
    const currentSortOrder = setOrders.find(order => order.value === sortOrder)
    return (
      <MenuRoot>
        <ArrowUpDown Sort={currentSortOrder?.label || 'Relevance'} value={""} />
        <MenuContent minW="10rem">
          <MenuRadioItemGroup value={value} onValueChange={(e) => setValue(e.value)}>
            {setOrders.map(order => 
            <MenuRadioItem onClick={()=>onSelecSortOrder(order.value)} key={order.value} value={order.value}>
              {order.label}
            </MenuRadioItem>)}
          </MenuRadioItemGroup>
        </MenuContent>
      </MenuRoot>
    )
}

export default SortSelector