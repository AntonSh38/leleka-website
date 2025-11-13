"use client";

import GreetingBlock from "@/components/Dashboard/GreetingBlock/GreetingBlock";
import DiaryEntryDetails from "@/components/DiaryPage/DiaryEntryDetails/DiaryEntryDetails";
import DiaryList from "@/components/DiaryPage/DiaryList/DiaryList";
import css from "./DiaryPage.module.css";
import { useWindowSize } from "@/hooks/useWindowsSize";
import { useSelectedNoteStore } from "@/lib/store/selectedNoteStore";

export default function JourneyPage() {
  const { width } = useWindowSize();
  const selectedNote = useSelectedNoteStore((s) => s.selectedNote);
  console.log(selectedNote);
  return (
    <div>
      <GreetingBlock />
      <div className={css.diary_wrapper}>
        <DiaryList />

        {width >= 1440 ? <DiaryEntryDetails /> : null}
        {!selectedNote && width >= 1440 && (
          <p className={css.diary_template}>
            Оберіть нотатку для перегляду деталей
          </p>
        )}
      </div>
    </div>
  );
}
