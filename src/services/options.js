import { getConnection } from "../db/initDBConnection.js";

export const getCarOptions = async () => {
  const connection = getConnection();
  const brands_query = "SELECT * FROM car_brands";
  const prices_query = "SELECT * FROM car_prices";
  const years_query = "SELECT * FROM car_years";
  const mileages_query = "SELECT * FROM car_mileages";
  const [brands] = await connection.query(brands_query);
  const [prices] = await connection.query(prices_query);
  const [years] = await connection.query(years_query);
  const [mileages] = await connection.query(mileages_query);
  const topBrandsId = [22, 3, 2, 40, 28, 11, 33, 26, 38, 41];
  const topBrands = brands.filter((brand) => topBrandsId.includes(brand.id));
  const otherBrands = brands.filter((brand) => !topBrandsId.includes(brand.id));

  const newOptions = [
    {
      type: "brands",
      brands: [
        { type: "top", topBrands },
        { type: "other", otherBrands },
      ],
    },
    { type: "prices", prices },
    { type: "years", years },
    { type: "mileages", mileages },
  ];

  return newOptions;
};

export const getCarModels = async (req) => {
  const { brandId } = req.params;
  const connection = getConnection();
  const query = "SELECT * FROM car_models WHERE brand_id = ?";

  const [models] = await connection.query(query, [brandId]);

  return models;
};
