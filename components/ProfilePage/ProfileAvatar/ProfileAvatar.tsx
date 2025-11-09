import { useAuthStore } from "@/lib/store/authStore";
import Image from "next/image";

export default function ProfileAvatar() {
  const user = useAuthStore((state) => state.user);
  return (
    <div className={css.comtainer}>
      <Image
        src={
          user?.avatarUrl ??
          `https://ftp.goit.study/img/common/women-default-avatar.jpg`
        }
        height={132}
        width={132}
        alt="user avatar"
        className={css.avatarImage}
      />
      <div className={css.userInfo}>
        <div className={css.userName}></div>
        <div className={css.userEmail}></div>
      </div>
      <button>Завантажити</button>
    </div>
  );
}
