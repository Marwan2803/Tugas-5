const segitiga = {
  luas: (alas, tinggi) => {
    return (alas * tinggi) / 2;
  },
  keliling: (sisiA, sisiB, sisiC) => {
    return sisiA + sisiB + sisiC;
  },
};

const persegi = {
  luas: (sisi) => {
    return sisi * sisi;
  },
  keliling: (sisi) => {
    return 4 * sisi;
  },
};

const persegiPanjang = {
  luas: (panjang, lebar) => {
    return panjang * lebar;
  },
  keliling: (panjang, lebar) => {
    return 2 * (panjang + lebar);
  },
};
module.exports = {
  segitiga,
  persegi,
  persegiPanjang,
};
