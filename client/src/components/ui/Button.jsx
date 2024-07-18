import React from 'react'

export default function Button({label}) {
  return (
    <a className=" bg-[#ccbd82] border-[#ccbd82] text-white font-bold rounded-sm hover:bg-[#19232a] px-4 py-3 transition-all text-sm cursor-pointer">{label}</a>
  )
}
