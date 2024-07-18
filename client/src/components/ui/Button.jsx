import React from 'react'

export default function Button({label}) {
  return (
    <a className=" bg-main-yellow-color border-main-yellow-color text-white font-bold rounded-sm hover:bg-main-text-color px-4 py-3 transition-all text-sm cursor-pointer">{label}</a>
  )
}
