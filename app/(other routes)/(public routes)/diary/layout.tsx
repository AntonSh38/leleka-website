"use client";

import DiaryEntryDetails from "@/components/DiaryPage/DiaryEntryDetails/DiaryEntryDetails";
import DiaryList from "@/components/DiaryPage/DiaryList/DiaryList";
import { useWindowSize } from "@/hooks/useWindowsSize";
import css from "./Diarylauout.module.css";
import GreetingBlock from "@/components/Dashboard/GreetingBlock/GreetingBlock";
import { useSelectedNoteStore } from "@/lib/store/selectedNoteStore";

export default function JourneyPage() {
  const { width } = useWindowSize();
  const selectedNote = useSelectedNoteStore((s) => s.selectedNote);
  console.log(selectedNote);
  return (
    <div>
      <GreetingBlock />
      <div className={css.wrapper}>
        <DiaryList />
        {width >= 1440 ? <DiaryEntryDetails /> : null}
        {!selectedNote && <p>Оберііть нотатку для перегляду деталей</p>}
        <p>Take note</p>
      </div>
    </div>
  );
}
