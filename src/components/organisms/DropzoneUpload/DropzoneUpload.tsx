import { useDropzone } from 'react-dropzone'
import { useState } from 'react'
import { BsImage } from 'react-icons/bs'

import * as S from './DropzoneUpload.styles'

export type FileProps = {
  preview: string
  base64: string | ArrayBuffer | null
} & File

export const DropzoneUpload = () => {
  const [files, setFiles] = useState<FileProps[]>([])
  const [error, setError] = useState<string | null>(null)

  const parseError = (errorType: string) => {
    switch (errorType) {
      case 'file-invalid-type':
        return 'Formato de arquivo inválido, são aceitos apenas imagens'

      case 'file-too-large':
        return 'Arquivo muito pesado, deve ser menor que 300kb'

      default:
        return 'Erro no upload do arquivo'
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': ['.png', '.jpg', '.jpeg'] },

    multiple: false,
    onDrop: async (acceptedFiles, rejections) => {
      if (rejections && !!rejections.length) {
        setError(parseError(rejections[0].errors[0].code))
        return
      }

      const base64 = await blobToBase64(acceptedFiles[0])

      setError(null)

      setFiles(
        acceptedFiles.map((file) => {
          return Object.assign(file, {
            preview: URL.createObjectURL(file),
            base64
          })
        })
      )
    }
  })

  const blobToBase64 = async (
    blob: Blob
  ): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.readAsDataURL(blob)
    })
  }

  return (
    <S.Container>
      <S.Dropzone {...getRootProps({ className: 'dropzone' })}>
        <BsImage size={24} className="mb-2 text-zinc-600" />
        <p className="font-semibold text-zinc-600">
          Clique ou arraste a imagem aqui
        </p>
      </S.Dropzone>

      <S.Instructions>
        <p>
          A dimensão recomendado é de <b>1600 x 838</b>
        </p>
        <p>
          (mesma proporção do formato utilizado nas páginas de evento no{' '}
          <b>Facebook</b>)
        </p>
        <p>
          Formato <b>JPEG, GIF ou PNG de no máximo 2MB</b>
        </p>
        <p>Imagens com dimensões diferentes serão redimensionadas</p>
      </S.Instructions>
    </S.Container>
  )
}
