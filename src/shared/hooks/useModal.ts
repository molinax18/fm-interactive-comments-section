import { useEffect, useState } from "react";

export function useModal() {
  const [openModal, setOpenModal] = useState(false);
  const onClose = () => setOpenModal(false);
  const onOpen = () => setOpenModal(true);

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  return {
    openModal,
    onClose,
    onOpen,
  };
}
