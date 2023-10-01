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
import { useState } from "react";
import { usePagination } from "@/hooks";
import { CategoryService } from "@/services";
import { useCategoryContext } from "@/context";

export default function AdminCategories() {
  const { categories } = useCategoryContext();
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const {
    modal: { isOpen, open, close },
    form: { onSubmit, handleSubmit, register, setValue },
  } = CategoryService();
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
          header={["id", "name", "slug"]}
          data={currentData}
          link="/admin/categories"
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
        <Modal
          isOpen={isOpen}
          close={close}
          button={!isUpload && <Button form="form" text="Submit" />}
        >
          {isUpload ? (
            <div className="admin__categories--image-form__container">
              <Input
                placeholder="Image"
                name="image"
                register={register("image", { required: true })}
              />
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
              <Input
                placeholder="Name"
                register={register("name", { required: true })}
              />
              <Select
                placeholder="Parent"
                options={[{ id: 0, name: "Itself" }, ...currentData]}
                value="id"
                label="name"
                nested="children"
                name="parentId"
                setValue={setValue}
              />
              <Upload placeholder="Image" onClick={() => setIsUpload(true)} />
            </Form>
          )}
        </Modal>
      </div>
    </main>
  );
}
