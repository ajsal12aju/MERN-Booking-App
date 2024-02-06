import Image from "../src/images/pro-removebg-preview (1).png";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
        console.log(params.row.email, 'params')
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "country", headerName: "Country", width: 100 },
  { field: "city", headerName: "City", width: 100 },
  { field: "phone", headerName: "Phone", width: 100 },

];

export const userRows = [
  {
    id: 1,
    username: "Ajsal",
    img: Image,
    status: "active",
    email: "a@gmail.com",
    age: 22,
  },
  {
    id: 2,
    username: "Shinto",
    img: Image,
    status: "passive",
    email: "s@gmail.com",
    age: 27,
  },
  {
    id: 3,
    username: "vignesh",
    img: Image,
    status: "pending",
    email: "v@gmail.com",
    age: 22,
  },
  {
    id: 4,
    username: "Nabeel",
    img: Image,
    status: "passive",
    email: "n@gmail.com",
    age: 21,
  },
  {
    id: 5,
    username: "kishor",
    img: Image,
    status: "active",
    email: "k@gmail.com",
    age: 25,
  },
  {
    id: 6,
    username: "vishnu",
    img: Image,
    status: "passive",
    email: "v@gmail.com",
    age: 24,
  },
  {
    id: 7,
    username: "vishnu",
    img: Image,
    status: "passive",
    email: "v@gmail.com",
    age: 24,
  },
  {
    id: 8,
    username: "vishnu",
    img: Image,
    status: "passive",
    email: "v@gmail.com",
    age: 24,
  },
  {
    id: 9,
    username: "vishnu",
    img: Image,
    status: "passive",
    email: "v@gmail.com",
    age: 24,
  },
  {
    id: 10,
    username: "vishnu",
    img: Image,
    status: "passive",
    email: "v@gmail.com",
    age: 24,
  },
  {
    id: 11,
    username: "vishnu",
    img: Image,
    status: "passive",
    email: "v@gmail.com",
    age: 24,
  },
];
