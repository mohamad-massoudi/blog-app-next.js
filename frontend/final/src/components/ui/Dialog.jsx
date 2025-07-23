import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function MyDialog({
  title,
  description,
  open,
  onClose,
  children,
}) {
  return (
    <>
      <Dialog
        open={open}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={onClose}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/50 blur-md" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-secondary-50 p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3">
                <div>
                  <div className="flex justify-between items-center pb-3 border-b border-secondary-200">
                    <div>
                      <p className="text-secondary-800 text-sm lg:text-base">
                        {title}
                      </p>
                      <p className="text-secondary-400 text-sm lg:text-base">
                        {description}
                      </p>
                    </div>
                    <button onClick={onClose}>
                      <XMarkIcon className="w-5 h-5 text-secondary-400" />
                    </button>
                  </div>
                </div>
              </DialogTitle>
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
