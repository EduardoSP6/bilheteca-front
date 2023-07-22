import dynamic from 'next/dynamic'
import { formats, modules } from './RichetTextEditor.utils'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>
})

export const RichTextEditor = () => {
  return (
    <QuillNoSSRWrapper
      modules={modules}
      formats={formats}
      theme="snow"
      onChange={(lala) => console.log('onchange')}
      placeholder="Adicione aqui a descrição do seu evento"
    />
  )
}
