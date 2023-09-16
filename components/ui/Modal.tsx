import { Icon } from "..";
import { CloseIcon } from "@/assets/icons";
import { ModalInterface } from "@/interface";

export function Modal({ children, isOpen, close, button }: ModalInterface) {
  return (
    <div className={`bg__blur ${isOpen ? "open" : ""}`} onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__buttons--wrapper">
          {button}
          <Icon className="modal__button--close" onClick={close}>
            <CloseIcon />
          </Icon>
        </div>
        {children}
      </div>
    </div>
  );
}
