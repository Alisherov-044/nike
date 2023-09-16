"use client";
import Link from "next/link";
import { TableInterface } from "@/interface";

export function Table({
  header,
  data,
  className,
  link,
  slug = "id",
}: TableInterface) {
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

  return (
    <div className={`table ${className || ""}`}>
      <div className="table__head">
        <div className="table__row">
          {header.map((label, index) => (
            <div
              className={`table__heading ${label}`}
              key={index}
              style={{
                width: `${divide(label)}%`,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="table__body">
        {data.map((item, index) =>
          link ? (
            <Link href={`${link}/${item[slug]}`} key={index}>
              <div className="table__row">
                {header.map((label, innderIndex) => (
                  <div
                    className={`table__data ${label}`}
                    key={innderIndex}
                    style={{ width: `${divide(label)}%` }}
                  >
                    {item[label]}
                  </div>
                ))}
              </div>
            </Link>
          ) : (
            <div className="table__row" key={index}>
              {header.map((label, innderIndex) => (
                <div
                  className={`table__data ${label}`}
                  key={innderIndex}
                  style={{ width: `${divide(label)}%` }}
                >
                  {item[label]}
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
