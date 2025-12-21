import { useState } from "react";

export function useModal() {
  const [openModal, setOpenModal] = useState(false);
  const onClose = () => setOpenModal(false);
  const onOpen = () => setOpenModal(true);

  return {
    openModal,
    onClose,
    onOpen,
  };
}
