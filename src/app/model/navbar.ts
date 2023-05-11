export class Navbar {
    idNavbar: number;
    linkLinkedin: string;
    linkGithub: string;
    linkCodepen: string;
    editar: boolean;
    borrar: boolean;
  
    constructor(
      idNavbar: number,
      linkLinkedin: string,
      linkGithub: string,
      linkCodepen: string,
      editar: boolean,
      borrar: boolean
    ) {
      this.idNavbar = idNavbar;
      this.linkLinkedin = linkLinkedin;
      this.linkGithub = linkGithub;
      this.linkCodepen = linkCodepen;
      this.editar = editar;
      this.borrar = borrar;
    }
  }
  