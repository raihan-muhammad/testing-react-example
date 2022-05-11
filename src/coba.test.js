const penjumlahan = (angka1, angka2) => {
  return angka1 + angka2;
};

const pengurangan = (angka1, angka2) => {
  return angka1 - angka2;
};

// Pengurangan
// Pembagian
// Perkalian
// Rata-rata

describe(`Testing for aritmatika`, () => {
  test(`logika function penjumlahan`, () => {
    expect(penjumlahan(1, 1)).toBe(2);
  });

  it(`Shoud be a pengurangan`, () => {
    expect(pengurangan(5, 2)).toBe(3);
  });
});
