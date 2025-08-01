import { useState } from 'preact/hooks'
import { Modal } from '#/shared/ui'
import styles from './NewQuestModal.module.css'

export function NewQuestModal() {
  const [show, setShow] = useState(false)

  const open = () => setShow(true)
  const close = () => setShow(false)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <button class={styles.show} onClick={open}>
        add
      </button>
      <Modal show={show}>
        <div class={styles.modal}>
          <form class={styles.form} onSubmit={handleSubmit}>
            <footer class={styles.footer}>
              <button type="button" class={styles.close} onClick={close}>
                close
              </button>
              <button type="submit" class={styles.submit}>
                create
              </button>
            </footer>
          </form>
        </div>
      </Modal>
    </>
  )
}
