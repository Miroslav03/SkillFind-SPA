import React from "react";
import PropTypes from "prop-types";

export default function Button({ label, px, py }) {

  return (
    <a
      className={`bg-main-yellow-color text-white font-bold rounded-sm ${py} ${px} hover:bg-main-text-color transition-all text-sm cursor-pointer `}
    >
      {label}
    </a>
  );
}
