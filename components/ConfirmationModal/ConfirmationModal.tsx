"use client";

import { useEffect } from "react";
import css from "./ConfirmationModal.module.css";
import Image from "next/image";

interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  confirmBtnText: string;
  cancelBtnText: string;
  onConfirm: () => Promise<void> | void;
  onCancel: () => void;
}

export default function ConfirmationModal({
  isOpen,
  title,
  confirmBtnText,
  cancelBtnText,
  onConfirm,
  onCancel,
}: ConfirmationModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div className={css.backdrop} onClick={onCancel}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={css.closeBtn}
          onClick={onCancel}
          aria-label="Close modal"
        >
          <Image src="/close.svg" alt="Close" width={24} height={24} />
        </button>

        <h2 className={css.title}>{title}</h2>

        <div className={css.actions}>
          <button type="button" className={css.cancelBtn} onClick={onCancel}>
            {cancelBtnText}
          </button>
          <button type="button" className={css.confirmBtn} onClick={onConfirm}>
            {confirmBtnText}
          </button>
        </div>
      </div>
    </div>
  );
}
