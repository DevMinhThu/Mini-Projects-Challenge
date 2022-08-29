import request from '../../request';
import endPoint from '../endPoints';

export const getListPokemon = () => request.get(endPoint.listPokemon);
export const detailPoke = (namePoke: string) =>
  request.get(endPoint.detailPoke(namePoke));
