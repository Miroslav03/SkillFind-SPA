import React from "react";

export default function Button({ label, px, py, submit = false }) {
    switch (submit) {
        case true: {
            return (
                <button
                    type="submit"
                    className={`bg-main-yellow-color text-white font-bold rounded-sm ${py} ${px} hover:bg-main-text-color transition-all text-sm cursor-pointer `}
                >
                    {label}
                </button>
            );
        }
        case false: {
            return (
                <a
                    className={`bg-main-yellow-color text-white font-bold rounded-sm ${py} ${px} hover:bg-main-text-color transition-all text-sm cursor-pointer `}
                >
                    {label}
                </a>
            );
        }
    }
}
