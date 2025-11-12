"use client";

import { useAuthStore } from "@/lib/store/authStore";
import css from "./GreetingBlock.module.css";

export default function GreetingBlock() {
  const user = useAuthStore((s) => s.user);

  // if (isLoading) {
  //   return <p className={css.loading}>Loading...</p>;
  // }

  // if (isLoading) {
  //   return <p className={css.loading}>Loading...</p>;
  // }

  // if (isError || !user?.name) {
  //   return (
  //     <div className={css.block}>
  //       <p className={css.title}>Доброго дня!</p>
  //     </div>
  //   );
  // }

  if (!user)
    return (
      <div className={css.block}>
        <h2 className={css.title}>Доброго ранку!</h2>
      </div>
    );

  return (
    <div className={css.block}>
      <h2 className={css.title}>Доброго ранку {user && ", " + user.name}!</h2>
    </div>
  );
}
