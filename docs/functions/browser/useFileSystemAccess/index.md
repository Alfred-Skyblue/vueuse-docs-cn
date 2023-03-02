# useFileSystemAccess

创建和读写本地文件 [`FileSystemAccessAPI`](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API).

## 演示

<demo src="./demo.vue" title="useFileSystemAccess" desc="创建和读写本地文件"></demo>

## 类型

```ts
/**
 * window.showOpenFilePicker 参数
 * @see https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker#parameters
 */
export interface FileSystemAccessShowOpenFileOptions {
  multiple?: boolean
  types?: Array<{
    description?: string
    accept: Record<string, string[]>
  }>
  excludeAcceptAllOption?: boolean
}
/**
 * window.showSaveFilePicker 参数
 * @see https://developer.mozilla.org/en-US/docs/Web/API/window/showSaveFilePicker#parameters
 */
export interface FileSystemAccessShowSaveFileOptions {
  suggestedName?: string
  types?: Array<{
    description?: string
    accept: Record<string, string[]>
  }>
  excludeAcceptAllOption?: boolean
}
/**
 * 文件操作
 */
export interface FileSystemFileHandle {
  getFile: () => Promise<File>
  createWritable: () => FileSystemWritableFileStream
}
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/FileSystemWritableFileStream
 */
interface FileSystemWritableFileStream extends WritableStream {
  /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/FileSystemWritableFileStream/write
     */
  write: FileSystemWritableFileStreamWrite
  /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/FileSystemWritableFileStream/seek
     */
  seek: (position: number) => Promise<void>
  /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/FileSystemWritableFileStream/truncate
     */
  truncate: (size: number) => Promise<void>
}
/**
 * 写入文件
 * @see https://developer.mozilla.org/en-US/docs/Web/API/FileSystemWritableFileStream/write
 */
interface FileSystemWritableFileStreamWrite {
  (data: string | BufferSource | Blob): Promise<void>
  (options: { type: 'write'; position: number; data: string | BufferSource | Blob }): Promise<void>
  (options: { type: 'seek'; position: number }): Promise<void>
  (options: { type: 'truncate'; size: number }): Promise<void>
}
/**
 * 文件系统访问窗口
 * @see https://developer.mozilla.org/en-US/docs/Web/API/FileSystemWritableFileStream/write
 */
export type FileSystemAccessWindow = Window & {
  showSaveFilePicker: (options: FileSystemAccessShowSaveFileOptions) => Promise<FileSystemFileHandle>
  showOpenFilePicker: (options: FileSystemAccessShowOpenFileOptions) => Promise<FileSystemFileHandle[]>
}
export type UseFileSystemAccessCommonOptions = Pick<
    FileSystemAccessShowOpenFileOptions,
    'types' | 'excludeAcceptAllOption'
>
export type UseFileSystemAccessShowSaveFileOptions = Pick<FileSystemAccessShowSaveFileOptions, 'suggestedName'>
export type UseFileSystemAccessOptions = ConfigurableWindow &
UseFileSystemAccessCommonOptions & {
  /**
         * 文件类型
         */
  dataType?: MaybeComputedRef<'Text' | 'ArrayBuffer' | 'Blob'>
}
/**
 * 创建和读写本地文件。
 * @see https://vueuse.org/useFileSystemAccess
 * @param options
 */
export declare function useFileSystemAccess(
  options: UseFileSystemAccessOptions & {
    dataType: 'Text'
  }
): UseFileSystemAccessReturn<string>
export declare function useFileSystemAccess(
  options: UseFileSystemAccessOptions & {
    dataType: 'ArrayBuffer'
  }
): UseFileSystemAccessReturn<ArrayBuffer>
export declare function useFileSystemAccess(
  options: UseFileSystemAccessOptions & {
    dataType: 'Blob'
  }
): UseFileSystemAccessReturn<Blob>
export declare function useFileSystemAccess(
  options: UseFileSystemAccessOptions
): UseFileSystemAccessReturn<string | ArrayBuffer | Blob>
export interface UseFileSystemAccessReturn<T = string> {
  isSupported: Ref<boolean>
  data: Ref<T | undefined>
  file: Ref<File | undefined>
  fileName: Ref<string>
  fileMIME: Ref<string>
  fileSize: Ref<number>
  fileLastModified: Ref<number>
  open: (_options?: UseFileSystemAccessCommonOptions) => Awaitable<void>
  create: (_options?: UseFileSystemAccessShowSaveFileOptions) => Awaitable<void>
  save: (_options?: UseFileSystemAccessShowSaveFileOptions) => Awaitable<void>
  saveAs: (_options?: UseFileSystemAccessShowSaveFileOptions) => Awaitable<void>
  updateData: () => Awaitable<void>
}
```
