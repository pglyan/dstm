import { useState } from 'preact/hooks'
import { Modal } from '#/shared/ui'
import styles from './NewProjectModal.module.css'

export function NewProjectModal() {
  const [show, setShow] = useState(false)

  const open = () => setShow(true)
  const close = () => setShow(false)

  return (
    <>
      <button class={styles.show} onClick={open}>
        add
      </button>
      <Modal show={show}>
        <div class={styles.modal}>
          <button onClick={close}>
            close
          </button>
        </div>
      </Modal>
    </>
  )
}
