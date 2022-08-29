const endPoint = {
  listPokemon: '/pokemon',
  detailPoke: (namePoke: string) => `/pokemon/${namePoke}`,
};

export default endPoint;
