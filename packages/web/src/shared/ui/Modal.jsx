import { createPortal } from 'preact/compat'
import styles from './Modal.module.css'

export function Modal(props) {
  if (props.show) {
    return createPortal(
      <div class={styles.backdrop}>
        {props.children}
      </div>,
      document.body
    )
  }

  return null
}
