import { Injectable } from '@angular/core';
import { Irock } from './interfaces/irock';


@Injectable({
  providedIn: 'root'
})
export class RocasService {

  protected rockList : Irock[] = [
    {
      id : 1,
      edad: 3,
      nombre: "Rocco",
      image: "../../assets/fun/rocco.webp",
      categoria: "Normal",
      descripcion: "Una roca comun y corriente. Advertencia: Tiene beef con Elmo.",
      gif: "../../assets/gifs/c47.gif"
    },
    {
      id : 2,
      edad: 3,
      nombre: "Chad",
      image: "../../assets/fun/chad.jpeg",
      categoria: "Normal",
      descripcion: "Una roca comun y corriente. Advertencia: Tiene beef con Elmo.",
      gif: "../../assets/gifs/c47.gif"
    },
    {
      id : 3,
      edad: 3,
      nombre: "Dwayne",
      image: "../../assets/fun/dwayne.jpg",
      categoria: "Normal",
      descripcion: "Una roca comun y corriente. Advertencia: Tiene beef con Elmo.",
      gif: "../../assets/gifs/c47.gif"
    },
    {
      id : 4,
      edad: 3,
      nombre: "Rocky",
      image: "../../assets/fun/rocky.jpeg",
      categoria: "Normal",
      descripcion: "Una roca comun y corriente. Advertencia: Tiene beef con Elmo.",
      gif: "../../assets/gifs/c47.gif"
    },
    {
      id : 5,
      edad: 3,
      nombre: "Pluto",
      image: "../../assets/fun/moonpluto.webp",
      categoria: "Normal",
      descripcion: "Una roca comun y corriente. Advertencia: Tiene beef con Elmo.",
      gif: "../../assets/gifs/c47.gif"
    },
    {
      id : 6,
      edad: 3,
      nombre: "Rocky S.",
      image: "../../assets/fun/rockys.jpg",
      categoria: "Normal",
      descripcion: "Una roca comun y corriente. Advertencia: Tiene beef con Elmo.",
      gif: "../../assets/gifs/c47.gif"
    }


  ]


  constructor() { }


  getRockList()
  {
    return this.rockList
  }

  getRockById(id : number)
  {
    return this.rockList.find(value => value.id === id)
  }


}
