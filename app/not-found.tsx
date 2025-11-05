import { Metadata } from "next";
import css from "./Not-found.module.css";

export const metadata: Metadata = {
  title: `Not-found 404 of Leleka Page`,
  description: "There is no such page, please visit https://leleka.com/",
  openGraph: {
    title: `Not-found 404 Leleka App`,
    description: "There is no such page, please visit https://leleka.com/",
    url: `https://notehub.com/`,
    siteName: "Leleka",
    images: [
      {
        url: "https://.png",
        width: 1200,
        height: 630,
        alt: "Leleka not-found image",
      },
    ],
    type: "article",
  },
};

export default function NotFound() {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
