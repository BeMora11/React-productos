import axios from "axios";
import Cookies from "js-cookie";
import { usuarioURL } from "./api";

export default {
  setUsuario (usuario) {
    Cookies.set('usuario', usuario);
  },
  getUsuario () {
    return Cookies.get('usuario');
  },
  login (email, password) {

    let data = new FormData();
    data.append('usuario', email);
    data.append('password', password);

    return axios.post(usuarioURL + '?op=login', data);
  },
  logout (){
    Cookies.remove('usuario');
  }
}