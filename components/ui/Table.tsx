"use client";
import Link from "next/link";
import { useState } from "react";
import { TableInterface } from "@/interface";

export function Table({
  header,
  data,
  className,
  link,
  nested,
  slug = "id",
}: TableInterface) {
  const [open, setOpen] = useState<any>(undefined);
  const [childOpen, setChildOpen] = useState<any>(undefined);

  const divide = (label: string) => {
    const normalWidth = 100 / header.length;

    if (label === "id") {
      return normalWidth / 1.5;
    }

    if (label === "description") {
      return normalWidth * 1.5;
    }

    return normalWidth;
  };

  const openTable = (item: any, child?: boolean) => {
    if (child) {
      setChildOpen(item === childOpen ? undefined : item);
    } else {
      setOpen(item === open ? undefined : item);
    }
  };

  const addClass = (item: any, child?: boolean) => {
    if (child) {
      return item === childOpen ? "open" : "";
    } else {
      return item === open ? "open" : "";
    }
  };

  const checkContent = (item: any, child?: boolean) => {
    if (child) {
      return item === childOpen;
    } else {
      return item === open;
    }
  };

  const HeaderList = ({
    header,
    className,
    item,
  }: Pick<TableInterface, "header" | "className"> & { item?: any }) => {
    return header.map((label, index) => (
      <div
        className={`${className} ${label}`}
        key={index}
        style={{
          width: `${divide(label)}%`,
        }}
      >
        {item ? item[label] : label}
      </div>
    ));
  };

  const TableContent = ({
    data,
    child,
  }: Pick<TableInterface, "data"> & { child?: boolean }) => {
    return data.map((item, index) =>
      link ? (
        <div
          className={`table__row--link ${addClass(item, child)}`}
          key={index}
        >
          {nested && item[nested].length ? (
            <span className="plus" onClick={() => openTable(item, child)}>
              {checkContent(item, child) ? "-" : "+"}
            </span>
          ) : null}
          <Link href={`${link}/${item[slug]}`} className="table__row">
            <HeaderList header={header} item={item} className="table__data" />
          </Link>
          {nested && item[nested].length ? (
            <div className="children">
              <TableContent data={item[nested]} child={true} />
            </div>
          ) : null}
        </div>
      ) : (
        <div className="table__row" key={index}>
          <HeaderList header={header} item={item} />
        </div>
      )
    );
  };

  return (
    <div className={`table ${className || ""}`}>
      <div className="table__head">
        <div className="table__row">
          <HeaderList header={header} className="table__heading" />
        </div>
      </div>
      <div className="table__body">
        <TableContent data={data} />
      </div>
    </div>
  );
}
