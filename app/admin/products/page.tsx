"use client";
import { useModal, usePagination } from "@/hooks";
import {
  Button,
  Input,
  Modal,
  Pagination,
  Select,
  Table,
  Textarea,
  Upload,
} from "@/components";

const products = [
  {
    id: 1,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 2,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 3,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 4,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 5,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 6,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 7,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 8,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 9,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 10,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 11,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 12,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 13,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 14,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 15,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 16,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 17,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 18,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 19,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 20,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 21,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 22,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 23,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 24,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 25,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 26,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 27,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 28,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 29,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 30,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 31,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 32,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 33,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 34,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 35,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 36,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 37,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 38,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 39,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
  {
    id: 40,
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    price: "$120",
    image: (
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/e0f75e71-7eed-4543-841f-77686c7e3a3a/court-legacy-lift-shoes-qpDJ7F.png" />
    ),
    description: "Elevate your style with the Nike...",
  },
];

export default function AdminProducts() {
  const { isOpen, open, close } = useModal();
  const {
    currentData,
    pages,
    currentPage,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
    paginate,
  } = usePagination(products);

  return (
    <main className="main admin__products">
      <div className="admin__pages--section__header">
        <h1 className="admin__pages--title">Products</h1>
        <Button className="admin__pages--button" onClick={open}>
          Add New Product
        </Button>
      </div>
      <div className="admin__table--wrapper">
        <Table
          header={["id", "name", "category", "price", "image", "description"]}
          data={currentData}
          link="/admin/products"
          slug="id"
          className="admin__table"
        />
        <Pagination
          pages={pages}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          firstPage={firstPage}
          lastPage={lastPage}
          paginate={paginate}
        />
      </div>
      <Modal isOpen={isOpen} close={close} button={<Button text="Submit" />}>
        <form className="admin__products--form">
          <Input placeholder="Name" />
          <Select
            placeholder="Category"
            options={currentData}
            value="id"
            label="name"
          />
          <Input placeholder="Price" parentClassName="sm-full" />
          <Textarea placeholder="Description" />
          <Upload placeholder="Image" />
        </form>
      </Modal>
    </main>
  );
}
