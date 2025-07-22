import Link from "next/link";
import React from "react";

export default function Logo(props) {
  const { textSizeClass, textAlign, width } = props;

  return (
    <div className="flex justify-start md:block">
      <div className={width}>
        <Link href="/">
          <img src="/img/header/logo-logo.png" alt="Логотип IDS" />
        </Link>
      </div>
    </div>
  );
}
