import React from "react";

export default function ErrorComponent() {
  return (
    <div className="w-full my-4 my-8 p-4 text-center text-xl font-semibold bg-neutral-200 text-neutral-700 dark:bg-neutral-900 rounded dark:text-white">
      Não foi possível carregar as informações. Tente novamente mais tarde.
    </div>
  );
}
