// eslint-disable-next-line max-classes-per-file
const atributo = (habilidad) => {
  if (habilidad > 10) {
    return 10;
  }
  if (habilidad < 0) {
    return 0;
  }
  return habilidad;
};
const contigoNo = (senor) => {
  if (senor.getClass() !== Luchador) {
    return "Soy mi propio jefe";
  }
  return senor;
};
class Personajes {
  nombre;
  familia;
  edad;
  estado = "vivo";
  serie = "Juego de Tronos";

  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }

  comunicar(personaje) {
    return personaje.guion;
  }

  morir(personaje) {
    personaje.estado = "muerto";
  }
}
class Rei extends Personajes {
  anosDeReinado;
  guion = "Vais a morir todos";

  constructor(anosDeReinado) {
    super();
    this.anosDeReinado = anosDeReinado;
  }
}

class Luchador extends Personajes {
  arma;
  destreza;
  guion = "Primero pego y luego pregunto";
  constructor(arma, destreza) {
    super();
    this.arma = arma;
    this.destreza = atributo(destreza);
  }
}

class Asesor extends Personajes {
  siervoDe;
  guion = "No sé por qué, pero creo que voy a morir pronto";
  constructor(siervoDe) {
    super();
    this.siervoDe = siervoDe;
  }
}
class Escudero extends Personajes {
  siervoDe;
  pelotismo;
  guion = "Soy un loser";
  constructor(siervoDe, pelotismo) {
    super();
    this.siervoDe = contigoNo(siervoDe);
    this.pelotismo = atributo(pelotismo);
  }
}
