import LayoutModal from "../LayoutModal/LayoutModal";
import useMount from "../hooks/useMount";
import Portal from "../../Portal/Portal";
import { ReactNode, memo } from "react";

const SimpleAnimatedModal = memo(
  ({
    opened,
    onClose,
    children,
  }: {
    opened: boolean;
    onClose: () => void;
    children: ReactNode;
  }) => {
    const { mounted } = useMount({ opened });
    if (!mounted) {
      return null;
    }
    return (
      <Portal>
        <LayoutModal opened={opened} onClose={onClose}>
          {children}
        </LayoutModal>
      </Portal>
    );
  }
);

export default SimpleAnimatedModal;
