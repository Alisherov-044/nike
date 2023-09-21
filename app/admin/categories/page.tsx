"use client";
import {
  Button,
  Form,
  Input,
  Modal,
  Pagination,
  Select,
  Table,
  Upload,
} from "@/components";
import { usePagination } from "@/hooks";
import { categoryService } from "@/services";
import { useState } from "react";

const categories = [
  {
    id: 1,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 2,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [
      {
        id: 33,
        name: "Men",
        link: "/category/men",
        slug: "men",
        children: [
          {
            id: 37,
            name: "Men",
            link: "/category/men",
            slug: "men",
            children: [],
          },
          {
            id: 38,
            name: "Men",
            link: "/category/men",
            slug: "men",
            children: [],
          },
          {
            id: 39,
            name: "Men",
            link: "/category/men",
            slug: "men",
            children: [],
          },
        ],
      },
      {
        id: 34,
        name: "Men",
        link: "/category/men",
        slug: "men",
        children: [],
      },
      {
        id: 35,
        name: "Men",
        link: "/category/men",
        slug: "men",
        children: [],
      },
      {
        id: 36,
        name: "Men",
        link: "/category/men",
        slug: "men",
        children: [],
      },
    ],
  },
  {
    id: 3,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [
      {
        id: 34,
        name: "Men",
        link: "/category/men",
        slug: "men",
        children: [],
      },
      {
        id: 34,
        name: "Men",
        link: "/category/men",
        slug: "men",
        children: [],
      },
    ],
  },
  {
    id: 4,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 5,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 6,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 7,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 8,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 9,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 10,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 11,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 12,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 13,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 14,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 15,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 16,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 17,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 18,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 19,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 20,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 21,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 22,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 23,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 24,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 25,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 26,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 27,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 28,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 29,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 30,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 31,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
  {
    id: 32,
    parentId: 0,
    name: "Men",
    link: "/category/men",
    slug: "men",
    children: [],
  },
];

export default function AdminCategories() {
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const {
    modal: { isOpen, open, close },
    form: { onSubmit, handleSubmit, register, setValue },
  } = categoryService();
  const {
    currentData,
    pages,
    currentPage,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
    paginate,
  } = usePagination(categories);

  return (
    <main className="main admin__categories">
      <div className="admin__pages--section__header">
        <h1 className="admin__pages--title">Categories</h1>
        <Button className="admin__pages--button" onClick={open}>
          Add New Category
        </Button>
      </div>
      <div className="admin__table--wrapper">
        <Table
          header={["id", "name", "link", "slug"]}
          data={currentData}
          link="/admin/categories"
          slug="id"
          className="admin__table"
          nested="children"
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
        <Modal
          isOpen={isOpen}
          close={close}
          button={!isUpload && <Button form="form" text="Submit" />}
        >
          {isUpload ? (
            <div className="admin__categories--image-form__container">
              <Input placeholder="Image" />
              <Button
                type="button"
                text="Save"
                onClick={() => setIsUpload(false)}
              />
            </div>
          ) : (
            <Form
              id="form"
              onSubmit={handleSubmit(onSubmit)}
              className="admin__categories--form"
            >
              <Input placeholder="Name" register={register("name")} />
              <Select
                placeholder="Parent"
                options={[{ id: 0, name: "Itself" }, ...currentData]}
                value="id"
                label="name"
                nested="children"
                name="parentId"
                setValue={setValue}
              />
              <Input
                placeholder="Link"
                parentClassName="sm-full"
                register={register("link")}
              />
              <Upload placeholder="Image" onClick={() => setIsUpload(true)} />
            </Form>
          )}
        </Modal>
      </div>
    </main>
  );
}
